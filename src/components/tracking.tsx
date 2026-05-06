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

const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

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
        sessionStorage.setItem("sz_utms", collected.toString());
      } catch {
        // ignore storage errors (private mode, quota, etc.)
      }
    }

    const stored = (() => {
      try {
        return sessionStorage.getItem("sz_utms") ?? collected.toString();
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

    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.("a");
      if (!(target instanceof HTMLAnchorElement)) return;
      if (!target.href.includes(SAVVYCAL_HOST)) return;

      window.plausible?.("Book X-Ray", {
        props: { location: target.dataset.track ?? "default" },
      });

      if (window.gtag && GTAG_ID && GADS_CONVERSION_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${GTAG_ID}/${GADS_CONVERSION_LABEL}`,
        });
      }

      window.fbq?.("track", "Lead");
      window.lintrk?.("track", { conversion_id: "savvycal-click" });
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
