import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";

const links: {
  href: "/case-studies" | "/x-ray" | "/tech-due-diligence" | "/about";
  label: string;
}[] = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/x-ray", label: "Codebase X-Ray" },
  { href: "/tech-due-diligence", label: "Tech due diligence" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-bg-primary py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Wordmark size={16} />
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <span className="text-[14px] text-fg-tertiary">
            © {new Date().getFullYear()} SprintZero
          </span>
        </div>
      </Container>
    </footer>
  );
}
