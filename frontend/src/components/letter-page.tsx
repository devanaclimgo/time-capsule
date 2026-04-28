import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiFetch } from "../lib/api";
import { ArrowLeft } from "lucide-react";

interface FullLetter {
  id: string;
  content: string;
  written_at: string;
  deliver_at: string;
}

export default function LetterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState<FullLetter | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiFetch(`/letters/${id}`);
        setLetter(data);
      } catch {
        navigate("/dashboard");
      }
    }

    load();
  }, [id, navigate]);

  if (!letter) return null;

  return (
    <main className="min-h-screen bg-background flex justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6 hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        {/* carta */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h1 className="font-serif text-2xl mb-6">Sua carta 💌</h1>

          <p className="text-muted-foreground text-sm mb-6">
            Escrita em {new Date(letter.written_at).toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-neutral max-w-none whitespace-pre-line text-foreground leading-relaxed">
            {letter.content}
          </div>
        </div>
      </div>
    </main>
  );
}