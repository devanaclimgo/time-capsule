import { Link } from "react-router-dom";
import { LetterCard } from "../components/letter-card";
import { PenLine, Mail } from "lucide-react";

const mockLetters = [
  {
    id: "1",
    writtenDate: "15 de Janeiro, 2024",
    deliveryDate: "15 de Janeiro, 2025",
    status: "locked" as const,
    preview: "Querido eu do futuro, espero que você tenha conseguido...",
  },
  {
    id: "2",
    writtenDate: "20 de Março, 2024",
    deliveryDate: "20 de Março, 2026",
    status: "scheduled" as const,
    preview: "Hoje foi um dia especial. Quero que você se lembre de como...",
  },
  {
    id: "3",
    writtenDate: "5 de Dezembro, 2023",
    deliveryDate: "5 de Dezembro, 2024",
    status: "sent" as const,
    preview: "Olá! Se você está lendo isso, significa que um ano se passou...",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Suas Cartas
          </h1>
          <p className="text-muted-foreground">
            Mensagens guardadas para o futuro
          </p>
        </header>

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
                {mockLetters.length}
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Suas Cartas
          </h2>
          <div className="space-y-4">
            {mockLetters.map((letter) => (
              <LetterCard key={letter.id} {...letter} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}