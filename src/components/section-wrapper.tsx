"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FitText } from "./fit-text";

export function SectionWrapper({
  children,
  id,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-28 sm:py-36 ${className}`}
    >
      <div className={`${wide ? "max-w-7xl" : "max-w-5xl"} mx-auto px-6 sm:px-8`}>
        {children}
      </div>
    </motion.section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="mono-tag inline-block text-accent-bright mb-6 tracking-[0.2em]">
      {children}
    </span>
  );
}

export function Headline({
  children,
  className = "",
  lines = 3,
}: {
  children: ReactNode;
  className?: string;
  lines?: number;
}) {
  return (
    <FitText
      lines={lines}
      min={28}
      max={64}
      leading={1.08}
      className={`font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6 ${className}`}
    >
      <h2>{children}</h2>
    </FitText>
  );
}

export function Subhead({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
      {children}
    </p>
  );
}

export function Divider() {
  return <div className="editorial-rule my-0" />;
}
