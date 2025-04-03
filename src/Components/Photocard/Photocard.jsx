import React from "react";
import "./PhotoCard.css"; // Add styling if needed

function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.src} alt={photo.title} className="photo-img" />
      <h3>{photo.title}</h3>
    </div>
  );
}

export default PhotoCard;
