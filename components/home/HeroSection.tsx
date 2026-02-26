"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TunnelAnimation from "./TunnelAnimation";
import StatsTicker from "./StatsTicker";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fff0f0 0%, #ffc8c8 25%, #ffe0e0 55%, #fff8f8 100%)",
      }}
    >
      {/* Tunnel animation — WebGL, fades toward text on left */}
      <TunnelAnimation />

      {/* Radial warm glow behind focal point */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 90% 8%, rgba(255, 100, 80, 0.12) 0%, transparent 65%)",
        }}
      />

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,245,245,0.6))",
        }}
      />

      {/* Hero content — bottom left */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-14 lg:px-20 pb-40 md:pb-44 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl"
        >
          {/* Label */}
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-7">
            Identity · Spirit · Expression
          </p>

          {/* Headline */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#111] leading-[0.96] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Identity Is<br />
            the Leverage.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-zinc-600 max-w-sm leading-relaxed mb-10">
            Behavior follows from who you believe you are. When the anchor shifts, everything else reorganizes — effort, money, decisions, ease.
          </p>

          {/* CTA Button — Spark-style outlined card */}
          <CTACard href="/writing" label="Explore the Thinking" />
        </motion.div>
      </div>

      {/* Stats ticker — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <StatsTicker />
      </motion.div>
    </section>
  );
}

function CTACard({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <div
        className="relative w-48 h-[72px] border border-[#111]/30 rounded-sm group cursor-pointer hover:border-[#111] transition-all duration-300"
        style={{ borderRadius: "4px" }}
      >
        <span className="absolute top-3 left-3.5 text-sm text-[#111] group-hover:text-[#ff4d8d] transition-colors">
          ↗
        </span>
        <span className="absolute bottom-3 left-3.5 text-xs font-medium text-[#111] tracking-wide group-hover:text-[#ff4d8d] transition-colors">
          {label}
        </span>
        {/* Hover fill effect */}
        <motion.div
          className="absolute inset-0 bg-[#111] origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 0 }}
          style={{ borderRadius: "3px" }}
        />
      </div>
    </Link>
  );
}
