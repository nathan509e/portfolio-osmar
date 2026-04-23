import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua Oscar Freire, 2250 — Sala 1201", "Jardins, São Paulo — SP"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 3045-7890", "(11) 99876-5432"],
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    lines: ["Seg a Sex: 8h às 19h", "Sáb: 8h às 13h"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@drricardomedes.com.br"],
  },
];

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    e.target.reset();
  };

  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-widest">
            Contato
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Entre em<span className="text-primary"> Contato</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estou à disposição para
            cuidar da saúde do seu coração.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="font-body text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-3 pt-2"
            >
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input
                    required
                    placeholder="Seu nome"
                    className="font-body h-12 bg-muted/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input
                    required
                    placeholder="(11) 99999-9999"
                    className="font-body h-12 bg-muted/50 border-border/50"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  E-mail
                </label>
                <Input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="font-body h-12 bg-muted/50 border-border/50"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  required
                  placeholder="Descreva brevemente o motivo do contato..."
                  className="font-body min-h-32 bg-muted/50 border-border/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 font-body text-base h-14"
              >
                Enviar Mensagem
              </Button>
              <p className="font-body text-xs text-muted-foreground text-center">
                Responderemos em até 24 horas úteis.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}