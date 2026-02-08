const LABEL_COLORS = {
  "₦120,000,000.00": "#2563eb",
  "₦50,000,000.00": "#16a34a",
  "₦200,000,000.00": "#14B8A6",
  "₦100,000,000.00": "#dc2626",
};

export function KPI({ label, sub, delta, positive }) {
  const labelText = typeof label === "string" ? label : "";
  const color = LABEL_COLORS[labelText] || "#111827";

  return (
    <div className="kpi">
      <div className="kpi-value" style={{ color }}>
        {label}
      </div>
      <div className="kpi-sub">
        <p className="kpi-sub-title">{sub}</p>
        <span className={`kpi-delta ${positive ? "pos" : "neg"}`}>
          {delta}
        </span>
      </div>
    </div>
  );
}