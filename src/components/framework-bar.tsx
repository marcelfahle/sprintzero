import type { ComponentType, SVGProps } from "react";
import {
  SiElixir,
  SiLaravel,
  SiNextdotjs,
  SiPhoenixframework,
  SiReact,
  SiRubyonrails,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Container } from "./container";

type Framework = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  color: string;
};

const frameworks: Framework[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Elixir", Icon: SiElixir, color: "#4B275F" },
  { name: "Phoenix", Icon: SiPhoenixframework, color: "#FD4F00" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Rails", Icon: SiRubyonrails, color: "#CC0000" },
];

export function FrameworkBar() {
  return (
    <section className="border-y border-border-default bg-bg-primary py-14">
      <Container>
        <p className="mb-7 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
          Stacks we know
        </p>
        <ul className="flex flex-wrap items-center gap-x-9 gap-y-6 sm:gap-x-12">
          {frameworks.map((f) => (
            <li
              key={f.name}
              className="flex items-center gap-2.5"
              style={{ color: f.color }}
            >
              <f.Icon aria-label={f.name} role="img" size={32} />
              <span className="font-display text-[15px] font-semibold tracking-tight text-fg-primary">
                {f.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
