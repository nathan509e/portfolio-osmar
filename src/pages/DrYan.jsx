import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X, MessageCircle, Phone, Mail, MapPin, Clock, Plus, Minus } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/573a5bbfa_96691f67c_fotodu3-Photoroom1.png";
const ABOUT_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/dd39ff375_fotodudu2-Photoroom.png";
const WHATSAPP = "5511999990000";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=Olá,%20Dr.%20Luis%20Eduardo!%20Gostaria%20de%20agendar%20uma%20consulta.`;

/* ─── NAV ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "INÍCIO", href: "#inicio" },
    { label: "SOBRE MIM", href: "#sobre" },
    { label: "ESPECIALIDADES", href: "#especialidades" },
    { label: "ATENDIMENTO", href: "#atendimento" },
  ];

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[hsl(38,20%,97%)]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => go("#inicio")} className={`font-heading text-2xl font-light tracking-widest transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
          DR. LUIS EDUARDO
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`font-body text-xs tracking-widest transition-colors duration-300 ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-6 py-3 rounded-full hover:bg-primary/85 transition-colors duration-300"
        >
          AGENDE SUA CONSULTA
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[hsl(38,20%,97%)] border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button key={l.href} onClick={() => go(l.href)} className="font-body text-xs tracking-widest text-foreground/70 text-left">
                  {l.label}
                </button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-6 py-3 rounded-full"
              >
                AGENDE SUA CONSULTA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(215,55%,18%)] via-[hsl(215,50%,24%)] to-[hsl(195,60%,30%)]">

      {/* Doctor PNG — right side, transparent bg */}
      <div className="absolute right-0 bottom-0 h-full flex items-end justify-end pointer-events-none select-none">
        <img
          src={HERO_IMG}
          alt="Dr. Luis Eduardo Younis"
          className="h-full max-h-[95vh] w-auto object-contain object-bottom"
          style={{ filter: "drop-shadow(-20px 0 60px rgba(0,0,0,0.35))" }}
        />
        {/* Bottom fade to hide any hard edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(195,60%,30%)] to-transparent" />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,_hsl(195,70%,45%,0.15)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="font-body text-xs tracking-[0.3em] text-white/60 uppercase mb-4">
            CRM/SP 000000
          </p>
          <h1 className="font-heading text-6xl md:text-8xl font-light text-white leading-none mb-1">
            DR. LUIS
          </h1>
          <h1 className="font-heading text-6xl md:text-8xl font-light text-[hsl(195,70%,70%)] leading-none mb-3">
            EDUARDO
          </h1>
          <p className="font-body text-xs tracking-[0.35em] text-white/70 uppercase mb-8">
            MEDICINA DA FAMÍLIA E COMUNIDADE
          </p>
          <p className="font-heading text-xl md:text-2xl italic font-light text-white/85 leading-relaxed max-w-md mb-10">
            Cuidar da sua saúde com atenção, ciência e humanidade, para que você viva com mais qualidade e equilíbrio.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[hsl(195,70%,45%)] text-white font-body text-xs tracking-widest px-8 py-4 rounded-full hover:bg-[hsl(195,70%,38%)] transition-all duration-300 shadow-lg shadow-cyan-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            AGENDAR CONSULTA
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    text: "O Dr. Yan mudou minha relação com a saúde. Pela primeira vez me senti verdadeiramente ouvido em uma consulta. Diagnóstico preciso, tratamento eficaz e um cuidado que vai além do consultório.",
    author: "M. S.",
  },
  {
    text: "Profissional excepcional. Atencioso, didático e sempre atualizado. Explicou cada detalhe do meu tratamento de forma clara e me deu toda a confiança que eu precisava para seguir em frente.",
    author: "R. F.",
  },
  {
    text: "Fui indicada por uma amiga e não me arrependo. O Dr. Yan é humano, gentil e extremamente competente. Já recomendei para toda minha família. Sem dúvida o melhor médico que já tive.",
    author: "A. C.",
  },
  {
    text: "Finalmente encontrei um médico que me trata como pessoa, não como número. O acompanhamento é impecável, sempre disponível para dúvidas. Minha saúde melhorou muito desde que comecei o tratamento.",
    author: "T. L.",
  },
  {
    text: "A consulta com o Dr. Yan foi uma experiência única. Senti que ele realmente se importa com o bem-estar dos pacientes. Voltei muito mais tranquilo e confiante sobre minha saúde.",
    author: "J. P.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  // Auto advance
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
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-primary/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── SOBRE ─── */
function Sobre() {
  return (
    <section id="sobre" className="bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[80vh]">
        {/* Photo with transparent bg */}
        <div className="relative flex items-end justify-center min-h-[50vh] lg:min-h-full bg-[hsl(210,25%,93%)] overflow-hidden">
          <img
            src={ABOUT_IMG}
            alt="Dr. Luis Eduardo Younis"
            className="w-auto object-contain object-bottom"
            style={{
              height: "90%",
              minHeight: "420px",
              maxHeight: "640px",
              filter: "drop-shadow(0 10px 40px rgba(30,50,100,0.18))"
            }}
          />
        </div>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-10 lg:px-16 py-20 bg-[hsl(210,28%,93%)]"
        >
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
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start items-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-8 py-4 rounded-full hover:bg-primary/85 transition-colors duration-300"
          >
            AGENDAR CONSULTA
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── ESPECIALIDADES ─── */
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
      { q: "Quais sintomas indicar buscar ajuda?", a: "Cansaço excessivo, queda de libido, dificuldade de concentração, alterações no sono ou de peso podem indicar questões hormonais tratáveis." },
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
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left group"
      >
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

function Especialidades() {
  return (
    <section id="especialidades" className="bg-background">
      {/* Header */}
      <div className="bg-[hsl(215,55%,22%)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-white/70 uppercase mb-3">ÁREAS DE ATUAÇÃO</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-white">Especialidades</h2>
        </div>
      </div>

      {/* Cards */}
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
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-primary/85 transition-colors mb-8"
              >
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
  );
}

/* ─── ATENDIMENTO / CONTATO ─── */
function Atendimento() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); e.target.reset(); }, 1400);
  };

  return (
    <section id="atendimento" className="bg-[hsl(210,30%,94%)] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] text-primary uppercase mb-3">CONTATO</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="font-body text-sm text-foreground/60 max-w-xl mx-auto">
            Agende sua consulta hoje mesmo e dê o primeiro passo em direção a uma vida mais saudável.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-body text-sm tracking-widest px-10 py-5 rounded-full hover:bg-[#1ebe5d] transition-colors shadow-lg shadow-green-200"
          >
            <MessageCircle className="w-5 h-5" />
            AGENDAR PELO WHATSAPP
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Endereço", lines: ["Av. Paulista, 1000 — Sala 802", "Bela Vista, São Paulo — SP"] },
              { icon: Clock, title: "Horários", lines: ["Segunda a Sexta: 8h às 19h", "Sábado: 8h às 13h"] },
              { icon: Phone, title: "Telefone", lines: ["(11) 99999-0000"] },
              { icon: Mail, title: "E-mail", lines: ["contato@dryan.com.br"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest text-primary uppercase mb-0.5">{item.title}</p>
                  {item.lines.map((l) => <p key={l} className="font-body text-sm text-foreground/70">{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {sent ? (
              <div className="p-8 rounded-lg bg-primary/10 text-center">
                <p className="font-heading text-2xl text-primary mb-2">Mensagem enviada!</p>
                <p className="font-body text-sm text-foreground/60">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <>
                {[
                  { label: "Nome completo", type: "text", placeholder: "Seu nome" },
                  { label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
                  { label: "E-mail", type: "email", placeholder: "seu@email.com" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="font-body text-xs tracking-wider text-foreground/60 uppercase block mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-white border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-body text-xs tracking-wider text-foreground/60 uppercase block mb-1.5">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva o motivo do contato..."
                    className="w-full bg-white border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-white font-body text-xs tracking-widest py-4 rounded-full hover:bg-primary/85 transition-colors disabled:opacity-60"
                >
                  {sending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[hsl(215,55%,18%)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-2xl font-light tracking-widest text-white">DR. LUIS EDUARDO</p>
        <p className="font-body text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} Dr. Luis Eduardo Younis — CRM/SP 000000. Todos os direitos reservados.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-widest text-white/60 hover:text-white transition-colors"
        >
          AGENDAR CONSULTA
        </a>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FLOATING ─── */
function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-300/50 hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}

/* ─── PAGE ─── */
export default function DrYan() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Testimonials />
      <Sobre />
      <Especialidades />
      <Atendimento />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}