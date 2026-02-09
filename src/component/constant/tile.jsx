import React from "react";
function Tile({ badge, title, img }) {
  return (
    <div className="tile">
      <img src={img} alt={title} />
      <div className="tile-overlay">
        <span className="tile-badge">{badge}</span>
        <div className="tile-title">{title}</div>
      </div>
      
    </div>
  );
}
export default Tile;