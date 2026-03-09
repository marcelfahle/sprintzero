import { Divider } from "./section-wrapper";

export function Footer() {
  return (
    <footer className="pb-12 pt-0">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Divider />
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-sm text-muted/40">
            Sprint Zero · Marcel Fahle · 2026
          </span>
          <div className="flex items-center gap-8">
            <a
              href="mailto:marcel@marcelfahle.net"
              className="mono-tag text-muted/40 hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://marcelfahle.net"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-tag text-muted/40 hover:text-foreground transition-colors duration-300"
            >
              marcelfahle.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
