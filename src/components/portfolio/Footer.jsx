import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-primary">Dr.</span>
            <span className="font-heading text-xl font-semibold text-foreground">Ricardo Mendes</span>
          </div>

          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} — Todos os direitos reservados
            <Heart className="w-3 h-3 text-accent fill-accent" />
          </p>

          <p className="font-body text-xs text-muted-foreground">
            CRM/SP 123456 — RQE 78901
          </p>
        </div>
      </div>
    </footer>
  );
}