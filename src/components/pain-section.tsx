"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";

const pains = [
  {
    num: "01",
    title: "Every feature takes 3x longer than it should.",
    body: "And nobody can give you a straight answer why. It's not your developers. It's the thousand small decisions baked into a codebase that was 'temporary' five years ago. Every new feature has to navigate around old mistakes like a car driving through a construction zone that never ends.",
  },
  {
    num: "02",
    title: "You tried AI coding tools. They generated garbage.",
    body: "Cursor, Copilot, Claude Code — your competitors rave about them. Your team tried them and got unusable output. AI tools need clean architecture to work. Typed interfaces. Modern patterns. Testable code. Your codebase speaks a dialect these tools don't understand.",
  },
  {
    num: "03",
    title: "Your last two senior hires looked at the repo and disappeared.",
    body: "Good engineers are allergic to bad code. They clone the repo, open it up, see the mess, and quietly move on. You're not losing candidates because your salary is low. You're losing them because talented people refuse to spend their days fighting a codebase.",
  },
  {
    num: "04",
    title: "There's a security audit in your future. You already know it's bad.",
    body: "100+ vulnerable dependencies. Packages that haven't been updated in years. One compliance review, one customer asking the wrong question, one incident — that's all it takes to turn a quiet problem into an expensive one.",
  },
  {
    num: "05",
    title: "Your developers spend more time on damage control than building.",
    body: "Pull requests that should take an hour take a week. Bugs cascade in ways nobody predicts. Onboarding a new developer takes months because the patterns are so unusual that even experienced engineers need a guided tour.",
  },
];

export function PainSection() {
  return (
    <SectionWrapper id="pain">
      <Tag>Sound familiar?</Tag>
      <Headline>
        Your team isn&apos;t slow.
        <br />
        <span className="italic text-muted">Your stack is strangling them.</span>
      </Headline>

      <div className="mt-20 space-y-0">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            {i > 0 && <Divider />}
            <div className="group py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[4rem_1fr] gap-6 lg:gap-10">
              <span className="mono-tag text-muted-faint text-2xl font-bold pt-1 hidden lg:block">
                {pain.num}
              </span>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-4 group-hover:text-accent-bright transition-colors duration-500">
                  {pain.title}
                </h3>
                <p className="text-muted leading-[1.8] max-w-2xl text-base">
                  {pain.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
