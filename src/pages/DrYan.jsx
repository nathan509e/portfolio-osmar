import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

import HeroPage from "./dryan/HeroPage";
import SobrePage from "./dryan/SobrePage";
import EspecialidadesPage from "./dryan/EspecialidadesPage";
import AtendimentoPage from "./dryan/AtendimentoPage";
import LocalizacaoPage from "./dryan/LocalizacaoPage";

const HERO_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/573a5bbfa_96691f67c_fotodu3-Photoroom1.png";
const ABOUT_IMG = "https://media.base44.com/images/public/69e9655d2e648f5936dc0caa/dd39ff375_fotodudu2-Photoroom.png";
export const WHATSAPP = "5511999990000";
export const WA_LINK = `https://wa.me/${WHATSAPP}?text=Olá,%20Dr.%20Luis%20Eduardo!%20Gostaria%20de%20agendar%20uma%20consulta.`;
export { HERO_IMG, ABOUT_IMG };

const tabs = [
  { id: "inicio",        label: "INÍCIO" },
  { id: "sobre",         label: "SOBRE MIM" },
  { id: "especialidades",label: "ESPECIALIDADES" },
  { id: "atendimento",   label: "ATENDIMENTO" },
  { id: "localizacao",   label: "LOCALIZAÇÃO" },
];

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { setOpen(false); setActive(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const isHero = active === "inicio";
  const transparent = isHero && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      transparent ? "bg-transparent" : "bg-[hsl(38,20%,97%)]/95 backdrop-blur-md shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button
          onClick={() => go("inicio")}
          className={`font-heading text-2xl font-light tracking-widest transition-colors duration-300 ${transparent ? "text-white" : "text-primary"}`}
        >
          DR. LUIS EDUARDO
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className={`font-body text-xs tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
                active === t.id
                  ? transparent ? "text-white border-white" : "text-primary border-primary"
                  : transparent ? "text-white/70 border-transparent hover:text-white" : "text-foreground/60 border-transparent hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 font-body text-xs tracking-widest px-6 py-3 rounded-full transition-colors duration-300 ${
            transparent
              ? "bg-white/20 text-white border border-white/40 hover:bg-white/30"
              : "bg-primary text-white hover:bg-primary/85"
          }`}
        >
          AGENDE SUA CONSULTA
        </a>

        <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[hsl(38,20%,97%)] border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => go(t.id)}
                  className={`font-body text-xs tracking-widest text-left ${active === t.id ? "text-primary" : "text-foreground/60"}`}>
                  {t.label}
                </button>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-xs tracking-widest px-6 py-3 rounded-full">
                AGENDE SUA CONSULTA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-300/50 hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}

function Footer({ setActive }) {
  const go = (id) => { setActive(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer className="bg-[hsl(215,55%,18%)] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <p className="font-heading text-2xl font-light tracking-widest text-white">DR. LUIS EDUARDO</p>
          <nav className="flex flex-wrap justify-center gap-6">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => go(t.id)}
                className="font-body text-xs tracking-widest text-white/50 hover:text-white transition-colors">
                {t.label}
              </button>
            ))}
          </nav>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="font-body text-xs tracking-widest text-white/60 hover:text-white transition-colors">
            AGENDAR CONSULTA
          </a>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} Dr. Luis Eduardo Younis — CRM/SP 000000. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

export default function DrYan() {
  const [active, setActive] = useState("inicio");

  const renderPage = () => {
    switch (active) {
      case "inicio":         return <HeroPage setActive={setActive} heroImg={HERO_IMG} />;
      case "sobre":          return <SobrePage aboutImg={ABOUT_IMG} />;
      case "especialidades": return <EspecialidadesPage />;
      case "atendimento":    return <AtendimentoPage />;
      case "localizacao":    return <LocalizacaoPage />;
      default:               return null;
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar active={active} setActive={setActive} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={active} variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActive={setActive} />
      <WhatsAppFloat />
    </div>
  );
}