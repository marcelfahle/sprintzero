"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { BOOKING_URL } from "@/lib/constants";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Case study", href: "#case-study" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-200 ${
        scrolled
          ? "border-b border-border-default bg-white/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center gap-8 py-4">
          <Link href="/" className="no-underline">
            <Wordmark />
          </Link>
          <div className="ml-auto hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto rounded-full bg-fg-primary px-5 py-2.5 text-[14px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90 md:ml-0"
          >
            Book a Codebase X-Ray
          </a>
        </nav>
      </Container>
    </header>
  );
}
