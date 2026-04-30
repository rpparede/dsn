"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || isNaN(target)) return;
    let current = 0;
    const increment = target / (1500 / 16);
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);
    return () => clearInterval(id);
  }, [active, target]);
  return count;
}

function StatCard({ number, label, dataTarget }: { number?: string; label: string; dataTarget?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCounter(dataTarget ?? 0, inView && dataTarget !== undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-8 rounded-xl border border-[var(--orange)]/15 hover:border-[var(--orange)] hover:-translate-y-1 transition-all"
      style={{ background: "linear-gradient(135deg, var(--grey-800), var(--grey-700))" }}
    >
      <span className="font-display text-5xl block leading-none mb-2" style={{ color: "var(--orange)" }}>
        {number ?? count}
      </span>
      <span className="text-sm uppercase tracking-widest" style={{ color: "var(--grey-400)" }}>
        {label}
      </span>
    </div>
  );
}

const reveal = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export function AboutSection() {
  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: "var(--grey-900)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-display text-center mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--grey-200)] text-lg leading-relaxed mb-5">
              Somos <strong className="text-[var(--orange)]">DSN — Del Sur al Norte</strong>, una comunidad de corredores
              unidos por la pasión de correr. No importa tu nivel, tu ritmo o tu distancia — lo que importa es que estés aquí.
            </p>
            <p className="text-[var(--grey-200)] text-lg leading-relaxed">
              Nacimos con la idea de crear un espacio donde correr sea más que ejercicio: sea conexión, motivación y amistad.
              Cada kilómetro que recorremos juntos nos hace más fuertes.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <StatCard dataTarget={3} label="Días por semana" />
            <StatCard dataTarget={1} label="Comunidad" />
            <StatCard number="∞" label="Kilómetros por recorrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
