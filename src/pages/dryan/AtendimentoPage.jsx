import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { WA_LINK } from "../DrYan";

export default function AtendimentoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); e.target.reset(); }, 1400);
  };

  return (
    <div className="pt-20">
      <div className="bg-[hsl(215,55%,22%)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-white/70 uppercase mb-3">FALE CONOSCO</p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-white">Atendimento</h1>
        </div>
      </div>

      <section className="bg-[hsl(210,30%,94%)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="font-body text-sm text-foreground/60 max-w-xl mx-auto">
              Agende sua consulta hoje mesmo e dê o primeiro passo em direção a uma vida mais saudável.
            </p>
          </div>

          <div className="flex justify-center mb-14">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white font-body text-sm tracking-widest px-10 py-5 rounded-full hover:bg-[#1ebe5d] transition-colors shadow-lg shadow-green-200">
              <MessageCircle className="w-5 h-5" />
              AGENDAR PELO WHATSAPP
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: MapPin,  title: "Endereço",  lines: ["Av. Paulista, 1000 — Sala 802", "Bela Vista, São Paulo — SP"] },
                { icon: Clock,   title: "Horários",  lines: ["Segunda a Sexta: 8h às 19h", "Sábado: 8h às 13h"] },
                { icon: Phone,   title: "Telefone",  lines: ["(11) 99999-0000"] },
                { icon: Mail,    title: "E-mail",    lines: ["contato@dryan.com.br"] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest text-primary uppercase mb-0.5">{item.title}</p>
                    {item.lines.map((l) => <p key={l} className="font-body text-sm text-foreground/70">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {sent ? (
                <div className="p-8 rounded-lg bg-primary/10 text-center">
                  <p className="font-heading text-2xl text-primary mb-2">Mensagem enviada!</p>
                  <p className="font-body text-sm text-foreground/60">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <>
                  {[
                    { label: "Nome completo", type: "text",  placeholder: "Seu nome" },
                    { label: "WhatsApp",      type: "tel",   placeholder: "(11) 99999-9999" },
                    { label: "E-mail",        type: "email", placeholder: "seu@email.com" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="font-body text-xs tracking-wider text-foreground/60 uppercase block mb-1.5">{f.label}</label>
                      <input type={f.type} required placeholder={f.placeholder}
                        className="w-full bg-white border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-xs tracking-wider text-foreground/60 uppercase block mb-1.5">Mensagem</label>
                    <textarea required rows={4} placeholder="Descreva o motivo do contato..."
                      className="w-full bg-white border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={sending}
                    className="w-full bg-primary text-white font-body text-xs tracking-widest py-4 rounded-full hover:bg-primary/85 transition-colors disabled:opacity-60">
                    {sending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}