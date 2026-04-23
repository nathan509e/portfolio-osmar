import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Stethoscope, Brain } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    desc: "Cada paciente é único. Ofereço um atendimento acolhedor que vai além do diagnóstico.",
  },
  {
    icon: Shield,
    title: "Excelência Técnica",
    desc: "Formação nas melhores instituições e atualização constante com a medicina baseada em evidências.",
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico Preciso",
    desc: "Utilizo tecnologia de ponta e uma abordagem clínica rigorosa para resultados confiáveis.",
  },
  {
    icon: Brain,
    title: "Visão Integrada",
    desc: "Tratamento que considera o paciente como um todo — corpo, mente e qualidade de vida.",
  },
];

export default function AboutSection({ clinicImage }) {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-2xl blur-xl" />
              <img
                src={clinicImage}
                alt="Consultório médico moderno"
                className="relative w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-lg border border-border/50">
                <p className="font-heading text-3xl font-bold text-primary">18+</p>
                <p className="font-body text-sm text-muted-foreground">Anos de<br />experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-widest">
              Sobre Mim
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Dedicação à saúde
              <span className="text-primary"> do coração</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Sou cardiologista formado pela Universidade de São Paulo (USP), com
              especialização em cardiologia intervencionista pela InCor. Ao longo
              de mais de 18 anos de carreira, realizei milhares de procedimentos e
              dedico minha prática a oferecer o melhor cuidado possível, combinando
              tecnologia avançada com um atendimento verdadeiramente humano.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}