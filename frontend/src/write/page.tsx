import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ========================
   TYPES
======================== */
interface FormData {
  to: string;
  writtenDate: string;
  deliveryDate: string;
  content: string;
}

/* ========================
   COMPONENT
======================== */
export default function WriteLetterPage() {
  const navigate = useNavigate();

  const [isSealing, setIsSealing] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    to: "",
    writtenDate: new Date().toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    deliveryDate: "",
    content: "",
  });

  /* ========================
     HANDLERS
  ======================== */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSealing(true);

    // simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("/dashboard");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ========================
     JSX
  ======================== */
  return (
    <main className="min-h-screen paper-texture py-8 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors mb-6 text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Voltar às minhas cartas</span>
        </Link>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div
            className={`letter-paper rounded-sm overflow-hidden ${
              isSealing ? "sealing" : ""
            }`}
            style={{
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), 0 8px 40px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top edge */}
            <div className="h-3 bg-[color:var(--paper-stain)]/30" />

            {/* Content */}
            <div className="px-6 md:px-10 py-8 md:py-10">

              {/* Header */}
              <div className="mb-8 space-y-4">
                <div className="text-right">
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {formData.writtenDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-[color:var(--muted-foreground)]" htmlFor="to">
                    Para
                  </label>

                  <input
                    type="text"
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="Querido eu do futuro,"
                    required
                    className="w-full bg-transparent border-b border-[color:var(--border)]/50 pb-2 text-xl ink-text placeholder:text-[color:var(--muted-foreground)]/40 focus:outline-none focus:border-[color:var(--accent)] transition-colors"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="mb-8">
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={16}
                  placeholder={`Escreva aqui o que você quer que seu eu do futuro saiba...

Conte sobre seus sonhos de hoje, seus medos, suas esperanças. Descreva como você está se sentindo neste exato momento. Fale sobre as pequenas coisas do seu dia a dia que você não quer esquecer.

Esta carta é um presente para você mesmo.`}
                  className="w-full bg-transparent text-lg ink-text placeholder:text-[color:var(--muted-foreground)]/40 focus:outline-none resize-none leading-8 letter-scroll"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent 0px, transparent 31px, rgba(0,0,0,0.05) 31px, rgba(0,0,0,0.05) 32px)",
                    backgroundAttachment: "local",
                  }}
                />
              </div>

              {/* Signature */}
              <div className="border-t border-[color:var(--border)]/30 pt-6">
                <p className="text-right text-xl ink-text">
                  Com carinho,<br />
                  <span className="text-[color:var(--muted-foreground)]">
                    você de hoje
                  </span>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[color:var(--paper-aged)]/50 border-t border-[color:var(--border)]/30 px-6 md:px-10 py-6">
              <div className="flex flex-col md:flex-row md:items-end gap-6">

                {/* Date */}
                <div className="flex-1 space-y-2">
                  <label
                    htmlFor="deliveryDate"
                    className="block text-sm text-[color:var(--muted-foreground)]"
                  >
                    Quando você quer receber esta carta?
                  </label>

                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    className="w-full px-4 py-3 bg-[color:var(--paper-light)] border border-[color:var(--border)]/50 rounded-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30"
                  />

                  <p className="text-xs text-[color:var(--muted-foreground)]">
                    Pode ser amanhã, no seu próximo aniversário, ou daqui a 10 anos
                  </p>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSealing}
                  className="flex items-center justify-center gap-3 px-8 py-4 wax-seal text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 stamp-button disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
                >
                  {isSealing ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path
                          fill="currentColor"
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>Selando...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                      <span>Selar carta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Hint */}
        <p className="text-center text-sm text-[color:var(--muted-foreground)] mt-8 max-w-md mx-auto leading-relaxed">
          Depois de selada, sua carta ficará guardada em segurança,
          esperando pacientemente até o dia de ser lida.
        </p>
      </div>
    </main>
  );
}