type LetterStatus = "locked" | "scheduled" | "sent";

interface Letter {
  id: string;
  writtenDate: string;
  deliveryDate: string;
  daysUntil: number;
  status: LetterStatus;
  preview: string;
}

interface LetterCardProps {
  letter: Letter;
}

export function LetterCard({ letter }: LetterCardProps) {
  const isLocked =
    letter.status === "locked" || letter.status === "scheduled";

  return (
    <article
      className="group envelope-card rounded-sm p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="flex-shrink-0 mt-1">

          {/* Locked */}
          {letter.status === "locked" && (
            <div className="w-10 h-10 wax-seal rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          )}

          {/* Scheduled */}
          {letter.status === "scheduled" && (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[color:var(--accent)]/20">
              <svg
                className="w-5 h-5 text-[color:var(--accent)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          )}

          {/* Sent */}
          {letter.status === "sent" && (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[color:var(--muted)]">
              <svg
                className="w-5 h-5 text-[color:var(--muted-foreground)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">

            <p className="text-xs text-[color:var(--muted-foreground)]">
              Escrita em {letter.writtenDate}
            </p>

            {isLocked && letter.daysUntil > 0 && (
              <span className="text-xs font-medium text-[color:var(--accent)]">
                {letter.daysUntil} dias
              </span>
            )}
          </div>

          {/* Preview */}
          <p
            className={`text-lg leading-relaxed ${
              isLocked ? "ink-text line-clamp-2" : "text-[color:var(--foreground)]"
            }`}
          >
            {isLocked ? (
              <>
                {letter.preview.slice(0, 20)}
                <span className="text-[color:var(--muted-foreground)]/50">
                  ••••••••••••
                </span>
              </>
            ) : (
              letter.preview
            )}
          </p>

          {/* Footer info */}
          <div className="mt-3 flex items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
            {letter.status === "sent" ? (
              <span>Entregue em {letter.deliveryDate}</span>
            ) : (
              <>
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 1 1-18 0" />
                  <path d="M12 8v4l2 2" />
                </svg>

                <span>Será entregue em {letter.deliveryDate}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hover action */}
      {letter.status === "sent" && (
        <div className="mt-4 pt-4 border-t border-[color:var(--border)]/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-sm transition-colors text-[color:var(--accent)] hover:text-[color:var(--accent)]/80">
            Ler carta completa
          </button>
        </div>
      )}
    </article>
  );
}