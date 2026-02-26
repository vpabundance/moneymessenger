"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(255,77,141,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 mb-16"
        >
          The invitation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-[108px] font-semibold text-white leading-[0.94] tracking-tight mb-4"
        >
          Stop Improving.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-8xl lg:text-[108px] font-semibold leading-[0.94] tracking-tight mb-16 gradient-text"
        >
          Start Expressing.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-zinc-500 max-w-md mx-auto mb-12 leading-relaxed"
        >
          The community is open. The essays are free. The shift is available — whenever you&apos;re ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          {/* Primary CTA — Spark-style card button */}
          <Link href="/community">
            <div className="relative w-52 h-[76px] border border-zinc-600 rounded-sm group cursor-pointer hover:border-white transition-all duration-300">
              <span className="absolute top-3 left-3.5 text-sm text-zinc-400 group-hover:text-[#ff4d8d] transition-colors">
                ↗
              </span>
              <span className="absolute bottom-3 left-3.5 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">
                Join the Community
              </span>
            </div>
          </Link>

          <Link href="/writing">
            <div className="relative w-52 h-[76px] rounded-sm group cursor-pointer">
              <span className="absolute top-3 left-3.5 text-sm text-zinc-700 group-hover:text-zinc-400 transition-colors">
                ↗
              </span>
              <span className="absolute bottom-3 left-3.5 text-xs font-medium text-zinc-600 group-hover:text-zinc-300 transition-colors tracking-wide">
                Read the Essays
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Animated subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}
