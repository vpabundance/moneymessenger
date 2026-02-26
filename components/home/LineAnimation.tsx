"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function buildPaths(w: number, h: number): string[] {
  const fx = w * 0.95;
  const fy = h * 0.05;

  return [
    // Lines fanning toward the left edge
    `M${fx},${fy} Q${w * 0.50},${h * 0.05} 0,0`,
    `M${fx},${fy} Q${w * 0.47},${h * 0.14} 0,${h * 0.12}`,
    `M${fx},${fy} Q${w * 0.44},${h * 0.23} 0,${h * 0.26}`,
    `M${fx},${fy} Q${w * 0.42},${h * 0.35} 0,${h * 0.42}`,
    `M${fx},${fy} Q${w * 0.41},${h * 0.47} 0,${h * 0.58}`,
    `M${fx},${fy} Q${w * 0.43},${h * 0.59} 0,${h * 0.74}`,
    `M${fx},${fy} Q${w * 0.46},${h * 0.71} 0,${h * 0.89}`,
    `M${fx},${fy} Q${w * 0.50},${h * 0.83} 0,${h}`,
    // Lines fanning toward the bottom edge
    `M${fx},${fy} Q${w * 0.55},${h * 0.88} ${w * 0.16},${h}`,
    `M${fx},${fy} Q${w * 0.62},${h * 0.93} ${w * 0.36},${h}`,
    `M${fx},${fy} Q${w * 0.70},${h * 0.96} ${w * 0.56},${h}`,
    `M${fx},${fy} Q${w * 0.78},${h * 0.98} ${w * 0.74},${h}`,
    `M${fx},${fy} Q${w * 0.86},${h * 0.98} ${w * 0.91},${h}`,
    // Lines staying near the right edge
    `M${fx},${fy} Q${w * 0.90},${h * 0.88} ${w},${h * 0.74}`,
    `M${fx},${fy} Q${w * 0.94},${h * 0.70} ${w},${h * 0.44}`,
    `M${fx},${fy} Q${w * 0.97},${h * 0.42} ${w},${h * 0.14}`,
  ];
}

export default function LineAnimation() {
  const [dims, setDims] = useState({ w: 1440, h: 900 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setDims({ w: window.innerWidth, h: window.innerHeight });
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted) return null;

  const paths = buildPaths(dims.w, dims.h);
  const fx = dims.w * 0.95;
  const fy = dims.h * 0.05;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Subtle glow at focal point */}
      <motion.circle
        cx={fx}
        cy={fy}
        r={24}
        fill="#ff4d8d"
        style={{ filter: "blur(12px)" }}
        animate={{ opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx={fx}
        cy={fy}
        r={4}
        fill="#ff4d8d"
        animate={{ opacity: [0.4, 0.8, 0.4], r: [3, 5, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The radiating lines */}
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.8"
          strokeOpacity={0.28 + (i % 3) * 0.06}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 2.4,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            },
            opacity: {
              duration: 0.05,
              delay: i * 0.1,
            },
          }}
        />
      ))}
    </svg>
  );
}
