"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Stamp } from "lucide-react";
import { LetterPaper } from "../components/letter-paper";
import { apiFetch } from "../lib/api";
import { toast } from "sonner";

export default function WriteLetterPage() {
  const [isSealed, setIsSealed] = useState(false);
  const [letterData, setLetterData] = useState({
    from: "",
    to: "",
    writtenDate: new Date().toISOString().split("T")[0],
    deliveryDate: "",
    content: "",
  });

  const handleSeal = async () => {
    if (!letterData.content || !letterData.deliveryDate) return;

    try {
      await apiFetch("/letters", {
        method: "POST",
        body: JSON.stringify({
          letter: {
            content: letterData.content,
            sender: letterData.from,
            recipient: letterData.to,
            deliver_at: letterData.deliveryDate,
          },
        }),
      });

      toast.success("Carta criada com sucesso 💌");
      setIsSealed(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.errors) {
        toast.error(error.errors[0]);
      } else {
        toast.error("Erro inesperado");
      }
    }
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao painel
        </Link>

        <header className="text-center mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Escreva sua Carta
          </h1>
          <p className="text-muted-foreground">
            Uma mensagem para o seu eu do futuro
          </p>
        </header>

        <div
          className={`transition-all duration-700 ${isSealed ? "scale-95 opacity-80" : ""}`}
        >
          <LetterPaper
            letterData={letterData}
            setLetterData={setLetterData}
            isSealed={isSealed}
          />
        </div>

        {!isSealed ? (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSeal}
              disabled={
                !letterData.from ||
                !letterData.to ||
                !letterData.deliveryDate ||
                !letterData.content
              }
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Stamp className="w-5 h-5" />
              Lacrar Carta
            </button>
          </div>
        ) : (
          <div className="text-center mt-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 text-accent rounded-full font-medium mb-4">
              <Stamp className="w-5 h-5" />
              Carta Lacrada com Sucesso!
            </div>
            <p className="text-muted-foreground">
              Sua carta será entregue em {letterData.deliveryDate}
            </p>
            <Link
              to="/dashboard"
              className="inline-block mt-6 text-foreground underline hover:no-underline"
            >
              Ver todas as cartas
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
