"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Beat 1 — The Pattern: visible 0–0.25
  const beat1Opacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.22, 0.27],
    [0, 1, 1, 0]
  );
  const beat1Y = useTransform(scrollYProgress, [0, 0.06], [28, 0]);

  // Beat 2 — Source symbol: visible 0.25–0.50
  const beat2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.30, 0.47, 0.52],
    [0, 1, 1, 0]
  );
  const symbolScale = useTransform(scrollYProgress, [0.25, 0.47], [0.2, 1]);
  const symbolY = useTransform(scrollYProgress, [0.25, 0.47], [80, 0]);
  const ringScale = useTransform(scrollYProgress, [0.35, 0.47], [0.85, 1]);
  const ringOpacity = useTransform(scrollYProgress, [0.35, 0.47], [0, 1]);

  // Beat 3 — Cards: visible 0.50–0.75
  const beat3Opacity = useTransform(
    scrollYProgress,
    [0.50, 0.55, 0.73, 0.78],
    [0, 1, 1, 0]
  );
  const card1X = useTransform(scrollYProgress, [0.50, 0.65], [-80, 0]);
  const card2Y = useTransform(scrollYProgress, [0.52, 0.67], [60, 0]);
  const card3X = useTransform(scrollYProgress, [0.54, 0.69], [80, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.50, 0.64], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.52, 0.66], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.54, 0.68], [0, 1]);

  // Beat 4 — The Shift: visible 0.75–1.0
  const beat4Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.82, 0.98, 1.0],
    [0, 1, 1, 1]
  );
  const beat4Y = useTransform(scrollYProgress, [0.75, 0.86], [36, 0]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen bg-[#0d0d0d] overflow-hidden flex items-center justify-center">

        {/* ─── Beat 1: The Pattern ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-2xl"
          style={{ opacity: beat1Opacity, y: beat1Y }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-6">
            01 — The Pattern
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.98] tracking-tight mb-6">
            High performance.<br />
            <span className="text-zinc-600">Relentless effort.</span><br />
            Constant optimization.
          </h2>
          <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
            You know this story. You've been living it. And it's exhausting — not because you're weak, but because the frame itself is wrong.
          </p>
        </motion.div>

        {/* ─── Beat 2: Source Symbol ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ opacity: beat2Opacity }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-16">
            02 — The Diagnosis
          </p>
          <motion.div
            style={{ scale: symbolScale, y: symbolY }}
            className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-zinc-700/50"
            />
            {/* Glow */}
            <div
              className="absolute w-52 h-52 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(255,77,141,0.14) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            {/* Core circle */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 4 L36.5 27.5 L60 32 L36.5 36.5 L32 60 L27.5 36.5 L4 32 L27.5 27.5 Z"
                  fill="#ff4d8d"
                />
              </svg>
            </div>
          </motion.div>
          <motion.p
            style={{ opacity: ringOpacity }}
            className="text-zinc-400 text-lg mt-16 tracking-wide"
          >
            It&apos;s not a discipline problem.
          </motion.p>
        </motion.div>

        {/* ─── Beat 3: Three Cards ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6"
          style={{ opacity: beat3Opacity }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-4">
            03 — The Symptoms
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
            {/* Card 1: Fear */}
            <motion.div
              style={{ x: card1X, opacity: card1Opacity }}
              className="flex-1 p-6 rounded-2xl border border-zinc-800 bg-[#0d0d1a]"
            >
              <div className="w-8 h-8 rounded-full bg-[#7c7cdf]/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#7c7cdf]" />
              </div>
              <p className="text-[10px] text-[#7c7cdf] uppercase tracking-[0.25em] mb-2">Fear</p>
              <p className="text-white text-sm leading-relaxed font-medium mb-2">
                Every decision filtered through &quot;Am I enough?&quot;
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                The small self is always measuring, comparing, proving. Survival mode dressed as ambition.
              </p>
            </motion.div>

            {/* Card 2: Force */}
            <motion.div
              style={{ y: card2Y, opacity: card2Opacity }}
              className="flex-1 p-6 rounded-2xl border border-zinc-800 bg-[#1a0d0d]"
            >
              <div className="w-8 h-8 rounded-full bg-[#df7c7c]/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#df7c7c]" />
              </div>
              <p className="text-[10px] text-[#df7c7c] uppercase tracking-[0.25em] mb-2">Force</p>
              <p className="text-white text-sm leading-relaxed font-medium mb-2">
                Pushing constantly because stopping feels dangerous.
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Effort as proof of worth. The grind as identity. Never enough — because enough isn&apos;t the point.
              </p>
            </motion.div>

            {/* Card 3: Separation */}
            <motion.div
              style={{ x: card3X, opacity: card3Opacity }}
              className="flex-1 p-6 rounded-2xl border border-zinc-800 bg-[#0d1a0d]"
            >
              <div className="w-8 h-8 rounded-full bg-[#7cdf7c]/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#7cdf7c]" />
              </div>
              <p className="text-[10px] text-[#7cdf7c] uppercase tracking-[0.25em] mb-2">Separation</p>
              <p className="text-white text-sm leading-relaxed font-medium mb-2">
                Operating as if you&apos;re alone, disconnected from any larger source.
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                The individual self believes it must generate everything from within. That belief is load-bearing.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Beat 4: The Shift ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
          style={{ opacity: beat4Opacity, y: beat4Y }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-8">
            04 — The Shift
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.97] tracking-tight mb-6">
            One anchor change.<br />
            <span className="gradient-text">Everything reorganizes.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-10">
            Not more practices. Not better habits. A different foundation — from which everything downstream flows naturally.
          </p>
          <a
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            See what changes
            <span className="text-[#ff4d8d]">→</span>
          </a>
        </motion.div>

        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1.0], [0, 1, 1, 0]),
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">Scroll</p>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-zinc-700 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
}
