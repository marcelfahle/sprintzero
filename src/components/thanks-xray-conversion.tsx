"use client";

import { useEffect } from "react";

const STORAGE_KEYS = {
  utms: "sz_utms",
  intentAt: "sz_intent_at",
} as const;

const INTENT_TTL_MS = 30 * 60 * 1000; // 30 minutes

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

export function ThanksXrayConversion() {
  useEffect(() => {
    let intentAt = 0;
    let storedUtms = "";
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.intentAt);
      intentAt = raw ? Number(raw) : 0;
      storedUtms = localStorage.getItem(STORAGE_KEYS.utms) ?? "";
    } catch {
      // ignore storage errors
    }

    const now = Date.now();
    const fresh = intentAt > 0 && now - intentAt < INTENT_TTL_MS;

    // Allow override via URL — SavvyCal can be configured to append a
    // confirmation token, e.g. ?booking=confirmed
    const params = new URLSearchParams(window.location.search);
    const explicitConfirmation = params.has("booking") || params.has("confirmed");

    if (!fresh && !explicitConfirmation) {
      // Direct visit (no recent click intent and no SavvyCal-passed
      // confirmation flag). Don't record a false conversion.
      return;
    }

    const props: Record<string, string> = {};
    if (storedUtms) {
      const carried = new URLSearchParams(storedUtms);
      carried.forEach((value, key) => {
        props[key] = value;
      });
    }
    // Allow URL params to override stored values (in case SavvyCal passes
    // through any campaign-level metadata)
    params.forEach((value, key) => {
      if (key.startsWith("utm_") || key === "gclid" || key === "fbclid") {
        props[key] = value;
      }
    });

    window.plausible?.("Book X-Ray", { props });

    if (window.gtag && GTAG_ID && GADS_CONVERSION_LABEL) {
      window.gtag("event", "conversion", {
        send_to: `${GTAG_ID}/${GADS_CONVERSION_LABEL}`,
        transaction_id: String(intentAt || now),
      });
    }

    window.fbq?.("track", "Lead");
    window.lintrk?.("track", { conversion_id: "xray-booked" });

    // Clear so a refresh of /thanks-xray doesn't double-count
    try {
      localStorage.removeItem(STORAGE_KEYS.intentAt);
      localStorage.removeItem(STORAGE_KEYS.utms);
    } catch {
      // ignore storage errors
    }
  }, []);

  return null;
}
