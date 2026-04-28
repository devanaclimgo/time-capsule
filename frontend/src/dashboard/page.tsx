import { Link } from "react-router-dom";
import { LetterCard } from "../components/letter-card";
import { PenLine, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { apiFetch } from "../lib/api";
import { type Letter } from "../types/letter";
import { mapLetter } from "../lib/mappers";
import type { ApiLetter } from "../types/api";
import { motion, AnimatePresence } from "framer-motion";

interface FullLetter {
  id: string;
  content: string;
}

export default function DashboardPage() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<FullLetter | null>(null);

  useEffect(() => {
    async function loadLetters() {
      try {
        const data: ApiLetter[] = await apiFetch("/letters");
        const mapped = data.map(mapLetter);
        setLetters(mapped);
      } catch (error) {
        console.error(error);
      }
    }

    loadLetters();
  }, []);

  const handleDelete = (id: string) => {
    setLetters((prev) => prev.filter((l) => l.id !== id));
  };

  const handleOpen = async (id: string) => {
    try {
      const data = await apiFetch(`/letters/${id}`);
      setSelectedLetter(data);
    } catch (err) {
      console.error(err);
    }
  };

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
              <LetterCard
                key={letter.id}
                letter={letter}
                onDelete={handleDelete}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {letters.length === 0 && (
            <p className="text-muted-foreground text-center mt-10">
              Você ainda não tem cartas 💌
            </p>
          )}
        </section>
      </div>

      {/* MODAL GLOBAL */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              className="bg-card p-8 rounded-2xl max-w-xl w-full shadow-2xl max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-2xl mb-4">
                Sua carta 💌
              </h3>

              <p className="whitespace-pre-line leading-relaxed text-foreground">
                {selectedLetter.content}
              </p>

              <button
                onClick={() => setSelectedLetter(null)}
                className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}