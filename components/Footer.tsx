import Link from "next/link";

const WRITING_LINKS = [
  "The Proving Mind",
  "Source as Strategy",
  "Money as a Mirror",
  "Fear Is Structural",
  "The Myth of Self-Authorship",
];

const LEARN_LINKS = [
  { label: "Community", href: "/community" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/community" },
];

const SOCIAL_LINKS = [
  { label: "X / Twitter", href: "#" },
  { label: "Substack", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f0f0] border-t border-zinc-200">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left: Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 1.5 L12.8 9.2 L20.5 11 L12.8 12.8 L11 20.5 L9.2 12.8 L1.5 11 L9.2 9.2 Z"
                  fill="#ff4d8d"
                />
              </svg>
              <span className="text-base font-semibold text-[#111] tracking-tight">[Your Name]</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              Expression over performance. Identity as the leverage. Abundance as a downstream effect of alignment.
            </p>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">
              Subscribe to the thinking
            </p>
            <div className="flex gap-3 mt-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-[#111] placeholder:text-zinc-400 focus:outline-none focus:border-[#ff4d8d] transition-colors"
              />
              <button className="bg-[#111] text-white text-sm px-4 py-2.5 rounded-lg hover:bg-[#ff4d8d] transition-colors font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Middle: Writing */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Recent Essays</p>
            <ul className="space-y-3">
              {WRITING_LINKS.map((title) => (
                <li key={title}>
                  <Link
                    href="/writing"
                    className="text-sm text-zinc-600 hover:text-[#ff4d8d] transition-colors leading-relaxed"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Nav + Socials */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Navigate</p>
            <ul className="space-y-3 mb-10">
              {LEARN_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-[#ff4d8d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-[#ff4d8d] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="md:col-span-3">
            <div className="relative border border-zinc-200 rounded-2xl p-8 hover:border-[#ff4d8d]/50 transition-all group cursor-pointer bg-white">
              <span className="absolute top-5 left-5 text-[#ff4d8d] text-xl">↗</span>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Join the community</p>
                <p className="text-lg font-semibold text-[#111] leading-tight group-hover:text-[#ff4d8d] transition-colors">
                  Open the community and start the shift right now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex gap-6 text-xs text-zinc-400">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Use</a>
          </div>
          <p className="text-xs text-zinc-400">
            © 2025 [Your Name]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
