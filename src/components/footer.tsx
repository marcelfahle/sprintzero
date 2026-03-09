import { Divider } from "./section-wrapper";

export function Footer() {
  return (
    <footer className="pb-12 pt-0">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Divider />
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-sm text-muted">
            Sprint Zero · 2026
          </span>
          <div className="flex items-center gap-8">
            <a
              href="mailto:hello@sprintzero.sh"
              className="mono-tag text-muted hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
