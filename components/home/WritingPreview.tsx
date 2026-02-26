"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ESSAYS = [
  {
    title: "The Proving Mind",
    subtitle: "Why high achievers are the most spiritually displaced",
    date: "Feb 2025",
    readTime: "12 min",
    tag: "Identity",
    gradient: "from-[#1a0d1a] to-[#0d0d0d]",
    accent: "#ff4d8d",
  },
  {
    title: "Source as Strategy",
    subtitle: "A rational case for operating from spirit",
    date: "Jan 2025",
    readTime: "9 min",
    tag: "Philosophy",
    gradient: "from-[#0d0d1a] to-[#0d0d0d]",
    accent: "#7c7cdf",
  },
  {
    title: "Money as a Mirror",
    subtitle: "What your relationship with income reveals about your anchor",
    date: "Jan 2025",
    readTime: "11 min",
    tag: "Abundance",
    gradient: "from-[#1a0f0a] to-[#0d0d0d]",
    accent: "#ff9a3c",
  },
];

function EssayCard({
  essay,
  index,
}: {
  essay: (typeof ESSAYS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href="/writing">
        <div
          className={`group rounded-2xl border border-zinc-800 bg-gradient-to-b ${essay.gradient} p-8 h-full cursor-pointer hover:border-zinc-600 transition-all duration-300`}
        >
          {/* Tag */}
          <span
            className="text-[9px] uppercase tracking-[0.3em] font-semibold px-2.5 py-1 rounded-full"
            style={{
              color: essay.accent,
              background: `${essay.accent}18`,
            }}
          >
            {essay.tag}
          </span>

          <h3 className="text-xl font-semibold text-white mt-5 mb-2 group-hover:text-[#ff4d8d] transition-colors leading-snug">
            {essay.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            {essay.subtitle}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 text-[10px] text-zinc-600 uppercase tracking-widest">
              <span>{essay.date}</span>
              <span>·</span>
              <span>{essay.readTime} read</span>
            </div>
            <span
              className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: essay.accent }}
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WritingPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0d0d0d] py-32 md:py-40 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-5"
            >
              The Writing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold text-white leading-[1.05] tracking-tight"
            >
              Long-form thinking.<br />
              <span className="text-zinc-600">No shortcuts.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Link
              href="/writing"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              View all essays →
            </Link>
          </motion.div>
        </div>

        {/* Essay grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ESSAYS.map((essay, i) => (
            <EssayCard key={i} essay={essay} index={i} />
          ))}
        </div>

        {/* Mobile — view all link */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/writing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            View all essays →
          </Link>
        </div>
      </div>
    </section>
  );
}
