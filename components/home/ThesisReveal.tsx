"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const THESIS =
  "When you re-anchor your identity as an expression of spirit — rather than a small self trying to survive — your behavior reorganizes. And receiving money, clarity, and all other forms of abundance becomes a downstream effect.";

function WordSpan({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each word starts fading in slightly after the previous
  const start = (index / total) * 0.85;
  const end = Math.min(0.97, ((index + 4) / total) * 0.85);

  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block text-white">
      {word}&nbsp;
    </motion.span>
  );
}

export default function ThesisReveal() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const words = THESIS.split(" ");

  const labelOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0, 0.12], [20, 0]);

  return (
    <section ref={ref} className="relative bg-[#0d0d0d] py-32 md:py-44 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.p
          style={{ opacity: labelOpacity, y: labelY }}
          className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-16 text-center"
        >
          The Core Thesis
        </motion.p>

        {/* Word-by-word reveal */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.45] text-center flex flex-wrap justify-center">
          {words.map((word, i) => (
            <WordSpan
              key={i}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
