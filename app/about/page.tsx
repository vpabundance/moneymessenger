"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    period: "Early career",
    description:
      "Built a life around performance. Career wins, external metrics, the full optimization stack. Got very good at the machine.",
  },
  {
    period: "The gap",
    description:
      "Noticed that each goal achieved produced about 72 hours of satisfaction before the pressure resumed. Started asking what the structure was.",
  },
  {
    period: "The inquiry",
    description:
      "Went deep into contemplative traditions, psychology, philosophy of mind. Not seeking belief — seeking an honest account of what identity actually is and where fear comes from.",
  },
  {
    period: "The shift",
    description:
      "Found it. Not as a sudden awakening but as a slow reorientation — from operating as a self that had to earn everything, to recognizing myself as an expression of something that didn't need to earn anything.",
  },
  {
    period: "Now",
    description:
      "Building this: a site, a community, and a body of writing dedicated to making this perspective shift available in plain language for rational people.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 mb-6">About</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#111] leading-[1.02] tracking-tight mb-8">
            I spent a decade<br />
            <span className="text-zinc-400">optimizing the wrong thing.</span>
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed">
            This is the short version of how I found out what the right thing was — and what I&apos;m building because of it.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-zinc-100 mb-20 origin-left"
        />

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="prose prose-zinc max-w-none mb-20"
        >
          <p className="text-zinc-700 text-lg leading-[1.75] mb-6">
            For most of my adult life, I operated from a single, unexamined premise: that I was a separate individual who needed to produce results to justify my existence. That premise generated everything — the work ethic, the drive, the anxiety, the achievements, and eventually the exhaustion.
          </p>
          <p className="text-zinc-600 text-base leading-[1.75] mb-6">
            I wasn&apos;t broken. The results were real. But there was a cost I couldn&apos;t account for — a subtle background pressure that no amount of success ever turned off. I&apos;d read the books, done the practices, completed the programs. I was exceptionally good at self-improvement. And the gap didn&apos;t close.
          </p>
          <p className="text-zinc-600 text-base leading-[1.75] mb-6">
            What eventually changed wasn&apos;t a new practice or a new belief system. It was the discovery of a different foundation — a different understanding of what I actually was. Not a small self trying to survive and accumulate. An expression of something larger, operating through a particular form.
          </p>
          <p className="text-zinc-600 text-base leading-[1.75] mb-6">
            When that shifted — not as a concept but as a lived reality — the behavior reorganized. Fear became quieter. Force became unnecessary. The relationship with money and opportunity changed in ways I couldn&apos;t have predicted by trying to change them directly.
          </p>
          <p className="text-zinc-700 text-base leading-[1.75] font-medium">
            This site is the record of that shift. The essays are how I think out loud. The community is where others are making the same transition. You&apos;re welcome here.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 mb-10">The arc</p>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 pb-10 relative"
              >
                {/* Timeline line */}
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-[5.5rem] top-5 bottom-0 w-[1px] bg-zinc-100" />
                )}

                <div className="w-24 flex-shrink-0 pt-0.5">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wide leading-none">
                    {item.period}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[2.3rem] top-[5px] w-2 h-2 rounded-full bg-zinc-200" />
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The thesis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0d0d0d] rounded-2xl p-10 mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-5">The thesis</p>
          <p className="text-white text-xl md:text-2xl font-medium leading-[1.45]">
            &quot;When you re-anchor your identity as an expression of spirit — rather than a small self trying to survive — your behavior reorganizes. And receiving money, clarity, and all other forms of abundance becomes a downstream effect.&quot;
          </p>
          <p className="text-zinc-600 text-sm mt-6">
            This is the one idea this entire body of work points toward. Everything else is elaboration.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/writing">
            <div className="relative w-48 h-[68px] border border-[#111]/25 rounded-sm group cursor-pointer hover:border-[#111] transition-all">
              <span className="absolute top-3 left-3 text-sm text-[#111] group-hover:text-[#ff4d8d] transition-colors">↗</span>
              <span className="absolute bottom-2.5 left-3 text-xs font-medium text-[#111] group-hover:text-[#ff4d8d] transition-colors">Read the Essays</span>
            </div>
          </Link>
          <Link href="/community">
            <div className="relative w-48 h-[68px] border border-[#111]/25 rounded-sm group cursor-pointer hover:border-[#111] transition-all">
              <span className="absolute top-3 left-3 text-sm text-[#111] group-hover:text-[#ff4d8d] transition-colors">↗</span>
              <span className="absolute bottom-2.5 left-3 text-xs font-medium text-[#111] group-hover:text-[#ff4d8d] transition-colors">Join the Community</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
