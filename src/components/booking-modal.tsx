import { type ReactNode } from "react";

export const BOOKING_URL =
  "https://savvycal.com/marcel-from-bold/sprint-zero?utm_source=website&utm_medium=cta&utm_campaign=lp";

export function BookingTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
