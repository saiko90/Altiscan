"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const titleWords = [
  { text: "LA", gradient: false },
  { text: "PRÉCISION", gradient: true },
  { text: "AU", gradient: false },
  { text: "SOMMET", gradient: false },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const wordVariants = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: 0.4 + i * 0.14,
      duration: 0.75,
      ease: EASE,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          animation: "gridScroll 18s linear infinite",
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 45%, rgba(6, 182, 212, 0.09) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-56 z-0 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
        animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
        animate={{ x: [0, -36, 0], y: [0, 28, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Inspection Drone & Photogrammétrie
          </div>
        </FadeIn>

        {/* Animated title — word by word reveal */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8 select-none">
          {titleWords.map((word, i) => (
            <span
              key={word.text}
              className="inline-block mr-[0.28em] last:mr-0 overflow-hidden align-bottom"
            >
              <motion.span
                className="inline-block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                style={
                  word.gradient
                    ? {
                        background:
                          "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : undefined
                }
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <FadeIn delay={1.0} direction="up">
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Photogrammétrie, inspection technique et imagerie aérienne par drone
            —{" "}
            <span className="text-slate-200">
              des données précises au service de vos projets.
            </span>
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={1.25} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="#services"
              className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-white overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              {/* Hover shine layer */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              {/* Outer glow */}
              <span
                className="absolute inset-0 rounded-full -z-10 scale-110 blur-xl transition-all duration-300 opacity-50 group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                }}
              />
              <span className="relative z-10">Nos Services</span>
              <span className="relative z-10 text-cyan-200">→</span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-sm tracking-wide transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Demander un devis
            </motion.a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.7} direction="up">
          <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest uppercase">
            <span>Défiler</span>
            <motion.div
              className="w-px h-10 origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(6, 182, 212, 0.5), transparent)",
              }}
              animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
