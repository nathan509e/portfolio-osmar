import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    text: "O Dr. Ricardo salvou minha vida. Após um diagnóstico complicado, ele me explicou tudo com paciência e cuidado. O procedimento foi um sucesso e hoje vivo com muito mais qualidade.",
    rating: 5,
    date: "Março 2024",
  },
  {
    name: "Carlos Alberto M.",
    text: "Profissional excepcional. Fiz meu check-up cardiológico e ele identificou um problema que outros médicos não tinham detectado. Atendimento impecável e muito humano.",
    rating: 5,
    date: "Janeiro 2024",
  },
  {
    name: "Ana Paula R.",
    text: "Minha mãe fez uma angioplastia com o Dr. Ricardo e o resultado foi incrível. Ele nos acompanhou em cada etapa, sempre disponível e atencioso. Recomendo de olhos fechados.",
    rating: 5,
    date: "Novembro 2023",
  },
  {
    name: "Roberto F.",
    text: "Depois de anos com arritmia, finalmente encontrei um especialista que realmente entende o que faz. Tratamento personalizado e resultado excelente. Médico de primeira.",
    rating: 5,
    date: "Outubro 2023",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-5">
            O que dizem<span className="text-primary"> meus pacientes</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-10 md:p-14 shadow-lg border border-border/50 relative"
              >
                <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonials[current].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-border/50 h-12 w-12">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-border/50 h-12 w-12">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}