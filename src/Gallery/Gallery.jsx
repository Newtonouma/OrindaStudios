import React, { useEffect, useRef, useState } from "react";
import photos from "../assets/Data/photos";
import "./Gallery.css";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' means show all categories
  const gridRef = useRef(null);
  const masonryRef = useRef(null);

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  useEffect(() => {
    if (gridRef.current) {
      // Initialize Masonry after images are loaded
      const imgLoad = imagesLoaded(gridRef.current);

      imgLoad.on('done', () => {
        masonryRef.current = new Masonry(gridRef.current, {
          itemSelector: '.photo-card',
          columnWidth: '.photo-card',
          percentPosition: true,
          gutter: 10
        });
      });

      return () => {
        if (masonryRef.current) {
          masonryRef.current.destroy();
        }
      };
    }
  }, [filteredPhotos]); // Re-run the effect when filteredPhotos change

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      {/* Category Filter Buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('wedding')}>Wedding</button>
        <button onClick={() => setSelectedCategory('portrait')}>Portrait</button>
        <button onClick={() => setSelectedCategory('landscape')}>Landscape</button>
      </div>

      <div className="photo-grid" ref={gridRef}>
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ photo }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (imgRef.current) {
      const updateHeight = () => {
        if (cardRef.current) {
          cardRef.current.style.setProperty(
            "--photo-img-height", 
            `${imgRef.current.clientHeight}px`
          );
        }
      };
      imgRef.current.onload = updateHeight;
      if (imgRef.current.complete) {
        updateHeight();
      }
    }
  }, []);

 
  return (
    <div className="photo-card" ref={cardRef}>
      <img 
        src={clicked ? photo.alternateImage : photo.image} // Conditional image source
        alt={photo.title} 
        className="photo-img" 
        ref={imgRef}
        loading="lazy" 
      />      
    </div>
  );
}

export default PhotoGallery;
