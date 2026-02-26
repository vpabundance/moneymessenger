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
    description:
      "Public essays, newsletter, and access to the open community forum. Everything you need to begin the perspective shift.",
    features: [
      "All published essays (52 and growing)",
      "Weekly newsletter",
      "Community discussion forum",
      "Starter resource library",
      "Monthly open Q&A thread",
    ],
    cta: "Join Free",
    style: "border-zinc-800 bg-[#0d0d0d]",
    ctaStyle: "border border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white",
  },
  {
    name: "Practice",
    price: "$49 / month",
    tag: "Most popular",
    tagColor: "#ff4d8d",
    description:
      "Weekly live sessions, structured practice, and a small group of serious practitioners doing the real work together.",
    features: [
      "Everything in Open",
      "Weekly group call (live + recorded)",
      "Deep-dive content library",
      "Practice frameworks and guides",
      "Small group (max 40 members)",
      "Member accountability threads",
      "Monthly guest conversations",
    ],
    cta: "Join Practice",
    style: "border-[#ff4d8d]/25 bg-gradient-to-b from-[#1a0d12] to-[#0d0d0d]",
    ctaStyle: "bg-[#ff4d8d] text-white hover:bg-[#e0336d]",
    featured: true,
  },
  {
    name: "Direct",
    price: "$249 / month",
    tag: "Limited — 12 seats",
    tagColor: "#ff9a3c",
    description:
      "The highest-engagement tier. Direct access, inner-circle discourse, and the deepest, most personal work available.",
    features: [
      "Everything in Practice",
      "Monthly 1:1 session (50 min)",
      "Inner circle private forum",
      "Early access to all new work",
      "Direct async messaging access",
      "Priority in group calls",
      "Annual strategy session",
    ],
    cta: "Apply for Direct",
    style: "border-[#ff9a3c]/25 bg-gradient-to-b from-[#1a110a] to-[#0d0d0d]",
    ctaStyle: "border border-[#ff9a3c]/50 text-[#ff9a3c] hover:border-[#ff9a3c] hover:bg-[#ff9a3c]/10",
  },
];

const FAQS = [
  {
    q: "What kind of people join?",
    a: "Mostly high-achievers — entrepreneurs, professionals, and creatives — who are done with performance culture and spiritually curious but grounded. Rational people who are open. People who feel like something essential is missing from the current frame.",
  },
  {
    q: "What does the community actually do?",
    a: "The core activity is thinking together. Weekly calls explore ideas from the essays and your real-life situations. The forum is for discussion, questions, and sharing experiences of the shift as it happens in practice.",
  },
  {
    q: "Is this therapy or coaching?",
    a: "Neither. It's more like a thinking community with a specific philosophical lens. The goal isn't to fix you — it's to offer a different frame from which your existing intelligence can operate more freely.",
  },
  {
    q: "What platform is this hosted on?",
    a: "The community is hosted on Skool. Easy to use, no distractions, works on mobile. You'll get full access immediately after joining.",
  },
  {
    q: "Can I move between tiers?",
    a: "Yes. You can upgrade or downgrade at any time. Most people start with Open or Practice and find their footing before deciding what level of engagement suits them.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-zinc-800 py-6"
    >
      <p className="text-white font-medium mb-3">{q}</p>
      <p className="text-zinc-500 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-7">
            The Community
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.97] tracking-tight mb-8">
            The practice,<br />
            <span className="text-zinc-600">continued together.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-12">
            This isn&apos;t a course or a coaching program. It&apos;s an ongoing community of people who are done with performance culture and ready to operate from a different center.
          </p>

          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Members</p>
              <p className="text-white font-semibold text-lg">847</p>
            </div>
            <div>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Weekly calls</p>
              <p className="text-white font-semibold text-lg">Live + recorded</p>
            </div>
            <div>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Platform</p>
              <p className="text-white font-semibold text-lg">Skool</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#111] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-5">Who this is for</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.08] tracking-tight">
              Exhausted by self-improvement.<br />
              <span className="text-zinc-500">Open to something different.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "You've done the work. The books, the courses, the routines. And something still feels like it's missing.",
              "You're spiritually curious but allergic to vague language and empty frameworks.",
              "You want a rational, grounded approach to the inner shift — without giving up your intelligence at the door.",
              "You're ready to stop performing transformation and start living from a different anchor.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-[#ff4d8d] mt-0.5 flex-shrink-0">✓</span>
                <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-4">Membership Tiers</p>
            <h2 className="text-4xl font-semibold text-white">Choose your level of engagement.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIERS.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative flex flex-col rounded-2xl border p-8 ${tier.style} ${
                  tier.featured ? "scale-[1.02] shadow-2xl shadow-[#ff4d8d]/10" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[9px] uppercase tracking-[0.3em] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: tier.tagColor, background: `${tier.tagColor}18` }}
                  >
                    {tier.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-1">{tier.name}</h3>
                <p className="text-2xl font-semibold mb-4" style={{ color: tier.tagColor }}>
                  {tier.price}
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-7">{tier.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: tier.tagColor }} className="mt-0.5 text-xs">✓</span>
                      <span className="text-zinc-400 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${tier.ctaStyle}`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-700 mt-8">Cancel anytime. No long-term commitments.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111] py-24 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-5">FAQ</p>
          <h2 className="text-3xl font-semibold text-white mb-12">Common questions.</h2>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-700 mb-6">Ready to begin?</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          The shift is available<br />
          <span className="gradient-text">whenever you are.</span>
        </h2>
        <p className="text-zinc-500 text-base mb-10 max-w-md mx-auto">
          Start free. Stay as long as it serves you. The community is built for depth, not for growth metrics.
        </p>
        <Link href="#">
          <button className="bg-[#ff4d8d] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#e0336d] transition-colors">
            Join the Community
          </button>
        </Link>
      </section>
    </main>
  );
}
