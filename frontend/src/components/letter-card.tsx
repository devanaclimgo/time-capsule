import { Lock, Clock, Send, Trash } from "lucide-react";
import type { Letter } from "../types/letter";
import { useState } from "react";
import { apiFetch } from "../lib/api";

interface LetterCardProps {
  letter: Letter;
}

const statusConfig = {
  locked: {
    label: "Lacrada",
    icon: Lock,
    className: "bg-accent/20 text-accent",
  },
  scheduled: {
    label: "Agendada",
    icon: Clock,
    className: "bg-muted text-muted-foreground",
  },
  sent: {
    label: "Entregue",
    icon: Send,
    className: "bg-primary/10 text-foreground",
  },
};

export function LetterCard({ letter }: LetterCardProps) {
  const [, setSelectedLetter] = useState(null);
  const config = statusConfig[letter.status];
  const StatusIcon = config.icon;

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      await apiFetch(`/letters/${letter.id}`, {
        method: "DELETE",
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`/letters/${letter.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        alert("Você ainda não pode ler essa carta 👀");
        return;
      }

      const data = await res.json();
      setSelectedLetter(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="group relative bg-card border border-border rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity" />

      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <Trash className="w-5 h-5 text-destructive hover:scale-110 transition-transform" />
      </button>

      <div
        className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"
        onClick={handleOpen}
      >
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>
              <span className="font-medium">Escrita:</span> {letter.writtenDate}
            </span>
            <span>
              <span className="font-medium">Entrega:</span>{" "}
              {letter.deliveryDate}
            </span>
          </div>

          <p className="text-foreground line-clamp-2 leading-relaxed">
            {letter.preview}
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.className}`}
        >
          <StatusIcon className="w-4 h-4" />
          {config.label}
        </div>
      </div>
    </article>
  );
}
