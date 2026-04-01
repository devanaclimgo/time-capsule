import { Link } from "react-router-dom";
import { SparkleTitle } from "../components/sparkle-title";
import "../index.css";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <SparkleTitle />

        <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto text-balance">
          Escreva cartas para o seu eu do futuro. Guarde memórias, reflexões e
          sonhos em uma cápsula do tempo digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/sign_up"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Criar Conta
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-md border border-border hover:bg-accent/20 transition-colors"
          >
            Entrar
          </Link>
        </div>
      </div>

      <p className="absolute bottom-4 text-center w-full">
        <em className="text-[0.6rem] text-muted-foreground mt-12">
          Desenvolvido por{" "}
          <a
            href="https://github.com/devanaclimgo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Ana Gomes
          </a>
          .
        </em>
      </p>

      <footer className="absolute bottom-8 text-sm text-muted-foreground pb-7">
        Suas cartas, seus segredos, seu futuro.
      </footer>
    </main>
  );
}
