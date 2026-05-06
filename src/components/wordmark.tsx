export function Wordmark({ size = 20, inverse = false }: { size?: number; inverse?: boolean }) {
  const fg = inverse ? "text-[#fafaf9]" : "text-fg-primary";
  return (
    <span className={`font-display font-bold tracking-[-0.025em] ${fg}`} style={{ fontSize: size }}>
      Sprint<span className="text-accent-600">Zero</span>
    </span>
  );
}
