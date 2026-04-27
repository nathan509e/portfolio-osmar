import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { WA_LINK } from "../DrYan";

const especialidades = [
  {
    title: "Clínica Médica",
    desc: "Atendimento clínico completo para diagnóstico, tratamento e acompanhamento de doenças agudas e crônicas. Ofereço uma abordagem integral, considerando não apenas os sintomas, mas o contexto de vida de cada paciente.",
    faq: [
      { q: "O que é tratado na clínica médica?", a: "Doenças respiratórias, digestivas, infecciosas, metabólicas, cardiovasculares e muito mais. A clínica médica é a porta de entrada para o cuidado integral à saúde." },
      { q: "Quando devo procurar um clínico geral?", a: "Para qualquer sintoma que te preocupe, check-ups anuais, renovação de receitas ou como ponto de partida para investigações mais específicas." },
    ],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
  {
    title: "Medicina Preventiva",
    desc: "Check-up completo para identificar fatores de risco antes que se tornem problemas. Através de exames personalizados e orientações de estilo de vida, ajudo você a ter mais saúde por mais tempo.",
    faq: [
      { q: "Com que frequência devo fazer check-up?", a: "Recomenda-se ao menos uma vez ao ano para adultos saudáveis. Pessoas com fatores de risco podem precisar de avaliações mais frequentes." },
      { q: "O que inclui o check-up preventivo?", a: "Avaliação clínica completa, exames laboratoriais, avaliação de risco cardiovascular, orientações nutricionais e de estilo de vida personalizadas." },
    ],
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80",
  },
  {
    title: "Saúde do Homem",
    desc: "Cuidado integral voltado às necessidades específicas dos homens em todas as fases da vida. Avaliação hormonal, saúde sexual, rastreamento de câncer de próstata e promoção de bem-estar masculino.",
    faq: [
      { q: "A partir de que idade fazer avaliação da próstata?", a: "Recomenda-se a partir dos 50 anos para a população geral, ou 45 anos para homens com fatores de risco como histórico familiar." },
      { q: "Quais sintomas indicam buscar ajuda?", a: "Cansaço excessivo, queda de libido, dificuldade de concentração, alterações no sono ou de peso podem indicar questões hormonais tratáveis." },
    ],
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700&q=80",
  },
  {
    title: "Telemedicina",
    desc: "Consulta médica online com a mesma qualidade do atendimento presencial. Praticidade para seguimento de casos, renovação de receitas e orientações médicas, de onde você estiver.",
    faq: [
      { q: "Como funciona a consulta online?", a: "Você agenda pelo WhatsApp, recebe um link de videoconferência seguro e a consulta acontece normalmente com prescrição digital e pedidos de exame." },
      { q: "Todo tipo de consulta pode ser online?", a: "A maioria dos atendimentos de seguimento, dúvidas, renovação de receitas e avaliação de exames podem ser feitos online. Casos que exigem exame físico são presenciais." },
    ],
    img: "https://images.unsplash.com/photo-1609904603800-1f9a13e2f73f?w=700&q=80",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-foreground/20 py-4">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-left group">
        <span className="font-body text-sm text-foreground/80 pr-4 group-hover:text-primary transition-colors">{q}</span>
        {open ? <Minus className="w-4 h-4 text-primary flex-shrink-0" /> : <Plus className="w-4 h-4 text-primary flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-body text-sm text-foreground/60 leading-relaxed mt-3 overflow-hidden"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EspecialidadesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[hsl(215,55%,22%)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-white/70 uppercase mb-3">ÁREAS DE ATUAÇÃO</p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-white">Especialidades</h1>
        </div>
      </div>

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          {especialidades.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-start py-16 ${i < especialidades.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="font-heading text-4xl font-light text-primary mb-5">{e.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed mb-8">{e.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-primary/85 transition-colors mb-8">
                  AGENDAR CONSULTA
                </a>
                <div>
                  <p className="font-body text-xs tracking-widest text-foreground/50 uppercase mb-2">Perguntas Frequentes</p>
                  {e.faq.map((f) => <FaqItem key={f.q} {...f} />)}
                </div>
              </div>
              <div className={`rounded-lg overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <img src={e.img} alt={e.title} className="w-full h-72 lg:h-96 object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}