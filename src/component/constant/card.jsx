function MiniCard({ title, items }) {
  return (
    <div className="mini-card">
      <div className="mini-header">
        <span>{title} Overview</span>
        <button className="link">View all</button>
      </div>
      <div className="mini-grid">
        {items.map((it) => (
          <div key={it.label} className="mini-item">
            <div className="mini-label">{it.label}</div>
            <div className="mini-value">{it.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MiniCard;