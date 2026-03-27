"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to dashboard for demo
    window.location.href = "/painel";
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Bem-vindo de Volta
          </h1>
          <p className="text-muted-foreground">
            Entre para acessar suas cartas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
                className="w-full bg-card border border-border rounded-md py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
                className="w-full bg-card border border-border rounded-md py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-muted-foreground mt-6">
          Não tem uma conta?{" "}
          <Link
            to="/sign_up"
            className="text-foreground underline hover:no-underline"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}
