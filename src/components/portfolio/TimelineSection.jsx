import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    year: "2006",
    icon: GraduationCap,
    title: "Graduação em Medicina",
    institution: "Universidade de São Paulo (USP)",
    desc: "Formado com honras na Faculdade de Medicina da USP.",
  },
  {
    year: "2009",
    icon: Briefcase,
    title: "Residência em Cardiologia",
    institution: "Instituto do Coração — InCor",
    desc: "Residência completa em cardiologia clínica no principal centro de referência da América Latina.",
  },
  {
    year: "2011",
    icon: Award,
    title: "Fellowship em Hemodinâmica",
    institution: "InCor — FMUSP",
    desc: "Subespecialização em cardiologia intervencionista e hemodinâmica.",
  },
  {
    year: "2014",
    icon: BookOpen,
    title: "Doutorado em Cardiologia",
    institution: "Universidade de São Paulo (USP)",
    desc: "Pesquisa sobre novas técnicas em angioplastia coronariana.",
  },
  {
    year: "2016",
    icon: Briefcase,
    title: "Chefe do Setor de Hemodinâmica",
    institution: "Hospital Sírio-Libanês",
    desc: "Liderança da equipe de cardiologia intervencionista em um dos melhores hospitais do Brasil.",
  },
  {
    year: "2020",
    icon: Award,
    title: "Consultório Próprio",
    institution: "Clínica Mendes Cardiologia",
    desc: "Inauguração de consultório com foco em atendimento personalizado e de alta qualidade.",
  },
];

export default function TimelineSection() {
  return (
    <section id="formacao" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-widest">
            Trajetória
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            Formação &<span className="text-primary"> Experiência</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"} ml-16 md:ml-0`}>
                    <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm font-medium text-primary mb-2">
                      {item.institution}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-md z-10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}