"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16 items-start">
        <div>
          <Tag>Who does this</Tag>
          <Headline>
            15 years of building software.
            <br />
            <span className="gradient-text italic">
              Two years of making AI do it better.
            </span>
          </Headline>
        </div>

        <div className="hidden lg:block w-px bg-border-strong self-stretch" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-muted leading-[1.8] text-base"
        >
          <p>
            I&apos;m Marcel. I&apos;ve been building SaaS products, mobile apps,
            and full-stack systems since before React existed.
          </p>
          <p>
            In mid-2024, I stopped writing code by hand entirely. Not because I
            got lazy &mdash; because I found something better. I spent two years
            building, testing, and refining AI-powered development workflows that
            turn months of migration work into days.
          </p>
          <p>
            Every engagement, I&apos;m in the codebase alongside coordinated AI
            systems &mdash; making the architecture decisions, running quality
            control, and ensuring the output is code your team can actually
            maintain. This isn&apos;t vibe coding. It&apos;s engineering with a
            radically different toolkit.
          </p>
          <p className="text-foreground font-medium border-l-2 border-accent pl-5 py-1 font-serif text-lg italic">
            What used to take a team of five three to six months, we deliver in
            30 days. And when we leave, your team owns everything.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
