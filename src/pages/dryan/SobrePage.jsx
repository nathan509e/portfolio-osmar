import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Stethoscope, Brain } from "lucide-react";
import { WA_LINK } from "../DrYan";

const values = [
{ icon: Heart, title: "Cuidado Humanizado", desc: "Cada paciente é único. Ofereço atendimento acolhedor que vai além do diagnóstico." },
{ icon: Shield, title: "Medicina Baseada em Evidências", desc: "Formação sólida e atualização constante com as melhores práticas científicas." },
{ icon: Stethoscope, title: "Diagnóstico Integral", desc: "Abordagem clínica rigorosa considerando o contexto de vida de cada paciente." },
{ icon: Brain, title: "Visão Holística", desc: "Tratamento que considera o paciente como um todo — corpo, mente e qualidade de vida." }];


export default function SobrePage({ aboutImg }) {
  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-[hsl(215,55%,22%)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-white/60 uppercase mb-3">CONHEÇA O MÉDICO</p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-white">Sobre Mim</h1>
        </div>
      </div>

      {/* Bio split */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[80vh]">
          <div className="relative flex items-end justify-center min-h-[50vh] lg:min-h-full bg-[hsl(210,25%,93%)] overflow-hidden">
            <img src="https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/80383f84c_dd39ff375_fotodudu2-Photoroom__1_.png"

            alt="Dr. Luis Eduardo Younis" className="w-auto object-contain object-bottom"

            style={{ height: "90%", minHeight: "420px", maxHeight: "640px", filter: "drop-shadow(0 10px 40px rgba(30,50,100,0.18))" }} />
            
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-10 lg:px-16 py-20 bg-[hsl(210,28%,93%)]">
            
            <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-4">SOBRE MIM</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              Quem sou e como<br />cheguei até aqui
            </h2>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
              Olá! Sou o Dr. Luis Eduardo Younis, médico com pós-graduação em Medicina da Família e Comunidade. Meu interesse pela medicina começou cedo, motivado pela vontade de cuidar das pessoas de forma integral, considerando não apenas a doença, mas o contexto de vida de cada paciente.
            </p>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
              Com formação sólida e comprometimento constante com a atualização científica, ofereço um atendimento humanizado que vai além do diagnóstico — meu objetivo é ser um parceiro de saúde de longo prazo para cada pessoa que me procura.
            </p>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-10">
              Atendo presencialmente e também realizo consultas online. Acredito que cada paciente tem uma história única — será um prazer fazer parte da sua.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex self-start items-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-8 py-4 rounded-full hover:bg-primary/85 transition-colors duration-300">
              AGENDAR CONSULTA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-3">PRINCÍPIOS</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Meus valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 text-center">
              
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-body text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}