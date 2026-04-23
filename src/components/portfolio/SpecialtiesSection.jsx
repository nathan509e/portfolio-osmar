import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Zap, Waves, Scan, HeartPulse } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    title: "Cardiologia Clínica",
    desc: "Avaliação completa da saúde cardiovascular, com diagnóstico e tratamento de doenças do coração.",
  },
  {
    icon: Activity,
    title: "Cateterismo Cardíaco",
    desc: "Procedimentos diagnósticos e terapêuticos minimamente invasivos com alta precisão.",
  },
  {
    icon: Zap,
    title: "Angioplastia",
    desc: "Desobstrução de artérias coronárias com implante de stents de última geração.",
  },
  {
    icon: Waves,
    title: "Ecocardiografia",
    desc: "Exames de imagem avançados para avaliação detalhada da estrutura e função cardíaca.",
  },
  {
    icon: Scan,
    title: "Check-up Cardiológico",
    desc: "Avaliação preventiva completa para identificar fatores de risco cardiovascular.",
  },
  {
    icon: HeartPulse,
    title: "Arritmias Cardíacas",
    desc: "Diagnóstico e tratamento de distúrbios do ritmo cardíaco com tecnologia avançada.",
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-widest">
            Áreas de Atuação
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Especialidades<span className="text-primary"> Médicas</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços em cardiologia, desde a prevenção
            até o tratamento intervencionista mais avançado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}