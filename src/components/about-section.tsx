"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl">
        <Tag>Who does this</Tag>
        <SectionTitle>
          I haven&apos;t written a single line of code
          <br />
          <span className="gradient-text">by hand since June 2024.</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted leading-relaxed"
        >
          <p>
            Weird thing to say on a page selling code modernization. But that&apos;s the whole point.
          </p>
          <p>
            I&apos;ve spent the last year doing one thing: building, testing, and refining AI-powered 
            development workflows. Pitting models against each other. Building custom agents and skills. 
            Running coordinated AI systems across entire codebases at a scale that would be insane to 
            attempt by hand.
          </p>
          <p>
            The result is a toolkit that turns <span className="text-foreground font-medium">three months of migration work into days</span>. 
            Not because anyone types faster. Because the approach is fundamentally different.
          </p>
          <p>
            Before this, 15+ years building software. SaaS products, mobile apps, Elixir, TypeScript, 
            more legacy codebases than I care to count. I know what good architecture looks like because 
            I&apos;ve lived with the consequences when it&apos;s bad.
          </p>
          <p className="text-foreground font-medium border-l-2 border-accent pl-4">
            We&apos;re not selling hours. We&apos;re selling the velocity your team should already have.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-sm text-muted"
        >
          — Marcel Fahle
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
