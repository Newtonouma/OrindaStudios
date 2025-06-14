import React, { useEffect, useRef, useState } from "react";
import photos from "../assets/Data/photos";
import "./Gallery.css";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const gridRef = useRef(null);
  const masonryRef = useRef(null);

  // Category options with better labels
  const categories = [
    { id: 'all', label: 'All', count: photos.length },
    { id: 'wedding', label: 'Wedding', count: photos.filter(p => p.category === 'wedding').length },
    { id: 'portrait', label: 'Portrait', count: photos.filter(p => p.category === 'portrait').length },
    { id: 'landscape', label: 'Landscape', count: photos.filter(p => p.category === 'landscape').length }
  ];

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Handle category change with loading state
  const handleCategoryChange = (categoryId) => {
    if (categoryId === selectedCategory) return;
    
    setIsLoading(true);
    setSelectedCategory(categoryId);
    
    // Simulate loading delay for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

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
    <section className="gallery-container" role="main" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="gallery-title">Gallery</h2>

      {/* Category Filter Buttons */}
      <div className="category-buttons" role="tablist" aria-label="Photo categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={selectedCategory === category.id ? 'active' : ''}
            role="tab"
            aria-selected={selectedCategory === category.id}
            aria-controls="photo-grid"
          >
            {category.label}
          </button>
        ))}
      </div>

      <div 
        id="photo-grid"
        className={`photo-grid ${isLoading ? 'loading' : ''}`} 
        ref={gridRef}
        role="tabpanel"
        aria-labelledby="gallery-title"
      >
        {filteredPhotos.map((photo, index) => (
          <PhotoCard key={`${photo.id}-${selectedCategory}`} photo={photo} index={index} />
        ))}
      </div>
    </section>
  );
}

function PhotoCard({ photo, index }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
        setIsLoaded(true);
      };
      
      imgRef.current.onload = updateHeight;
      if (imgRef.current.complete) {
        updateHeight();
      }
    }
  }, []);

  const handleCardClick = () => {
    setClicked(!clicked);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div 
      className={`photo-card ${isLoaded ? 'loaded' : ''}`} 
      ref={cardRef}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`View ${photo.title}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img 
        src={clicked ? photo.alternateImage || photo.image : photo.image}
        alt={photo.title} 
        className="photo-img" 
        ref={imgRef}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />      
    </div>
  );
}

export default PhotoGallery;
