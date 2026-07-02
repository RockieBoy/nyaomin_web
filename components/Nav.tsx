"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "about" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-sm" : "py-5"
      }`}
      style={{ background: scrolled ? "rgba(242,234,211,0.94)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="wax-seal w-9 h-9 text-sm text-[#F0C878]">✦</span>
        </Link>
        <nav className="flex gap-8 text-sm font-medium text-[#4A3B2A]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`capitalize transition-colors hover:text-[#5A3A26] ${
                pathname === href ? "text-[#5A3A26] font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
