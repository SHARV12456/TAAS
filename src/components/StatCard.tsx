interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({ label, value, sub, trend, trendUp }: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      {(sub || trend) && (
        <div className="stat-meta">
          {trend && (
            <span className={`stat-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
              {trendUp ? '+' : ''}{trend}
            </span>
          )}
          {sub && <span className="stat-sub">{sub}</span>}
        </div>
      )}
    </div>
  );
}
