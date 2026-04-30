"use client"

import { MorphingCardStack } from "@/components/ui/morphing-card-stack"
import { Users, Zap, CalendarDays, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    id: "1",
    title: "Quiénes somos",
    description: "Somos DSN — Del Sur al Norte, una comunidad de corredores unidos por la pasión de correr. No importa tu nivel, tu ritmo o tu distancia — lo que importa es que estés aquí.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Nuestra misión",
    description: "Nacimos para crear un espacio donde correr sea más que ejercicio: sea conexión, motivación y amistad. Cada kilómetro que recorremos juntos nos hace más fuertes.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "3 días por semana",
    description: "Corremos domingos (carrera larga), martes (entrenamiento: intervalos, tempo o fartlek) y jueves (carrera social a ritmo cómodo). El plan exacto se publica en WhatsApp.",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "∞ kilómetros",
    description: "Una sola comunidad, kilómetros infinitos por recorrer. Del 5K al maratón, siempre hay un reto nuevo esperándote junto al grupo.",
    icon: <Trophy className="h-5 w-5" />,
  },
]

const reveal = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export function CommunitySection() {
  return (
    <section id="nosotros" className="py-24 bg-black">
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
          ¿Qué es DSN?
        </motion.h2>

        <motion.p
          className="text-center mb-12"
          style={{ color: "var(--grey-400)" }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Todo lo que necesitas saber sobre nuestra comunidad
        </motion.p>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MorphingCardStack cards={cards} defaultLayout="stack" />
        </motion.div>
      </div>
    </section>
  )
}
