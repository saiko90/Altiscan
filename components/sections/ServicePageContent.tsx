"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Camera, Play } from "lucide-react";
import type { ServiceDetail, ServiceSpec, ServiceDeliverable } from "@/lib/services-data";
import FadeIn from "@/components/animations/FadeIn";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function ServicePageContent({ service }: { service: ServiceDetail }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[78vh] flex flex-col justify-end pb-20 overflow-hidden"
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            animation: "gridScroll 18s linear infinite",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${service.glow} 0%, transparent 70%)`,
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-0 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Parallax content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >
          {/* Back button */}
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm transition-colors duration-200 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              Retour aux services
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              borderColor: `${service.color}35`,
              backgroundColor: `${service.color}08`,
              color: service.color,
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: service.color }}
            />
            {service.tagline}
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.75, ease: EASE }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              {service.title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] last:mr-0">
                  {i === 0 ? (
                    <span
                      style={{
                        background: service.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {service.heroDescription}
          </motion.p>
        </motion.div>
      </section>

      {/* ── SPECS ──────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <FadeIn direction="up" className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-px"
              style={{ background: service.gradient }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: service.color }}
            >
              Données techniques
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Spécifications
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {service.specs.map((spec, i) => (
            <SpecCard key={spec.label} spec={spec} color={service.color} glow={service.glow} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ── TECH DETAILS ───────────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <FadeIn direction="right">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{
                background: service.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {service.techTitle}
            </h2>
            {service.techParagraphs.map((p, i) => (
              <p key={i} className="text-slate-400 leading-relaxed mb-4 text-[15px]">
                {p}
              </p>
            ))}

            <ul className="mt-8 space-y-3">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-slate-300">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: service.color }}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — visual placeholder */}
          <FadeIn direction="left" delay={0.1}>
            <div
              className="relative rounded-2xl border border-slate-800 overflow-hidden aspect-[4/3] flex items-center justify-center group"
              style={{ background: `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)` }}
            >
              {/* Scan lines */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)",
                }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, ${service.color}30 1px, transparent 1px),
                    linear-gradient(to bottom, ${service.color}30 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 gap-2 border-b border-slate-700/50 bg-slate-900/50">
                <div className="flex gap-1.5">
                  {[service.color, "#64748b", "#334155"].map((c, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs text-slate-600 ml-2 font-mono">
                  ALTISCAN_SCAN_PREVIEW.3D
                </span>
              </div>

              {/* Center icon */}
              <div className="flex flex-col items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <Camera size={40} style={{ color: service.color }} strokeWidth={1} />
                <span className="text-xs font-mono tracking-widest" style={{ color: service.color }}>
                  MEDIA — BIENTÔT DISPONIBLE
                </span>
              </div>

              {/* Corner decorations */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                (pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} w-4 h-4 border-2 m-3`}
                    style={{
                      borderColor: service.color,
                      borderRadius: "2px",
                      opacity: 0.4,
                      clipPath:
                        i === 0
                          ? "polygon(0 0, 100% 0, 0 100%)"
                          : i === 1
                          ? "polygon(100% 0, 100% 100%, 0 0)"
                          : i === 2
                          ? "polygon(0 0, 0 100%, 100% 100%)"
                          : "polygon(100% 0, 0 100%, 100% 100%)",
                    }}
                  />
                )
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DELIVERABLES ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900/20 border-y border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: service.gradient }} />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: service.color }}
              >
                Formats de livraison
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Livrables</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {service.deliverables.map((item, i) => (
              <DeliverableItem key={item.format} item={item} color={service.color} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA PLACEHOLDERS ─────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <FadeIn direction="up" className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ background: service.gradient }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: service.color }}
            >
              Galerie & Médias
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Réalisations</h2>
        </FadeIn>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {["Vue aérienne", "Modèle 3D", "Rendu final"].map((label, i) => (
            <FadeIn key={label} delay={i * 0.1} direction="up">
              <GalleryPlaceholder label={label} color={service.color} />
            </FadeIn>
          ))}
        </div>

        {/* Video placeholder */}
        <FadeIn direction="up" delay={0.3}>
          <div
            className="relative rounded-2xl border border-slate-800 overflow-hidden aspect-video flex items-center justify-center group cursor-pointer"
            style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${service.glow} 0%, transparent 70%)`,
              }}
            />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center border"
                style={{ borderColor: `${service.color}50`, background: `${service.color}12` }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Play size={22} style={{ color: service.color }} className="ml-1" />
              </motion.div>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: `${service.color}80` }}
              >
                Vidéo de présentation — Bientôt disponible
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-slate-800/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: service.color }}
            >
              Passez à l&apos;action
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4 leading-tight">
              Votre projet mérite
              <br />
              <span
                style={{
                  background: service.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                une précision absolue.
              </span>
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Discutons de vos besoins. Notre équipe vous répond sous 24h pour
              chiffrer votre projet et définir le protocole adapté.
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-white"
              style={{ background: service.gradient }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Demander un devis gratuit
              <span>→</span>
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function SpecCard({
  spec,
  color,
  glow,
  delay,
}: {
  spec: ServiceSpec;
  color: string;
  glow: string;
  delay: number;
}) {
  const Icon = spec.icon;
  return (
    <FadeIn delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group relative p-5 rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${glow} 0%, transparent 70%)`,
          }}
        />
        <Icon
          size={18}
          style={{ color }}
          strokeWidth={1.5}
          className="mb-3 relative z-10"
        />
        <p className="text-xl font-bold text-slate-50 leading-none mb-1 relative z-10">
          {spec.value}
        </p>
        <p className="text-xs text-slate-500 relative z-10">{spec.label}</p>
      </motion.div>
    </FadeIn>
  );
}

function DeliverableItem({
  item,
  color,
  delay,
}: {
  item: ServiceDeliverable;
  color: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800/60 bg-slate-900/20 hover:border-slate-700 transition-colors duration-200">
        <span
          className="text-xs font-bold font-mono tracking-wide px-2.5 py-1.5 rounded-md flex-shrink-0 mt-0.5"
          style={{
            background: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {item.format}
        </span>
        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
      </div>
    </FadeIn>
  );
}

function GalleryPlaceholder({ label, color }: { label: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative aspect-[4/3] rounded-xl border border-slate-800 overflow-hidden group cursor-pointer"
      style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}20 0%, transparent 70%)`,
        }}
      />
      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)",
        }}
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
        <Camera size={24} style={{ color }} strokeWidth={1} />
        <span className="text-xs font-mono tracking-wider" style={{ color }}>
          {label.toUpperCase()}
        </span>
      </div>
      {/* Label badge */}
      <div
        className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 rounded"
        style={{ background: `${color}20`, color: `${color}cc` }}
      >
        {label}
      </div>
    </motion.div>
  );
}
