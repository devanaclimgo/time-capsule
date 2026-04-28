import { Lock, Clock, Send, Trash } from "lucide-react";
import type { Letter } from "../types/letter";
import { apiFetch } from "../lib/api";

interface LetterCardProps {
  letter: Letter;
  onDelete: (id: string) => void;
  onOpen: (id: string) => void;
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

export function LetterCard({ letter, onDelete, onOpen }: LetterCardProps) {
  const config = statusConfig[letter.status];
  const StatusIcon = config.icon;

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      await apiFetch(`/letters/${letter.id}`, {
        method: "DELETE",
      });

      onDelete(letter.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article
      onClick={() => onOpen(letter.id)}
      className="group relative cursor-pointer bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
    >
      {/* hover line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* delete */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
      >
        <Trash className="w-4 h-4 text-muted-foreground hover:text-destructive" />
      </button>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
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

          <p className="text-foreground line-clamp-2 leading-relaxed group-hover:text-foreground/80 transition-colors">
            {letter.preview}
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${config.className}`}
        >
          <StatusIcon className="w-4 h-4" />
          {config.label}
        </div>
      </div>
    </article>
  );
}