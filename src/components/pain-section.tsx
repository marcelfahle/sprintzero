"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { Clock, Bot, UserX, ShieldAlert, Wrench } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Every feature takes 3x longer than it should.",
    body: "And nobody can give you a straight answer why. It's not your developers. It's the thousand small decisions baked into a codebase that was 'temporary' five years ago. Every new feature has to navigate around old mistakes like a car driving through a construction zone that never ends.",
  },
  {
    icon: Bot,
    title: "You tried AI coding tools. They generated garbage.",
    body: "Cursor, Copilot, Claude Code. Your competitors rave about them. Your team tried them and got unusable output. Here's why: AI tools need clean architecture to work. Typed interfaces. Modern patterns. Testable code. Your codebase speaks a dialect these tools don't understand.",
  },
  {
    icon: UserX,
    title: "Your last two senior hires looked at the repo and disappeared.",
    body: "Good engineers are allergic to bad code. They clone the repo, open it up, see the mess, and quietly move on. You're not losing candidates because your salary is low. You're losing them because talented people refuse to spend their days fighting a codebase instead of building product.",
  },
  {
    icon: ShieldAlert,
    title: "There's a security audit in your future. You already know it's bad.",
    body: "100+ vulnerable dependencies. Packages that haven't been updated in years. One compliance review, one customer asking the wrong question, one incident. That's all it takes to turn a quiet problem into an expensive one.",
  },
  {
    icon: Wrench,
    title: "Your developers spend more time on damage control than building.",
    body: "Pull requests that should take an hour take a week. Bugs cascade in ways nobody predicts. Onboarding a new developer takes months because the patterns are so unusual that even experienced engineers need a guided tour.",
  },
];

export function PainSection() {
  return (
    <SectionWrapper id="pain">
      <Tag>Sound familiar?</Tag>
      <SectionTitle>
        Your team isn&apos;t slow.
        <br />
        <span className="text-muted">Your stack is strangling them.</span>
      </SectionTitle>

      <div className="mt-16 grid gap-6">
        {pains.map((pain, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-surface-2/50 p-6 sm:p-8 hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <pain.icon className="w-5 h-5 text-accent-bright" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-accent-bright transition-colors">
                  {pain.title}
                </h3>
                <p className="text-muted leading-relaxed">{pain.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
