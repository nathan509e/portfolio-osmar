import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { WA_LINK } from "../DrYan";

const testimonials = [
  { text: "O Dr. Luis Eduardo mudou minha relação com a saúde. Pela primeira vez me senti verdadeiramente ouvido em uma consulta. Diagnóstico preciso, tratamento eficaz e um cuidado que vai além do consultório.", author: "M. S." },
  { text: "Profissional excepcional. Atencioso, didático e sempre atualizado. Explicou cada detalhe do meu tratamento de forma clara e me deu toda a confiança que eu precisava.", author: "R. F." },
  { text: "Fui indicada por uma amiga e não me arrependo. O Dr. Luis Eduardo é humano, gentil e extremamente competente. Já recomendei para toda minha família.", author: "A. C." },
  { text: "Finalmente encontrei um médico que me trata como pessoa, não como número. O acompanhamento é impecável. Minha saúde melhorou muito desde que comecei o tratamento.", author: "T. L." },
  { text: "A consulta com o Dr. Luis Eduardo foi uma experiência única. Senti que ele realmente se importa com o bem-estar dos pacientes. Voltei muito mais tranquilo e confiante.", author: "J. P." },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[hsl(210,30%,94%)] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-3">
          O que dizem meus pacientes
        </h2>
        <p className="font-body text-sm text-muted-foreground tracking-wide mb-16">
          A satisfação dos meus pacientes é o maior indicador da qualidade do meu trabalho.
        </p>
        <div className="relative min-h-[220px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full px-4 md:px-16"
            >
              <p className="font-heading text-xl md:text-2xl font-light italic text-foreground leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <p className="font-body text-xs tracking-widest text-primary uppercase">
                {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => go(-1)} className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-primary/30"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HeroPage({ setActive, heroImg }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[hsl(215,55%,18%)] via-[hsl(215,50%,24%)] to-[hsl(195,60%,30%)]">
        {/* Photo — hidden on mobile, visible from lg */}
        <div className="hidden lg:flex absolute right-0 bottom-0 h-full items-end justify-end pointer-events-none select-none">
          <img
            src={heroImg}
            alt="Dr. Luis Eduardo Younis"
            className="h-full max-h-[95vh] w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(-20px 0 60px rgba(0,0,0,0.35))" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(195,60%,30%)] to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,_hsl(195,70%,45%,0.15)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
             <p className="font-body text-xs tracking-[0.3em] text-white/60 uppercase mb-4"></p>
            <h1 className="font-heading text-6xl md:text-8xl font-light text-white leading-none mb-1">DR. LUIS</h1>
            <h1 className="font-heading text-6xl md:text-8xl font-light text-[hsl(195,70%,70%)] leading-none mb-3">EDUARDO</h1>
            <p className="font-body text-xs tracking-[0.35em] text-white/70 uppercase mb-8">MEDICINA DA FAMÍLIA E COMUNIDADE</p>
            <p className="font-heading text-xl md:text-2xl italic font-light text-white/85 leading-relaxed max-w-md mb-10">
              Cuidar da sua saúde com atenção, ciência e humanidade, para que você viva com mais qualidade e equilíbrio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[hsl(195,70%,45%)] text-white font-body text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[hsla(212, 70%, 38%, 1.00)] transition-all duration-300 shadow-lg shadow-cyan-900/40">
                <MessageCircle className="w-4 h-4" />
                AGENDAR CONSULTA
              </a>
              <button onClick={() => setActive("sobre")}
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 font-body text-xs tracking-widest px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
                SAIBA MAIS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="bg-[hsl(215,55%,22%)] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5.000+", label: "Pacientes atendidos" },
            { value: "10+",    label: "Anos de experiência" },
            { value: "4",      label: "Especialidades" },
            { value: "98%",    label: "Satisfação" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl font-light text-[hsl(195,70%,70%)]">{s.value}</p>
              <p className="font-body text-xs tracking-widest text-white/50 uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}