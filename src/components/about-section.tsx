"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Tag>Who you&apos;re working with</Tag>
      <Headline>
        Two founders.{" "}
        <span className="italic text-muted">A focused team. No runaround.</span>
      </Headline>

      <p className="text-muted text-lg leading-relaxed max-w-2xl mt-6 mb-16">
        You email us, a real person replies. No ticket system. No chatbot.
        No offshore handoff at 2 AM. A small, focused team &mdash; with the
        two of us in your codebase from day one.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Vanessa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/vanessa.jpg"
              alt="Vanessa Roberts"
              width={160}
              height={160}
              className="rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32 shrink-0"
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Vanessa Roberts
              </h3>
              <p className="mono-tag text-foreground/60 mt-1">
                CEO &middot; Partnerships
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted leading-[1.8] text-base">
            <p>
              Four-time founder. Three successful exits. 20+ years scaling B2B
              SaaS companies &mdash; and a network most consultancies never get.
              Chances are, she&apos;s the reason you&apos;re on this page.
            </p>
            <p>
              She runs the business end: strategy, partnerships, and the
              relationships that put the right work in front of the right
              people. When you book the audit call, she&apos;s the one
              you&apos;re talking to. When something needs to move mid-sprint,
              she&apos;s the one moving it.
            </p>
          </div>
        </motion.div>

        {/* Marcel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/marcel.jpg"
              alt="Marcel Fahle"
              width={160}
              height={160}
              className="rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32 shrink-0"
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Marcel Fahle
              </h3>
              <p className="mono-tag text-foreground/60 mt-1">
                CTO &middot; Engineering
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted leading-[1.8] text-base">
            <p>
              25 years building SaaS products, mobile apps, and full-stack
              systems. The last two spent going deep on AI-assisted engineering
              &mdash; not as a gimmick, but because it genuinely lets him do in
              days what used to take months.
            </p>
            <p>
              Marcel is the one in your codebase: making architecture decisions,
              running quality control on AI output, and shipping code your team
              can actually maintain. This isn&apos;t vibe coding. It&apos;s
              engineering with a radically different toolkit.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
