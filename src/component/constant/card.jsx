import DELETE from "../../assets/svg/delete.svg"
import PERSON from "../../assets/svg/person.svg"

function MiniCard({ title, items }) {
  return (
    <div className="mini-card">
      <div className="mini-header">
        <div className="delete-container">
          {title == "Listings" ? <img src={DELETE} alt="delete" /> : <img src={PERSON} alt="person" />}
          <span className="card-title">{title} Overview</span>
        </div>
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