import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, CheckCircle } from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import BookingButton from "../../components/shared/BookingButton";

const DOCTOR_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/0cc7ecdd2_generated_image.png";

const education = [
  {
    icon: GraduationCap,
    year: "2008–2014",
    title: "Graduação em Medicina",
    institution: "Universidade de São Paulo (USP)",
  },
  {
    icon: Briefcase,
    year: "2015–2017",
    title: "Residência em Clínica Médica",
    institution: "Hospital das Clínicas — FMUSP",
  },
  {
    icon: Award,
    year: "2018–2019",
    title: "Especialização em Cardiologia",
    institution: "InCor — Instituto do Coração",
  },
  {
    icon: Award,
    year: "2020",
    title: "Fellowship em Medicina Preventiva",
    institution: "Harvard Medical School (EUA)",
  },
];

const values = [
  "Atendimento humanizado e individualizado",
  "Medicina baseada em evidências científicas",
  "Comunicação clara e transparente",
  "Respeito pela história de cada paciente",
  "Atualização constante em tecnologia médica",
  "Comprometimento com resultados reais",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

export default function SobrePage() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent">
              Conheça o médico
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mt-3">
              Dr. Yan
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-accent/8 rounded-2xl blur-xl" />
              <img
                src={DOCTOR_IMG}
                alt="Dr. Yan"
                className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">
              Uma carreira dedicada à saúde das pessoas
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-5">
              Formado pela Faculdade de Medicina da Universidade de São Paulo, Dr. Yan
              construiu uma trajetória de excelência, com formação nas melhores
              instituições do Brasil e do exterior.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-5">
              Após sua residência no Hospital das Clínicas e especialização no InCor,
              aperfeiçoou seus conhecimentos nos Estados Unidos, trazendo as mais
              modernas práticas para o atendimento de seus pacientes.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Hoje, com mais de 10 anos de prática clínica e mais de 3.000 pacientes
              atendidos, Dr. Yan é reconhecido pela competência técnica e pela
              forma acolhedora e atenciosa com que trata cada consulta.
            </p>
            <BookingButton size="default" />
          </motion.div>
        </div>
      </section>

      {/* ── FORMATION TIMELINE ── */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Trajetória"
            title="Formação e Experiência"
            subtitle="Uma formação sólida nas melhores instituições do Brasil e do mundo."
          />
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mt-1 mb-0.5">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Princípios"
            title="O que guia a minha prática"
            subtitle="Valores que norteiam cada consulta e cada decisão médica."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-secondary/40 border border-border/40"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-foreground font-medium leading-snug">{v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="font-body text-white/75 text-lg mb-8">
            Agende uma consulta e receba atendimento médico de alta qualidade.
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