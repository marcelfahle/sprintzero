import { Container } from "./container";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-default bg-bg-primary py-8">
      <Container>
        <div className="flex items-center justify-between">
          <Wordmark size={16} />
          <span className="text-[14px] text-fg-tertiary">
            © {new Date().getFullYear()} SprintZero
          </span>
        </div>
      </Container>
    </footer>
  );
}
