import { Link } from "react-router-dom";
import { LetterCard } from "../components/letter-card";
import { PenLine, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { apiFetch } from "../lib/api";
import { type Letter } from "../types/letter";
import { mapLetter } from "../lib/mappers";

export default function DashboardPage() {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    async function loadLetters() {
      try {
        const data = await apiFetch("/letters");
        console.log("LETTERS RESPONSE:", data);

        if (!Array.isArray(data)) {
          console.error("Resposta inválida:", data);
          return;
        }

        const mapped = data.map(mapLetter);
        setLetters(mapped);
      } catch (error) {
        console.error(error);
      }
    }

    loadLetters();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Suas Cartas
          </h1>
          <p className="text-muted-foreground">
            Mensagens guardadas para o futuro
          </p>
        </header>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link
            to="/write"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            <PenLine className="w-5 h-5" />
            Escrever uma Carta
          </Link>

          <div className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-md">
            <Mail className="w-5 h-5 text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Total de cartas</p>
              <p className="text-2xl font-serif font-bold text-foreground">
                {letters.length}
              </p>
            </div>
          </div>
        </div>

        {/* Letters */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Suas Cartas
          </h2>

          <div className="space-y-4">
            {letters.map((letter) => (
              <LetterCard key={letter.id} letter={letter} />
            ))}
          </div>

          {letters.length === 0 && (
            <p className="text-muted-foreground text-center mt-10">
              Você ainda não tem cartas 💌
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
