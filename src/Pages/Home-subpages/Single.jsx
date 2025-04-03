import React from "react";
import photos from "../../assets/Data/photos";
import PhotoCard from "../../Components/Photocard/PhotoCard";
import "./Single.css"; // Import CSS file

function SinglePictures() {
  const singlePhotos = photos.filter((photo) => photo.category === "single");

  return (
    <div className="single-pictures">
      <h2 className="title">Single Pictures</h2>
      <div className="photo-grid">
        {singlePhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default SinglePictures;

