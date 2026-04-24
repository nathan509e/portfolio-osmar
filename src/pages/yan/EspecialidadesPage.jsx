import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart, Shield, Activity, Brain, Stethoscope, Scan,
  ChevronDown, ChevronUp
} from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import BookingButton from "../../components/shared/BookingButton";

const specialties = [
  {
    icon: Heart,
    title: "Cardiologia Clínica",
    short: "Diagnóstico e tratamento das doenças do coração.",
    long: "Avaliação completa da saúde cardiovascular, incluindo diagnóstico de arritmias, insuficiência cardíaca, hipertensão arterial e doença coronariana. Utilizo eletrocardiograma, ecocardiografia e holter para avaliação precisa.",
    itens: ["Consulta cardiológica completa", "Eletrocardiograma (ECG)", "Interpretação de exames de imagem", "Tratamento da hipertensão"],
  },
  {
    icon: Shield,
    title: "Medicina Preventiva",
    short: "Check-up completo para prevenir doenças antes que apareçam.",
    long: "Avaliação médica periódica com análise detalhada de exames laboratoriais, risco cardiovascular e identificação de fatores de risco modificáveis, promovendo uma vida mais longa e saudável.",
    itens: ["Check-up anual completo", "Avaliação de risco cardiovascular", "Orientação nutricional e estilo de vida", "Rastreamento de doenças crônicas"],
  },
  {
    icon: Activity,
    title: "Saúde do Homem",
    short: "Atendimento especializado voltado à saúde masculina.",
    long: "Cuidado integral focado nas necessidades específicas dos homens em todas as fases da vida, incluindo avaliação hormonal, saúde sexual, prevenção do câncer de próstata e saúde mental.",
    itens: ["Avaliação hormonal masculina", "Saúde sexual e fertilidade", "Rastreamento do câncer de próstata", "Saúde mental e bem-estar"],
  },
  {
    icon: Brain,
    title: "Medicina do Estilo de Vida",
    short: "Transformando hábitos para uma saúde de longo prazo.",
    long: "Abordagem baseada em evidências que utiliza mudanças no estilo de vida — alimentação, exercício, sono e manejo do estresse — como principal intervenção terapêutica para prevenir e tratar doenças crônicas.",
    itens: ["Prescrição de exercício físico", "Manejo do estresse e ansiedade", "Otimização do sono", "Coaching de saúde e nutrição"],
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    short: "Atendimento completo para todas as queixas clínicas.",
    long: "Atendimento primário de alta qualidade, resolvendo as mais variadas queixas clínicas com rigor diagnóstico e tratamento adequado, sendo o ponto de entrada ideal para cuidados de saúde.",
    itens: ["Consultas gerais e urgências", "Diagnóstico de doenças infecciosas", "Solicitação e interpretação de exames", "Referenciamento para especialistas"],
  },
  {
    icon: Scan,
    title: "Telemedicina",
    short: "Consulta médica online com a mesma qualidade do presencial.",
    long: "Atendimento remoto seguro e eficaz para seguimento de casos, renovação de receitas, avaliação de exames e orientações médicas, sem necessidade de deslocamento.",
    itens: ["Consulta online por vídeo", "Renovação de prescrições", "Avaliação de exames a distância", "Acompanhamento pós-consulta"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

function SpecialtyCard({ s, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl border border-border/60 bg-white overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-7">
        <div className="w-13 h-13 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
          <s.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.short}</p>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {open ? "Ver menos" : "Saiba mais"}
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-7 pb-7 border-t border-border/40 pt-5">
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.long}</p>
          <ul className="space-y-2">
            {s.itens.map((item) => (
              <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EspecialidadesPage() {
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
              Serviços
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mt-3 mb-5">
              Especialidades
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Atendimento especializado em diversas áreas para cuidar da sua saúde de forma completa e integrada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SPECIALTIES GRID ── */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((s, i) => (
              <SpecialtyCard key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Como funciona"
            title="Seu cuidado, do início ao fim"
            subtitle="Um processo simples e acolhedor para garantir o melhor atendimento."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Agende sua consulta", desc: "Entre em contato pelo WhatsApp, formulário online ou telefone para marcar seu horário com facilidade." },
              { step: "02", title: "Consulta personalizada", desc: "Dr. Yan ouvirá você com atenção, realizará o exame clínico e solicitará os exames necessários." },
              { step: "03", title: "Acompanhamento contínuo", desc: "Receba seu plano de tratamento e conte com suporte contínuo para alcançar seus objetivos de saúde." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading text-2xl text-primary">{step.step}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">Agende sua consulta</h2>
          <p className="font-body text-white/75 text-lg mb-8">
            Tire suas dúvidas e receba o atendimento que você merece.
          </p>
          <BookingButton
            size="lg"
            className="bg-white !text-primary hover:bg-white/90 px-10 h-14 text-base"
          />
        </motion.div>
      </section>
    </div>
  );
}