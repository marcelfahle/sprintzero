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
            I haven&apos;t written a single line of code by hand{" "}
            <span className="gradient-text italic">since June 2024.</span>
          </Headline>
          <div className="mt-8 mono-tag text-muted">
            — Sprint Zero
          </div>
          <p className="text-sm text-muted mt-2">
            15+ years building software · SaaS · Mobile · Elixir · TypeScript
          </p>
        </div>

        <div className="hidden lg:block w-px bg-border-strong self-stretch" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-muted leading-[1.8] text-base"
        >
          <p>
            Weird thing to say on a page selling code modernization. But
            that&apos;s the whole point.
          </p>
          <p>
            I&apos;ve spent the last year doing one thing: building, testing,
            and refining AI-powered development workflows. Pitting models
            against each other. Building custom agents and skills. Running
            coordinated AI systems across entire codebases at a scale that
            would be{" "}
            <em className="font-serif text-foreground">insane</em> to
            attempt by hand.
          </p>
          <p>
            The result is a toolkit that turns{" "}
            <span className="text-foreground font-medium">
              three months of migration work into days
            </span>
            . Not because anyone types faster. Because the approach is
            fundamentally different.
          </p>
          <p className="text-foreground font-medium border-l-2 border-accent pl-5 py-1 font-serif text-lg italic">
            We&apos;re not selling hours. We&apos;re selling the velocity your
            team should already have.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
