import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-white mb-3">Dr. Yan</h3>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Medicina com excelência, cuidado e humanidade. Cuidando da sua saúde
              com dedicação e tecnologia de ponta.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/60 hover:text-white transition-colors text-sm font-body"
            >
              <Instagram className="w-4 h-4" />
              @dryan
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre o Dr. Yan", to: "/sobre" },
                { label: "Especialidades", to: "/especialidades" },
                { label: "Contato", to: "/contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-body text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                Av. Paulista, 1000 — Sala 802<br />São Paulo, SP
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                (11) 99999-0000
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                contato@dryan.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Yan — CRM/SP 000000. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-white/40">
            Medicina ética e humanizada.
          </p>
        </div>
      </div>
    </footer>
  );
}