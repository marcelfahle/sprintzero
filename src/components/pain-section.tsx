"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";

const pains = [
  {
    num: "01",
    title: "You\u2019re paying five figures a month and can\u2019t explain what you\u2019re getting.",
    body: "Your outsourced team sends estimates by the screen. They picked a framework because it\u2019s what they knew, not what was right. They can\u2019t do responsive design. They can\u2019t do phased releases. Every conversation ends with \u201Cit will take more hours.\u201D You\u2019re stuck \u2014 not because you picked bad people, but because the model is broken.",
  },
  {
    num: "02",
    title: "You tried AI coding tools. They generated garbage.",
    body: "Cursor, Copilot, Claude Code \u2014 your competitors rave about them. Your team tried them and got unusable output. It\u2019s not the tools. AI needs clean architecture to work: typed interfaces, modern patterns, testable code. Your codebase speaks a dialect these tools don\u2019t understand.",
  },
  {
    num: "03",
    title: "Good engineers won\u2019t touch this codebase. And you can\u2019t blame them.",
    body: "They clone the repo, open it up, see the mess, and quietly move on. You\u2019re not losing candidates because your salary is low. You\u2019re losing them because talented people refuse to spend their days fighting architecture decisions that were made in 2018.",
  },
  {
    num: "04",
    title: "There\u2019s a compliance conversation coming. You already know it\u2019s bad.",
    body: "SOC 2. A security audit. A big customer\u2019s vendor questionnaire. 100+ vulnerable dependencies. Basic auth in 2026. Packages that haven\u2019t been updated in years. One review, one customer asking the wrong question, one incident \u2014 that\u2019s all it takes to turn a quiet problem into an expensive one.",
  },
  {
    num: "05",
    title: "Your team spends more time on damage control than building.",
    body: "Pull requests that should take an hour take a week. Bugs cascade in ways nobody predicts. Onboarding a new developer takes months. The patterns are so unusual that even experienced engineers need a guided tour. Your developers aren\u2019t slow \u2014 they\u2019re drowning.",
  },
];

export function PainSection() {
  return (
    <SectionWrapper id="pain">
      <Tag>Sound familiar?</Tag>
      <Headline>
        The code isn&apos;t the problem.
        <br />
        <span className="italic text-muted">The decisions behind it are.</span>
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
