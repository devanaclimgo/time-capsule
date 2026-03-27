import { Link } from "react-router-dom";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 paper-texture">
      <div className="max-w-xl w-full text-center">
        
        {/* Decorative top element */}
        <div className="mb-8 fade-in">
          <svg
            className="w-16 h-16 mx-auto text-[color:var(--accent)] opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Hero */}
        <div className="space-y-8 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ink-text fade-in fade-in-delay-1">
            Time Capsule
          </h1>

          <div className="space-y-4 fade-in fade-in-delay-2">
            <p className="text-xl md:text-2xl italic leading-relaxed text-[color:var(--foreground)]/80">
              Palavras que atravessam o tempo
            </p>

            <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto text-[color:var(--muted-foreground)]">
              Escreva uma carta para quem você será amanhã, no próximo ano,
              ou em uma década. Preserve este momento, seus sonhos e sentimentos,
              para reencontrá-los quando o futuro se tornar presente.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-12 fade-in fade-in-delay-3">
          <blockquote className="text-2xl md:text-3xl italic leading-relaxed text-[color:var(--ink-faded)]">
            “O melhor presente que você pode dar ao seu eu do futuro
            é lembrar quem você foi.”
          </blockquote>
        </div>

        {/* CTA */}
        <div className="space-y-4 fade-in fade-in-delay-3">
          <Link
            to="/write"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg stamp-button bg-[color:var(--primary)] text-[color:var(--primary-foreground)]"
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

            <span>Escrever minha primeira carta</span>
          </Link>

          <p className="text-sm text-[color:var(--muted-foreground)]">
            Já tem cartas guardadas?{" "}
            <Link
              to="/dashboard"
              className="underline underline-offset-4 hover:text-[color:var(--foreground)] transition-colors"
            >
              Acessar minhas cartas
            </Link>
          </p>
        </div>

        {/* Bottom flourish */}
        <div className="mt-16 flex items-center justify-center gap-4 text-[color:var(--muted-foreground)]/40">
          <span className="w-16 h-px bg-current" />
          
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>

          <span className="w-16 h-px bg-current" />
        </div>
      </div>
    </main>
  );
}