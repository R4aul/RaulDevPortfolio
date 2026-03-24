"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="text-center space-y-8 max-w-md">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-bold text-foreground">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Pagina no encontrada
          </h2>
          <p className="text-muted-foreground text-lg">
            Lo siento, la pagina que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Code Block Style */}
        <div className="bg-card border border-border rounded-lg p-4 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-destructive/50"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
          </div>
          <code className="text-muted-foreground">
            <span className="text-primary">const</span> page = <span className="text-primary">await</span> findPage(url);
            <br />
            <span className="text-destructive">{"// Error: Page not found"}</span>
            <br />
            <span className="text-primary">return</span> <span className="text-muted-foreground">null</span>;
          </code>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Home size={18} />
            Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            Volver atras
          </button>
        </div>
      </div>
    </main>
  );
}
