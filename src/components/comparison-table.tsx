type Row = { label: string; values: string[] };

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Row[];
}) {
  return (
    <>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-xl border border-border-default md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-border-default bg-bg-secondary">
              <th className="w-[160px] px-5 py-4 font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase" />
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`border-l border-border-default px-5 py-4 font-display text-[15px] font-semibold tracking-tight ${
                    i === 0
                      ? "bg-accent-500/10 text-accent-700"
                      : "text-fg-secondary"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={
                  rowIndex === rows.length - 1
                    ? ""
                    : "border-b border-border-default"
                }
              >
                <td className="px-5 py-4 font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
                  {row.label}
                </td>
                {row.values.map((value, i) => (
                  <td
                    key={`${row.label}-${i}`}
                    className={`border-l border-border-default px-5 py-4 text-[15px] leading-snug ${
                      i === 0
                        ? "bg-accent-500/[0.06] font-medium text-fg-primary"
                        : "text-fg-secondary"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {columns.map((col, colIndex) => (
          <article
            key={col}
            className={`rounded-xl border p-5 ${
              colIndex === 0
                ? "border-accent-500/40 bg-accent-500/[0.06]"
                : "border-border-default bg-bg-primary"
            }`}
          >
            <h3
              className={`mb-4 font-display text-[18px] font-semibold tracking-tight ${
                colIndex === 0 ? "text-accent-700" : "text-fg-primary"
              }`}
            >
              {col}
            </h3>
            <dl className="flex flex-col gap-3">
              {rows.map((row) => (
                <div
                  key={`${col}-${row.label}`}
                  className="flex items-baseline justify-between gap-4 border-t border-border-default pt-3 first:border-t-0 first:pt-0"
                >
                  <dt className="font-mono text-[11px] font-semibold tracking-mono text-fg-tertiary uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-right text-[14px] text-fg-primary">
                    {row.values[colIndex]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
