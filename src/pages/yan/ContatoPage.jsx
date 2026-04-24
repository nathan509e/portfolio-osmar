import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "5511999990000";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(11) 99999-0000",
    desc: "Resposta rápida em horário comercial",
    action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20Dr.%20Yan!%20Gostaria%20de%20agendar%20uma%20consulta.`, "_blank"),
    cta: "Chamar no WhatsApp",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 3000-0000",
    desc: "Seg a Sex, das 8h às 18h",
    action: () => window.open("tel:+551130000000"),
    cta: "Ligar agora",
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@dryan.com.br",
    desc: "Para dúvidas e informações gerais",
    action: () => window.open("mailto:contato@dryan.com.br"),
    cta: "Enviar e-mail",
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20",
  },
];

const infoItems = [
  { icon: MapPin, title: "Endereço", lines: ["Av. Paulista, 1000 — Sala 802", "Bela Vista, São Paulo — SP", "CEP: 01310-100"] },
  { icon: Clock, title: "Horários", lines: ["Segunda a Sexta: 8h às 19h", "Sábado: 8h às 13h", "Domingo: fechado"] },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      e.target.reset();
    }, 1200);
  };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
              Fale conosco
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mt-3 mb-5">
              Contato
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Estamos prontos para atender você. Escolha a forma de contato que preferir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHATSAPP HIGHLIGHT ── */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            {...fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl bg-green-50 border border-green-200"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Agendamento rápido via WhatsApp</h3>
                <p className="font-body text-sm text-muted-foreground">
                  A forma mais ágil de marcar sua consulta. Respondemos em minutos!
                </p>
              </div>
            </div>
            <Button
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20Dr.%20Yan!%20Gostaria%20de%20agendar%20uma%20consulta.`,
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 font-body gap-2 text-white whitespace-nowrap px-8"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="pb-10 pt-4 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {contactCards.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${c.border} ${c.bg}`}
              >
                <c.icon className={`w-7 h-7 ${c.color} mb-4`} />
                <h3 className="font-body font-semibold text-foreground mb-1">{c.title}</h3>
                <p className={`font-body text-base font-medium ${c.color} mb-1`}>{c.value}</p>
                <p className="font-body text-xs text-muted-foreground mb-4">{c.desc}</p>
                <button
                  onClick={c.action}
                  className={`font-body text-sm font-medium ${c.color} hover:opacity-70 transition-opacity`}
                >
                  {c.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-body font-semibold text-foreground">{item.title}</h3>
                </div>
                {item.lines.map((l) => (
                  <p key={l} className="font-body text-sm text-muted-foreground">{l}</p>
                ))}
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/50">
              <iframe
                title="Localização Dr. Yan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4!2d-46.6546!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjciUyA0NsKwMzknMTYuNiJX!5e0!3m2!1spt!2sbr!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...fadeUp} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 space-y-5"
            >
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-1">Envie uma mensagem</h2>
                <p className="font-body text-sm text-muted-foreground">
                  Preencha o formulário e entraremos em contato em até 24 horas úteis.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                  <Input required placeholder="Seu nome completo" className="font-body h-11 bg-muted/40" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">WhatsApp</label>
                  <Input required placeholder="(11) 99999-9999" className="font-body h-11 bg-muted/40" />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                <Input type="email" required placeholder="seu@email.com" className="font-body h-11 bg-muted/40" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Especialidade de interesse</label>
                <Input placeholder="Ex: Cardiologia, Check-up..." className="font-body h-11 bg-muted/40" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                <Textarea
                  required
                  placeholder="Descreva brevemente o motivo do contato ou sua dúvida..."
                  className="font-body min-h-28 bg-muted/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 font-body h-13 text-base gap-2"
              >
                {loading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}