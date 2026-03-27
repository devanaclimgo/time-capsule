import { Link } from "react-router-dom";
import { LetterCard } from "../components/Lettercard";

/* ========================
   TYPES
======================== */
type LetterStatus = "locked" | "scheduled" | "sent";

interface Letter {
  id: string;
  writtenDate: string;
  deliveryDate: string;
  daysUntil: number;
  status: LetterStatus;
  preview: string;
}

/* ========================
   MOCK DATA
======================== */
const mockLetters: Letter[] = [
  {
    id: "1",
    writtenDate: "15 de março, 2026",
    deliveryDate: "15 de março, 2027",
    daysUntil: 355,
    status: "locked",
    preview:
      "Querido eu do futuro, espero que você tenha conseguido realizar aquele sonho que parecia tão distante...",
  },
  {
    id: "2",
    writtenDate: "10 de janeiro, 2026",
    deliveryDate: "10 de julho, 2026",
    daysUntil: 107,
    status: "scheduled",
    preview:
      "Hoje comecei uma nova jornada e quero lembrar como me sinto neste exato momento...",
  },
  {
    id: "3",
    writtenDate: "25 de dezembro, 2025",
    deliveryDate: "25 de dezembro, 2025",
    daysUntil: 0,
    status: "sent",
    preview:
      "Reflexões sobre este ano que passou e meus desejos mais sinceros para o novo ano...",
  },
];

/* ========================
   COMPONENT
======================== */
export default function DashboardPage() {
  const lockedCount = mockLetters.filter((l) => l.status === "locked").length;
  const scheduledCount = mockLetters.filter((l) => l.status === "scheduled").length;
  const sentCount = mockLetters.filter((l) => l.status === "sent").length;

  return (
    <main className="min-h-screen paper-texture">
      <div className="max-w-2xl mx-auto px-4 py-10 md:py-14">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-2xl font-bold ink-text">
              Time Capsule
            </h1>
          </Link>

          <p className="text-3xl md:text-4xl ink-text mb-2">
            Suas cartas guardadas
          </p>

          <p className="text-sm text-[color:var(--muted-foreground)]">
            Memórias esperando para serem redescobertas
          </p>
        </header>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-10 text-sm text-[color:var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--accent)]" />
            <span>{lockedCount} seladas</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--primary)]/60" />
            <span>{scheduledCount} agendadas</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--muted-foreground)]/40" />
            <span>{sentCount} entregues</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/write"
          className="flex items-center justify-center gap-3 w-full py-5 mb-10 rounded-sm shadow-md transition-all duration-300 hover:shadow-lg stamp-button bg-[color:var(--primary)] text-[color:var(--primary-foreground)]"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>

          <span>Escrever nova carta</span>
        </Link>

        {/* Letters */}
        <section>
          <div className="space-y-4">
            {mockLetters.map((letter, index) => (
              <div
                key={letter.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LetterCard letter={letter} />
              </div>
            ))}
          </div>

          {mockLetters.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 mx-auto opacity-30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <p className="text-[color:var(--muted-foreground)]">
                Você ainda não escreveu nenhuma carta.
              </p>

              <p className="text-sm text-[color:var(--muted-foreground)]/70">
                Comece a criar memórias para o seu eu do futuro.
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[color:var(--border)]/30 text-center">
          <p className="text-lg italic text-[color:var(--muted-foreground)]/60">
            “O tempo passa, mas as palavras permanecem.”
          </p>
        </footer>
      </div>
    </main>
  );
}