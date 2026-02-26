"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/writing", label: "Writing" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Announcement banner */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-50 flex items-center justify-center bg-[#1a1a3e] px-6 py-2.5 text-xs text-zinc-300"
      >
        <a href="/writing" className="hover:text-white transition-colors tracking-wide">
          New essay: <span className="text-white font-medium">The Proving Mind — Why high achievers are the most spiritually displaced</span>
          <span className="ml-1.5 text-[#ff4d8d]">↗</span>
        </a>
      </motion.div>

      {/* Main nav */}
      <nav
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <StarLogo />
            <span
              className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-[#111]"
              }`}
            >
              {/* Replace with your name */}
              [Your Name]
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-60 ${
                  scrolled ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/community"
              className="text-sm font-medium px-4 py-2 rounded-full border transition-all hover:bg-[#ff4d8d] hover:border-[#ff4d8d] hover:text-white border-[#ff4d8d] text-[#ff4d8d]"
            >
              Subscribe
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`flex flex-col gap-[5px] w-6 cursor-pointer md:hidden transition-colors ${
              scrolled || open ? "text-white" : "text-[#111]"
            }`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-full bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-full bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-[1.5px] w-full bg-current"
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-between px-8 py-24"
          >
            <div className="flex flex-col gap-6 mt-8">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-5xl font-semibold text-white hover:text-[#ff4d8d] transition-colors leading-none tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pb-8"
            >
              <Link
                href="/community"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 rounded-full border border-[#ff4d8d] text-[#ff4d8d] text-sm font-medium hover:bg-[#ff4d8d] hover:text-white transition-all"
              >
                Subscribe to the Thinking
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StarLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1.5 L12.8 9.2 L20.5 11 L12.8 12.8 L11 20.5 L9.2 12.8 L1.5 11 L9.2 9.2 Z"
        fill="#ff4d8d"
      />
    </svg>
  );
}
