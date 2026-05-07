"use client";

import { useEffect } from "react";

const SAVVYCAL_HOST = "savvycal.com";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "li_fat_id",
] as const;

const STORAGE_KEYS = {
  utms: "sz_utms",
  intentAt: "sz_intent_at",
} as const;

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (action: string, options: Record<string, string>) => void;
  }
}

export function Tracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collected = new URLSearchParams();
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) collected.set(key, value);
    }

    if (collected.size > 0) {
      try {
        localStorage.setItem(STORAGE_KEYS.utms, collected.toString());
      } catch {
        // ignore storage errors (private mode, quota, etc.)
      }
    }

    const stored = (() => {
      try {
        return localStorage.getItem(STORAGE_KEYS.utms) ?? collected.toString();
      } catch {
        return collected.toString();
      }
    })();

    const enhanceLink = (anchor: HTMLAnchorElement) => {
      try {
        const url = new URL(anchor.href);
        if (!url.host.includes(SAVVYCAL_HOST)) return;
        if (stored) {
          const carry = new URLSearchParams(stored);
          carry.forEach((value, key) => url.searchParams.set(key, value));
        }
        anchor.href = url.toString();
      } catch {
        // ignore malformed URLs
      }
    };

    document
      .querySelectorAll<HTMLAnchorElement>(`a[href*="${SAVVYCAL_HOST}"]`)
      .forEach(enhanceLink);

    // Mark booking intent on click. The actual conversion fires on
    // /thanks-xray after SavvyCal redirects back. Without this flag, a
    // direct visit to /thanks-xray would record a false conversion.
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.("a");
      if (!(target instanceof HTMLAnchorElement)) return;
      if (!target.href.includes(SAVVYCAL_HOST)) return;

      try {
        localStorage.setItem(STORAGE_KEYS.intentAt, String(Date.now()));
      } catch {
        // ignore storage errors
      }

      // Funnel-step event — distinct from the conversion goal. Lets us
      // see click-through-rate from SavvyCal CTA to actual booking.
      window.plausible?.("Click Book CTA", {
        props: { location: target.dataset.track ?? "default" },
      });
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
