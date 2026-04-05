"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "enCappture", src: "/logos/encappture.png", className: "h-4 sm:h-6" },
  { name: "FounderWell", src: "/logos/founderwell.svg", className: "h-5 sm:h-7" },
  { name: "HRTU", src: "/logos/hrtu.png", className: "h-4 sm:h-[26px]" },
];

export function LogoBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <p className="mono-tag text-muted-faint text-center mb-8">
          Trusted by
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-16 mb-10">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={200}
              height={28}
              className={`w-auto ${logo.className}`}
            />
          ))}
        </div>
        <blockquote className="text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-muted italic leading-relaxed">
            &ldquo;Sprint Zero did more in one sprint than our offshore team did
            in six months.&rdquo;
          </p>
          <footer className="mt-3 mono-tag text-muted-faint">
            &mdash; Denise DiSano, CEO at enCappture
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}
