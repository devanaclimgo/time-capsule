import { useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

function generateSparkles(): Sparkle[] {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
  }));
}

export function SparkleTitle() {
  const [sparkles] = useState<Sparkle[]>(generateSparkles);

  return (
    <div className="relative inline-block">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[color:var(--foreground)]">
        Time Capsule
      </h1>

      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute pointer-events-none animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-full w-full text-[color:var(--accent)] drop-shadow-[0_0_6px_rgba(196,122,44,0.6)]"
          >
            <path
              d="M12 2L13.09 8.26L19 7L14.74 11.91L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 11.91L5 7L10.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}

      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: Math.random() * 0.5 + 0.5
            transform: scale(1) rotate(180deg);
          }
        }

        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}