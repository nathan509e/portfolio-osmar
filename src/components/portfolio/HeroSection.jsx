import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ doctorImage }) {
  const scrollToAbout = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Users, value: "5.000+", label: "Pacientes Atendidos" },
    { icon: Award, value: "18", label: "Anos de Experiência" },
    { icon: Clock, value: "98%", label: "Satisfação" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              Cardiologista — CRM/SP 123456
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Dr. Ricardo
              <span className="block text-primary">Mendes</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Especialista em cardiologia intervencionista com mais de 18 anos de
              dedicação à saúde do coração. Atendimento humanizado e
              personalizado para cada paciente.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 font-body text-base px-8 h-14"
              >
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="font-body text-base px-8 h-14 border-primary/20 text-primary hover:bg-primary/5"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-body text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={doctorImage}
                alt="Dr. Ricardo Mendes — Cardiologista"
                className="relative w-full max-w-md mx-auto rounded-3xl object-cover shadow-2xl shadow-primary/10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground/50 hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}