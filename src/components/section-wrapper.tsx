"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-24 sm:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </motion.section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent-bright text-xs font-medium tracking-wider uppercase mb-4">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}
