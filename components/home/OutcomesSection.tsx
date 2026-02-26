"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OUTCOMES = [
  {
    number: "01",
    title: "Fear becomes information.",
    body: "Not something to fight. A signal from the old anchor — available to notice, and release. When you're no longer operating in survival mode, the noise quiets.",
    color: "#7c7cdf",
    bg: "rgba(124,124,223,0.06)",
    border: "rgba(124,124,223,0.15)",
  },
  {
    number: "02",
    title: "Effort becomes expression.",
    body: "The work gets easier. Not because it's less demanding, but because you're no longer fighting yourself while doing it. Aligned action feels completely different from forced action.",
    color: "#ff9a3c",
    bg: "rgba(255,154,60,0.06)",
    border: "rgba(255,154,60,0.15)",
  },
  {
    number: "03",
    title: "Abundance becomes natural.",
    body: "When you stop contracting around scarcity, you stop blocking what was already available. Money, opportunities, clarity — these are downstream effects of an open channel.",
    color: "#ff4d8d",
    bg: "rgba(255,77,141,0.06)",
    border: "rgba(255,77,141,0.15)",
  },
];

function OutcomeCard({
  outcome,
  index,
}: {
  outcome: (typeof OUTCOMES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.14,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="rounded-2xl p-8 border"
      style={{
        background: outcome.bg,
        borderColor: outcome.border,
      }}
    >
      <div className="flex items-start gap-5 mb-5">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.3em] mt-1"
          style={{ color: outcome.color }}
        >
          {outcome.number}
        </span>
        <div
          className="w-4 h-[1px] mt-3 flex-shrink-0"
          style={{ background: outcome.color }}
        />
      </div>
      <h3 className="text-xl font-semibold text-white leading-snug mb-4">
        {outcome.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{outcome.body}</p>
    </motion.div>
  );
}

export default function OutcomesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0d0d0d] py-32 md:py-40 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-6"
          >
            What actually changes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-white leading-[1.05] tracking-tight max-w-2xl"
          >
            The shift is structural. The results are practical.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OUTCOMES.map((outcome, i) => (
            <OutcomeCard key={i} outcome={outcome} index={i} />
          ))}
        </div>

        {/* Divider into next section */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 h-[1px] bg-zinc-800 origin-left"
        />
      </div>
    </section>
  );
}
