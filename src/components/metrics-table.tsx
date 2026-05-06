type Row = { metric: string; before: string; after: string };

export function MetricsTable({
  rows,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  rows: Row[];
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border-default bg-bg-secondary">
            <th className="px-5 py-3 font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
              Metric
            </th>
            <th className="border-l border-border-default px-5 py-3 font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
              {beforeLabel}
            </th>
            <th className="border-l border-border-default px-5 py-3 font-mono text-[12px] font-semibold tracking-mono text-accent-600 uppercase">
              {afterLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.metric}
              className={
                i === rows.length - 1
                  ? ""
                  : "border-b border-border-default"
              }
            >
              <td className="px-5 py-3.5 text-[15px] font-medium text-fg-primary">
                {row.metric}
              </td>
              <td className="border-l border-border-default px-5 py-3.5 font-mono text-[14px] text-fg-secondary tabular-nums">
                {row.before}
              </td>
              <td className="border-l border-border-default px-5 py-3.5 font-mono text-[14px] text-fg-primary tabular-nums">
                {row.after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
