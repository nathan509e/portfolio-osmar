import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Car, Train, MessageCircle } from "lucide-react";
import { WA_LINK } from "../DrYan";

const infos = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. Paulista, 1000 — Sala 802", "Bela Vista, São Paulo — SP", "CEP: 01310-100"],
  },
  {
    icon: Clock,
    title: "Horários de Atendimento",
    lines: ["Segunda a Sexta: 8h às 19h", "Sábado: 8h às 13h", "Domingo: Fechado"],
  },
  {
    icon: Phone,
    title: "Contato",
    lines: ["(11) 99999-0000 (WhatsApp)", "contato@dryan.com.br"],
  },
];

const howToGet = [
  {
    icon: Train,
    title: "Metrô",
    desc: "Estação Trianon-Masp (Linha 2 – Verde), saída Av. Paulista. A 5 minutos a pé.",
  },
  {
    icon: Car,
    title: "De Carro",
    desc: "Estacionamento próprio no edifício. Entrada pela rua lateral. Convênio com manobrista.",
  },
];

// Replace the src below with your actual Google Maps embed URL
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098953897609!2d-46.65623862376885!3d-23.56237016148826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982b9c8db7a4cd4!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr";

export default function LocalizacaoPage() {
  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-[hsl(215,55%,22%)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-white/60 uppercase mb-3">ONDE ESTAMOS</p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-white">Localização</h1>
        </div>
      </div>

      {/* Map + Info */}
      <section className="bg-background py-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-3 h-[420px] lg:h-auto min-h-[420px]">
            <iframe
              title="Localização do consultório"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 bg-[hsl(210,28%,95%)] p-10 lg:p-14 flex flex-col justify-center gap-8">
            {infos.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest text-primary uppercase mb-1">{item.title}</p>
                  {item.lines.map((l) => (
                    <p key={l} className="font-body text-sm text-foreground/70">{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-[#1ebe5d] transition-colors self-start mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              AGENDAR CONSULTA
            </a>
          </div>
        </div>
      </section>

      {/* How to get there */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-3">ACESSO</p>
            <h2 className="font-heading text-4xl font-light text-foreground">Como chegar</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {howToGet.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-5 p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}