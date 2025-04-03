import React from "react";
import photos from "../../assets/Data/photos";
import PhotoCard from "../../Components/Photocard/PhotoCard";
import "./Group.css"; // Import CSS file

function GroupPictures() {
  const groupPhotos = photos.filter((photo) => photo.category === "group");

  return (
    <div className="group-pictures">
      <h2 className="title">Group Pictures</h2>
      <div className="photo-grid">
        {groupPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default GroupPictures;
