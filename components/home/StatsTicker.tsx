"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATS = [
  { label: "WEEKLY READERS", value: "3,240" },
  { label: "ESSAYS PUBLISHED", value: "52" },
  { label: "YEARS IN PRACTICE", value: "11" },
];

const TICK_DURATION = 3500;

export default function StatsTicker() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STATS.length);
      setKey((prev) => prev + 1);
    }, TICK_DURATION);
    return () => clearInterval(timer);
  }, []);

  const stat = STATS[current];

  return (
    <div className="absolute bottom-8 right-6 md:right-14 w-64 md:w-72 bg-[#111111] rounded-2xl p-6 overflow-hidden shadow-2xl">
      {/* Bar chart icon indicators */}
      <div className="flex gap-1.5 mb-4">
        {STATS.map((_, i) => (
          <div
            key={i}
            className={`rounded-sm transition-all duration-500 ${
              i === current
                ? "w-5 h-5 bg-[#ff4d8d]"
                : "w-3 h-3 bg-[#333] mt-1"
            }`}
          />
        ))}
      </div>

      {/* Stat display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-1.5">
            {stat.label}
          </p>
          <p
            className="text-4xl font-semibold leading-none"
            style={{ color: "#ff4d8d" }}
          >
            {stat.value}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <motion.div
        key={key}
        className="absolute bottom-0 left-0 h-[2px] bg-[#ff4d8d]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: TICK_DURATION / 1000,
          ease: "linear",
        }}
      />
    </div>
  );
}
