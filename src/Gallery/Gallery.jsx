'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

// Import all photos
import photo1 from '../assets/images/photos/1.jpg';
import photo2 from '../assets/images/photos/2.jpg';
import photo3 from '../assets/images/photos/3.jpg';
import photo4 from '../assets/images/photos/4.jpg';
import photo5 from '../assets/images/photos/5.jpg';
import photo6 from '../assets/images/photos/6.jpg';
import photo7 from '../assets/images/photos/7.jpg';
import photo8 from '../assets/images/photos/8.jpg';
import photo9 from '../assets/images/photos/9.jpg';
import photo10 from '../assets/images/photos/10.jpg';
import photo11 from '../assets/images/photos/11.jpg';
import photo12 from '../assets/images/photos/12.jpg';
import photo13 from '../assets/images/photos/13.jpg';
import photo14 from '../assets/images/photos/14.jpg';
import photo15 from '../assets/images/photos/15.jpg';
import photo16 from '../assets/images/photos/16.jpg';
import photo17 from '../assets/images/photos/17.jpg';
import photo18 from '../assets/images/photos/18.jpg';
import photo19 from '../assets/images/photos/19.jpg';

// Custom hooks converted to JavaScript
const useScrollAnimation = ({ threshold = 0.1, retriggerOnScroll = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (retriggerOnScroll) {
          setIsVisible(entry.isIntersecting);
        } else if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, retriggerOnScroll, isVisible]);

  return { ref, isVisible };
};

const useStaggeredAnimation = (itemCount, delay = 150, retrigger = true) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (retrigger || visibleItems.length === 0) {
            setVisibleItems([]);
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, i]);
              }, i * delay);
            }
          }
        } else if (retrigger) {
          setVisibleItems([]);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [itemCount, delay, retrigger, visibleItems.length]);

  return { ref, visibleItems };
};

// Gallery data
const galleryItems = [
  { id: 1, src: photo1, alt: 'Professional Portrait', title: 'Elegant Portrait', description: 'Capturing natural beauty and personality' },
  { id: 2, src: photo2, alt: 'Event Photography', title: 'Special Moments', description: 'Preserving your most important events' },
  { id: 3, src: photo3, alt: 'Wedding Photography', title: 'Wedding Bliss', description: 'Your perfect day, perfectly captured' },
  { id: 4, src: photo4, alt: 'Family Portrait', title: 'Family Memories', description: 'Creating lasting family treasures' },
  { id: 5, src: photo5, alt: 'Commercial Photography', title: 'Professional Work', description: 'High-quality commercial photography' },
  { id: 6, src: photo6, alt: 'Artistic Portrait', title: 'Creative Vision', description: 'Artistic and creative photography' },
  { id: 7, src: photo7, alt: 'Lifestyle Photography', title: 'Life in Motion', description: 'Capturing authentic lifestyle moments' },
  { id: 8, src: photo8, alt: 'Nature Photography', title: 'Natural Beauty', description: 'The beauty of the natural world' },
  { id: 9, src: photo9, alt: 'Urban Photography', title: 'City Life', description: 'Urban landscapes and city vibes' },
  { id: 10, src: photo10, alt: 'Studio Photography', title: 'Studio Perfection', description: 'Controlled studio environments' },
  { id: 11, src: photo11, alt: 'Outdoor Photography', title: 'Outdoor Adventures', description: 'Beautiful outdoor photography' },
  { id: 12, src: photo12, alt: 'Fashion Photography', title: 'Fashion Forward', description: 'Stylish fashion photography' },
  { id: 13, src: photo13, alt: 'Corporate Photography', title: 'Professional Image', description: 'Corporate and business photography' },
  { id: 14, src: photo14, alt: 'Creative Photography', title: 'Creative Expression', description: 'Unique and creative photography' },
  { id: 15, src: photo15, alt: 'Documentary Photography', title: 'Real Stories', description: 'Authentic documentary style' },
  { id: 16, src: photo16, alt: 'Fine Art Photography', title: 'Artistic Vision', description: 'Fine art photography' },
  { id: 17, src: photo17, alt: 'Street Photography', title: 'Street Life', description: 'Candid street photography' },
  { id: 18, src: photo18, alt: 'Travel Photography', title: 'Travel Memories', description: 'Beautiful travel photography' },
  { id: 19, src: photo19, alt: 'Architectural Photography', title: 'Architecture', description: 'Stunning architectural photography' }
];

const HomeGalleryPreview = () => {
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  
  // Calculate items for 2 rows - assuming average 4-5 items per row on desktop
  const maxItemsToShow = 8;
  const limitedItems = galleryItems.slice(0, maxItemsToShow);
  
  // Scroll animations
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1, retriggerOnScroll: true });
  const { ref: galleryRef, visibleItems } = useStaggeredAnimation(limitedItems.length, 150, true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <main className="main">
          <header className="gallery-header">
            <h1>Photo Gallery</h1>
            <p className="subtitle">Loading our gallery...</p>
          </header>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500"></div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <main className="main">
          <header className="gallery-header">
            <h1>Photo Gallery</h1>
            <p className="subtitle">Error loading gallery: {error}</p>
          </header>
        </main>
      </div>
    );
  }

  return (
    <div className={`app-container ${isVisible ? 'animated' : ''}`} ref={containerRef}>     
     <main className={`main ${isVisible ? 'main-animated' : ''}`}>
        <header className={`gallery-header ${isVisible ? 'header-animated' : ''}`}>
          <h1>The Visual Story</h1>
          </header>

        <div className={`gallery gallery-preview ${isVisible ? 'gallery-animated' : ''}`} ref={galleryRef}>
          {limitedItems.map((item, index) => (
            <figure 
              key={item.id} 
              className={`gallery-item ${visibleItems.includes(index) ? 'item-animated' : ''}`}
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
              />
              <figcaption className="image-caption">
                <h3 className="caption-title">{item.title}</h3>
                <p className="caption-description">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* View More Button */}
        {galleryItems.length > maxItemsToShow && (
          <div className={`view-more-container ${isVisible ? 'view-more-animated' : ''}`}>
            <Link to="/gallery" className="view-more-btn">
              <span>View All Gallery</span>
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="view-more-text">
              Showing {limitedItems.length} of {galleryItems.length} images
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeGalleryPreview;