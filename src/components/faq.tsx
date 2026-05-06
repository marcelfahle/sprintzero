"use client";

import { useState } from "react";
import { Container } from "./container";

const DEFAULT_OPEN = new Set([0, 1]);

const items = [
  {
    q: "Why a paid X-Ray instead of a free audit?",
    a: "Because a real diagnostic takes real work — repo access, architecture analysis, dependency auditing. A free call is a sales pitch. The X-Ray is an engineering deliverable you can use whether you hire us or not. And it's credited 100% toward the sprint if you do.",
  },
  {
    q: "Do we need a full rewrite?",
    a: "Almost certainly not. Rewrites are expensive, risky, and rarely ship. We modernize incrementally — migrate build tools, consolidate state management, eliminate dead code, upgrade frameworks — while preserving every feature. Your users never notice.",
  },
  {
    q: "Will this break our product delivery?",
    a: "No. We work on a parallel branch and ship as a single, tested PR. Your team continues shipping features on the main branch throughout the sprint. Zero disruption to delivery.",
  },
  {
    q: "Do you work with our existing team?",
    a: "Yes. We lead the modernization, but we collaborate with your team throughout. The handoff includes a full walkthrough so your team owns the new architecture from day one.",
  },
  {
    q: "What stacks do you handle?",
    a: "React (CRA, Redux, Redux Saga), Laravel, Rails, Phoenix, AngularJS — basically any JS-heavy or PHP/Ruby SaaS stack that's 3+ years old and showing its age. If you're not sure, book the X-Ray and we'll tell you.",
  },
  {
    q: "What happens after the sprint?",
    a: "You get a clean, documented codebase and a walkthrough. If you want ongoing support, we offer a guardrail retainer — lightweight code review and architecture guidance to keep things clean. But you're never locked in.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<Set<number>>(() => new Set(DEFAULT_OPEN));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="mb-12">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            FAQ
          </p>
          <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
            Common objections, answered.
          </h2>
        </div>
        <div className="border-t border-border-default">
          {items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={item.q} className="border-b border-border-default">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-fg-primary"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className={`font-mono text-[16px] text-fg-tertiary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[720px] pb-5 text-[16px] leading-[1.65] text-fg-secondary">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
