"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo me puedo unir?",
    a: "Tenemos una comunidad de WhatsApp en la cual toda la información está organizada por canales. Únete a través de nuestro enlace en la sección de enlaces y tendrás acceso a horarios, rutas y más.",
  },
  {
    q: "¿Qué días corren?",
    a: "Los planes varían, pero por lo general corremos los domingos, martes y jueves. Consulta el canal de WhatsApp para el plan actualizado de cada semana.",
  },
  {
    q: "¿Necesito experiencia para unirme?",
    a: "¡Para nada! DSN es para todos los niveles. Ya seas principiante o corredor experimentado, aquí hay un lugar para ti. Lo importante es tener ganas de correr y pasarla bien.",
  },
  {
    q: "¿Qué necesito llevar?",
    a: "Solo necesitas tus tenis para correr, ropa cómoda, agua y muchas ganas. Te recomendamos usar ropa visible si corres de noche.",
  },
  {
    q: "¿Tiene algún costo?",
    a: "No, ser parte de DSN es completamente gratis. Somos una comunidad que corre por pasión, no por dinero.",
  },
];

const reveal = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--grey-900)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-display text-center mb-8"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-[var(--grey-700)]"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left font-body font-semibold text-lg
                  text-white hover:text-[var(--orange)] transition-colors"
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className="w-6 h-6 flex-shrink-0 ml-4 text-[var(--orange)] transition-transform duration-300"
                  style={{ transform: active === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 leading-relaxed" style={{ color: "var(--grey-200)" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
