"use client";

const items = [
  "1,600+ files modernized",
  "0 downtime",
  "100+ vulnerabilities eliminated",
  "$35K all-in",
  "AI-ready architecture guaranteed",
  "10x developer velocity",
  "30-day performance guarantee",
  "2 engagements per month",
];

export function MarqueeStrip() {
  return (
    <div className="relative border-y border-border-strong overflow-hidden py-4 bg-surface/80">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mono-tag text-muted mx-8 sm:mx-12 shrink-0">
            {item}
            <span className="ml-8 sm:ml-12 text-accent/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
