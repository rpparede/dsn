"use client";

import { motion } from "framer-motion";

const days = [
  { abbr: "DOM", name: "Domingo", type: "Carrera larga", detail: "Distancia y ruta varían cada semana" },
  { abbr: "MAR", name: "Martes", type: "Entrenamiento", detail: "Intervalos, tempo o fartlek" },
  { abbr: "JUE", name: "Jueves", type: "Carrera social", detail: "Ritmo cómodo, todos los niveles" },
];

const reveal = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export function ScheduleSection() {
  return (
    <section id="calendario" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-display text-center mb-2"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          Calendario
        </motion.h2>
        <motion.p
          className="text-center mb-10"
          style={{ color: "var(--grey-400)" }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Los planes varían, pero estos son nuestros días habituales
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {days.map((d, i) => (
            <motion.div
              key={d.abbr}
              className="relative overflow-hidden rounded-2xl border border-[var(--grey-700)] text-center p-10
                hover:-translate-y-2 hover:border-[var(--orange)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, var(--grey-900), var(--grey-800))" }}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="font-display text-[3.5rem] leading-none mb-3" style={{ color: "var(--orange)" }}>
                {d.abbr}
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2">{d.name}</h3>
              <p className="text-[var(--grey-200)] mb-2">{d.type}</p>
              <span className="text-sm" style={{ color: "var(--grey-400)" }}>{d.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
