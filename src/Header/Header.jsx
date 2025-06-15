import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCamera, FaPlay, FaArrowDown } from 'react-icons/fa';
import './Header.css';

// Import background images
import bg1 from '../assets/images/Background/background1.jpg';
import bg2 from '../assets/images/Background/background2.jpg';
import bg3 from '../assets/images/Background/background3.jpg';
import bg4 from '../assets/images/Background/background4.jpg';

// Import carousel images
import photo1 from '../assets/images/photos/1.jpg';
import photo2 from '../assets/images/photos/2.jpg';
import photo4 from '../assets/images/photos/4.jpg';
import photo5 from '../assets/images/photos/5.jpg';
import photo7 from '../assets/images/photos/7.jpg';
import photo8 from '../assets/images/photos/8.jpg';

const Header = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  const backgroundImages = [
    bg1,
    bg2, 
    bg3,
    bg4
  ];

  // Carousel images array
  const carouselImages = [
    photo1,
    photo2,
    photo4,
    photo5,
    photo7,
    photo8
  ];
  // Carousel settings
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };
  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const promises = backgroundImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });
      
      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoaded(true); // Still show component even if some images fail
      }
    };

    preloadImages();
  }, [backgroundImages]);
  // Staggered animation entrance
  useEffect(() => {
    if (isLoaded) {
      const timeouts = [
        setTimeout(() => setAnimationStage(1), 200),
        setTimeout(() => setAnimationStage(2), 500),
        setTimeout(() => setAnimationStage(3), 800),
        setTimeout(() => setAnimationStage(4), 1100),
        setTimeout(() => setAnimationStage(5), 1400),
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isLoaded]);
  // Background image rotation
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded, backgroundImages.length]);

  const handleScrollToNext = useCallback(() => {
    const nextSection = document.querySelector('.story-container, .gallery-container, .navbar + section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleViewPortfolio = useCallback(() => {
    const gallerySection = document.querySelector('.gallery-container');
    if (gallerySection) {
      gallerySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleBookSession = useCallback(() => {
    const contactSection = document.querySelector('.contact-page, .footer-container');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <header className={`orinda-header ${isLoaded ? 'loaded' : 'loading'}`}>
      {/* Background Image Layers */}
      <div className="header-backgrounds">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`bg-layer ${index === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ))}
        <div className="header-overlay" />  </div>      
        
        {/* Main Content Container */}
      <div className="header-content">        {/* Primary Heading */}
        <h1 className={`primary-heading ${animationStage >= 1 ? 'visible' : ''}`}>
          Capturing <span className="golden-text">Life's</span> Most
          <br />
          <span className="golden-text">Beautiful</span> Moments
        </h1>

        {/* Secondary Heading */}
        <h2 className={`secondary-heading ${animationStage >= 2 ? 'visible' : ''}`}>
          Professional Photography Services That Tell Your Story
        </h2>

        {/* Description Text */}
        <p className={`description-text ${animationStage >= 3 ? 'visible' : ''}`}>
          Transform your special moments into timeless memories with our expert photography services. 
          From weddings to portraits, we capture the essence of every emotion with artistic excellence.
        </p>

        {/* Call-to-Action Buttons */}
        <div className={`cta-buttons ${animationStage >= 4 ? 'visible' : ''}`}>
          <button 
            className="cta-btn primary-btn"
            onClick={handleViewPortfolio}
            type="button"
            aria-label="View our photography portfolio"
          >
            <FaPlay className="btn-icon" aria-hidden="true" />
            <span>View Portfolio</span>
          </button>
          <button 
            className="cta-btn secondary-btn"
            onClick={handleBookSession}
            type="button"
            aria-label="Book a photography session"
          >
            <FaCamera className="btn-icon" aria-hidden="true" />
            <span>Book Session</span>          </button>
        </div>        {/* Featured work carousel */}
        <div className={`featured-carousel ${animationStage >= 5 ? 'visible' : ''}`}>
          <div className="carousel-container">
            <Slider {...carouselSettings}>
              {carouselImages.map((img, index) => (
                <div key={index} className="carousel-slide">
                  <div className="carousel-image-wrapper">
                    <img src={img} alt={`Featured work ${index + 1}`} className="carousel-image" />
                    <div className="image-overlay">
                      <FaCamera className="overlay-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        className={`scroll-down-btn ${animationStage >= 5 ? 'visible' : ''}`}
        onClick={handleScrollToNext}
        type="button"
        aria-label="Scroll down to explore more content"
      >
        <span className="scroll-text">Explore More</span>
        <FaArrowDown className="scroll-arrow" aria-hidden="true" />
      </button>
    </header>
  );
};

export default Header;
