type Stat = { value: string; label: string };

export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="stat-band reveal-on-scroll">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="stat-value">{s.value}</div>
              <div className="text-sm text-ink-dim mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
