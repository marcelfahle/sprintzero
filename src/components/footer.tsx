import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted text-sm">
          <Zap className="w-4 h-4 text-accent-bright" />
          Stack Sprint · Marcel Fahle · 2026
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="mailto:marcel@marcelfahle.net" className="hover:text-foreground transition-colors">
            Contact
          </a>
          <a href="https://marcelfahle.net" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            marcelfahle.net
          </a>
        </div>
      </div>
    </footer>
  );
}
