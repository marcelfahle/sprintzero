"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Tag>Who you&apos;re working with</Tag>
      <Headline>
        Two people.{" "}
        <span className="italic text-muted">No layers. No runaround.</span>
      </Headline>

      <p className="text-muted text-lg leading-relaxed max-w-2xl mt-6 mb-16">
        You email us, a real person replies. No ticket system. No chatbot.
        No offshore handoff at 2 AM. Just the two people doing the work.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Marcel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/marcel.jpg"
              alt="Marcel Fahle"
              width={160}
              height={160}
              className="rounded-2xl object-cover w-24 h-24 sm:w-32 sm:h-32 shrink-0"
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Marcel Fahle
              </h3>
              <p className="mono-tag text-accent-bright mt-1">
                Engineering &amp; Architecture
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted leading-[1.8] text-base">
            <p>
              25 years building SaaS products, mobile apps, and full-stack
              systems. The last two spent going deep on AI-powered development
              &mdash; not as a gimmick, but because it genuinely lets me do in
              days what used to take months.
            </p>
            <p>
              I&apos;m in your codebase alongside coordinated AI systems &mdash;
              making architecture decisions, running quality control, and making
              sure the output is code your team can actually maintain. This
              isn&apos;t vibe coding. It&apos;s engineering with a radically
              different toolkit.
            </p>
          </div>
        </motion.div>

        {/* Vanessa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/vanessa.jpg"
              alt="Vanessa Roberts"
              width={160}
              height={160}
              className="rounded-2xl object-cover w-24 h-24 sm:w-32 sm:h-32 shrink-0"
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Vanessa Roberts
              </h3>
              <p className="mono-tag text-accent-bright mt-1">
                Operations &amp; Client Success
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted leading-[1.8] text-base">
            <p>
              4x founder with three successful exits and over 20 years scaling
              B2B SaaS companies. Vanessa runs the engagement from kickoff to
              handoff &mdash; timelines, communication, and making sure nothing
              falls through the cracks.
            </p>
            <p>
              She&apos;s the person you&apos;ll hear from most during the sprint.
              If something&apos;s off, she flags it before you notice. If you
              have a question at 9 PM, she&apos;s the one who actually replies.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
