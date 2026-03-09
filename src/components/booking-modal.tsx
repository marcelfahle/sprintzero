"use client";

import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Context                                                           */
/* ------------------------------------------------------------------ */

interface BookingContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/*  Provider                                                          */
/* ------------------------------------------------------------------ */

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ isOpen, open, close }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
    </BookingContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Trigger                                                           */
/* ------------------------------------------------------------------ */

export function BookingTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useBookingModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal                                                             */
/* ------------------------------------------------------------------ */

export function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  /* Escape key */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-surface-2 border border-border-strong p-8 sm:p-10"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-foreground transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tag */}
            <span className="mono-tag text-accent-bright mb-4 inline-block tracking-[0.2em]">
              BOOK YOUR FREE AUDIT
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl font-bold leading-tight mb-4">
              30 minutes. No pitch.
              <br />
              <span className="gradient-text-fire italic">Just answers.</span>
            </h2>

            {/* Description */}
            <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
              We&apos;ll look at your codebase and tell you exactly what&apos;s
              broken, what it costs you, and whether we can help. If we
              can&apos;t, you still walk away with a free assessment.
            </p>

            {/* CTA */}
            <a
              href="https://savvycal.com/marcelfahle/sprint-zero"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium text-base glow-fire"
            >
              Book Your Free Audit Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Footnote */}
            <p className="mt-6 mono-tag text-muted">
              2 spots per month · First come, first served
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
