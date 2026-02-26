"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TIERS = [
  {
    name: "Open",
    price: "Free",
    tag: "Start here",
    tagColor: "#7c7cdf",
    description: "The foundation. Public essays, newsletter, and access to the open community forum.",
    features: [
      "All published essays",
      "Weekly newsletter",
      "Community discussion thread",
      "Resource library (starter)",
    ],
    cta: "Join Free",
    href: "/community",
    style: "border-zinc-800 bg-[#111]",
    ctaStyle: "border border-zinc-700 text-zinc-300 hover:border-zinc-400",
  },
  {
    name: "Practice",
    price: "$49/mo",
    tag: "Most popular",
    tagColor: "#ff4d8d",
    description: "Weekly live sessions, structured practice, and a small group of serious practitioners.",
    features: [
      "Everything in Open",
      "Weekly group calls (live + recorded)",
      "Deep-dive content library",
      "Practice frameworks + guides",
      "Small group accountability",
    ],
    cta: "Join Practice",
    href: "/community",
    style: "border-[#ff4d8d]/30 bg-gradient-to-b from-[#1a0d12] to-[#111]",
    ctaStyle: "bg-[#ff4d8d] text-white hover:bg-[#e0336d]",
    featured: true,
  },
  {
    name: "Direct",
    price: "$249/mo",
    tag: "Limited seats",
    tagColor: "#ff9a3c",
    description: "The highest-engagement tier. Direct access, inner-circle discourse, and the deepest work.",
    features: [
      "Everything in Practice",
      "Monthly 1:1 session",
      "Inner circle private forum",
      "Early access to new work",
      "Direct async access",
    ],
    cta: "Apply for Direct",
    href: "/community",
    style: "border-[#ff9a3c]/30 bg-gradient-to-b from-[#1a1108] to-[#111]",
    ctaStyle: "border border-[#ff9a3c]/50 text-[#ff9a3c] hover:border-[#ff9a3c]",
  },
];

function TierCard({
  tier,
  index,
}: {
  tier: (typeof TIERS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`relative flex flex-col rounded-2xl border p-8 ${tier.style} ${
        tier.featured ? "scale-[1.02] shadow-2xl shadow-[#ff4d8d]/10" : ""
      }`}
    >
      {/* Tag */}
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[9px] uppercase tracking-[0.3em] font-semibold px-2.5 py-1 rounded-full"
          style={{
            color: tier.tagColor,
            background: `${tier.tagColor}18`,
          }}
        >
          {tier.tag}
        </span>
        {tier.featured && (
          <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 1.5 L12.8 9.2 L20.5 11 L12.8 12.8 L11 20.5 L9.2 12.8 L1.5 11 L9.2 9.2 Z"
              fill="#ff4d8d"
            />
          </svg>
        )}
      </div>

      {/* Name + Price */}
      <h3 className="text-2xl font-semibold text-white mb-1">{tier.name}</h3>
      <p className="text-3xl font-semibold mb-4" style={{ color: tier.tagColor }}>
        {tier.price}
      </p>

      <p className="text-zinc-500 text-sm leading-relaxed mb-7">
        {tier.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span style={{ color: tier.tagColor }} className="mt-0.5 text-xs">
              ✓
            </span>
            <span className="text-zinc-400 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={tier.href}>
        <div
          className={`w-full py-3.5 rounded-xl text-center text-sm font-medium transition-all cursor-pointer ${tier.ctaStyle}`}
        >
          {tier.cta}
        </div>
      </Link>
    </motion.div>
  );
}

export default function CommunitySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f8f4f4] py-32 md:py-40 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 mb-5"
          >
            The Community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl md:text-5xl font-semibold text-[#111] leading-[1.05] tracking-tight mb-6"
          >
            The practice,<br />continued together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-zinc-500 text-lg leading-relaxed"
          >
            This isn&apos;t a course. It&apos;s an ongoing community of people who are done with performance culture and ready to operate from a different center.
          </motion.p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <TierCard key={i} tier={tier} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-zinc-400 mt-10"
        >
          Community hosted on Skool. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
