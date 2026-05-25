"use client";

import { motion } from "framer-motion";
import { Layers, Eye, Film } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

interface Service {
  icon: LucideIcon;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  glow: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: Layers,
    slug: "photogrammetrie",
    title: "Photogrammétrie 3D",
    tagline: "Modélisation haute précision",
    description:
      "Reconstituez vos terrains et infrastructures en modèles 3D d'une précision centimétrique pour vos analyses, livrables et décisions terrain.",
    features: ["Modélisation topographique", "Calcul de cubature", "Jumeaux numériques"],
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.18)",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  },
  {
    icon: Eye,
    slug: "inspection",
    title: "Inspection Visuelle",
    tagline: "Accès difficiles & diagnostic",
    description:
      "Inspectez les zones inaccessibles en toute sécurité grâce à des capteurs haute résolution et une analyse précise des anomalies structurelles.",
    features: ["Recherche de défauts", "Accès difficiles", "Thermographie"],
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.18)",
    gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  },
  {
    icon: Film,
    slug: "video",
    title: "Vidéo & Motion Design",
    tagline: "Imagerie aérienne premium",
    description:
      "Des prises de vue cinématographiques aériennes combinées à un motion design soigné pour mettre en valeur vos projets avec un impact fort.",
    features: ["Mise en valeur immobilière", "Suivis de chantier", "Animations dynamiques"],
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.18)",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Subtle radial background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(6, 182, 212, 0.04) 0%, transparent 100%)",
        }}
      />

      {/* Horizontal separator line glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(6,182,212,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn direction="up" className="text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            Ce que nous faisons
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-50 mb-5">
            NOS{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              EXPERTISES
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Trois pôles de compétences au service de la précision, de la
            sécurité et de l&apos;image.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={0.1 + index * 0.13}
              direction="up"
              className="h-full"
            >
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: `0 28px 64px ${service.glow}, 0 0 0 1px ${service.color}25`,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-7 overflow-hidden"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: service.gradient }}
      />

      {/* Inner radial glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 40% 0%, ${service.glow} 0%, transparent 65%)`,
        }}
      />

      {/* Icon container */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{ background: `${service.color}18` }}
      >
        {/* Icon glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110"
          style={{ background: `${service.color}30` }}
        />
        <Icon size={22} style={{ color: service.color }} strokeWidth={1.5} className="relative z-10" />
      </div>

      {/* Tagline */}
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: service.color }}
      >
        {service.tagline}
      </p>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-50 mb-3 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Feature list */}
      <ul className="mt-auto space-y-2.5">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-3 text-sm text-slate-400">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
              style={{ background: `${service.color}90` }}
            />
            {feat}
          </li>
        ))}
      </ul>

      {/* Footer link */}
      <div className="mt-6 pt-5 border-t border-slate-800/60">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 transition-colors duration-200"
          style={{ color: `${service.color}80` }}
          onMouseEnter={(e) => (e.currentTarget.style.color = service.color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${service.color}80`)}
        >
          En savoir plus
          <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200 inline-block">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
