"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { BOOKING_URL } from "@/lib/constants";

const anchorLinks = [
  { label: "Problem", href: "/#problem" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
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
        <nav className="flex items-center gap-4 py-4 sm:gap-8">
          <Link href="/" className="no-underline">
            <Wordmark />
          </Link>
          <div className="ml-auto hidden items-center gap-7 md:flex">
            {anchorLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Link
            href="/case-studies"
            className="ml-auto text-[14px] font-medium text-fg-secondary transition-colors duration-200 hover:text-fg-primary md:ml-0 md:text-[15px]"
          >
            Case studies
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-fg-primary px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap text-fg-inverse transition-opacity duration-200 hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-[14px]"
          >
            <span className="sm:hidden">Book X-Ray</span>
            <span className="hidden sm:inline">Book a Codebase X-Ray</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
