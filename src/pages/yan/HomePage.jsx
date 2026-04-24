import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Star, Users, Clock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingButton from "../../components/shared/BookingButton";
import SectionHeader from "../../components/shared/SectionHeader";

const DOCTOR_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/0cc7ecdd2_generated_image.png";

const services = [
  {
    icon: Heart,
    title: "Cardiologia Clínica",
    desc: "Diagnóstico e tratamento completo das doenças cardiovasculares.",
  },
  {
    icon: Shield,
    title: "Check-up Preventivo",
    desc: "Avaliação médica completa para prevenção e detecção precoce de doenças.",
  },
  {
    icon: Star,
    title: "Saúde do Homem",
    desc: "Cuidados especializados voltados para a saúde masculina em todas as fases.",
  },
];

const stats = [
  { icon: Users, value: "3.000+", label: "Pacientes" },
  { icon: Clock, value: "10+", label: "Anos de Experiência" },
  { icon: Award, value: "100%", label: "Dedicação" },
];

const testimonials = [
  {
    name: "Lucas M.",
    text: "O Dr. Yan me atendeu com muito cuidado e atenção. Explicou tudo com clareza e me deixou muito tranquilo.",
    rating: 5,
  },
  {
    name: "Fernanda T.",
    text: "Profissional incrível! Pontual, atencioso e muito competente. Não troco por nada.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    text: "Finalmente encontrei um médico que escuta de verdade. Diagnóstico preciso e tratamento eficaz.",
    rating: 5,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[480px] h-[480px] bg-primary/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <Award className="w-4 h-4" />
              CRM/SP 000000 · Medicina Interna
            </motion.span>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.08] mb-6">
              Saúde com<br />
              <span className="text-primary">cuidado</span>{" "}
              e precisão
            </h1>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Dr. Yan oferece atendimento médico humanizado e tecnologia moderna
              para cuidar da sua saúde com excelência e dedicação.
            </p>

            <div className="flex flex-wrap gap-4">
              <BookingButton size="lg" className="h-13 px-8 text-base" />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 px-8 text-base font-body border-primary/20 text-primary hover:bg-primary/5 gap-2"
              >
                <Link to="/sobre">
                  Conheça o Dr. Yan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-border/50">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-heading text-3xl text-primary">{s.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={DOCTOR_IMG}
                alt="Dr. Yan"
                className="relative w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="O que oferecemos"
            title="Especialidades"
            subtitle="Atendimento especializado para cuidar da sua saúde com excelência em cada área."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-border/60 bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <Link
                  to="/especialidades"
                  className="font-body text-sm text-primary hover:text-primary/80 flex items-center gap-1 font-medium transition-colors"
                >
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Button asChild variant="outline" className="font-body border-primary/20 text-primary hover:bg-primary/5 gap-2">
              <Link to="/especialidades">
                Ver todas as especialidades
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <img
              src={DOCTOR_IMG}
              alt="Dr. Yan"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp}>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Sobre o médico
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Medicina com<br />propósito e humanidade
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Dr. Yan é formado pela Faculdade de Medicina da USP, com especialização
              em Medicina Interna e Cardiologia. Sua missão é oferecer atendimento
              de alta qualidade, respeitando a individualidade de cada paciente.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Com mais de 10 anos de experiência, combina tecnologia moderna com
              escuta ativa para resultados que transformam vidas.
            </p>
            <Button asChild variant="outline" className="font-body border-primary/20 text-primary hover:bg-primary/5 gap-2">
              <Link to="/sobre">
                Saiba mais sobre mim
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que dizem os pacientes"
            subtitle="Histórias reais de pessoas cujas vidas foram transformadas."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/40 border border-border/40"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-foreground leading-relaxed mb-5 text-sm">
                  "{t.text}"
                </p>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">Paciente verificado</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-primary">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto px-5 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-5">
            Cuide da sua saúde hoje
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Agende uma consulta e dê o primeiro passo para uma vida mais saudável.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-body text-base px-10 h-14 gap-2"
          >
            <Link to="/contato">
              <Calendar className="w-5 h-5" />
              Agendar Consulta
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}

// fix missing import
function Calendar(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>;
}