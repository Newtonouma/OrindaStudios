import React, { useEffect, useRef } from "react";
import photos from "../assets/Data/photos";
import "./Gallery.css";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function PhotoGallery() {
  const gridRef = useRef(null);
  const masonryRef = useRef(null);

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
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="photo-grid" ref={gridRef}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ photo }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

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
      // Run immediately if image already loaded
      if (imgRef.current.complete) {
        updateHeight();
      }
    }
  }, []);

  return (
    <div className="photo-card" ref={cardRef}>
      <img 
        src={photo.image} 
        alt={photo.title} 
        className="photo-img" 
        ref={imgRef}
        loading="lazy" 
      />
    </div>
  );
}

export default PhotoGallery;