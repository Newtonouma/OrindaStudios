import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronDown, FiPlay, FiInstagram, FiCamera } from 'react-icons/fi';
import "./Header.css";

// Import images the ES Module way
import background1 from '../assets/images/background1.png';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';
import background4 from '../assets/images/background4.jpg';

const images = [background1, background2, background3, background4];

const Header = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % 4);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`header bg-${currentBg}`}>
      {/* Background overlay for better text contrast */}
      <div className="header-overlay"></div>
      
      {/* Main hero content */}
      <div className="hero-content">
        <div className="hero-badge">
          <FiCamera className="badge-icon" />
          <span>Professional Photography</span>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            Memories in a <span className="highlight">Snap</span>
          </h1>
          <p className="hero-subtitle">
            Photography moments captured…naturally
          </p>
          <p className="hero-description">
            Capturing life's precious moments with artistic vision and professional expertise. 
            Every shot tells a story, every frame preserves a memory.
          </p>
        </div>
        
        <div className="hero-actions">
          <button className="cta-button primary">
            <FiPlay className="button-icon" />
            View Portfolio
          </button>
          <button className="cta-button secondary">
            <FiInstagram className="button-icon" />
            Follow Journey
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Photos Captured</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
        {/* Featured work carousel */}
      <div className="featured-carousel">
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <div className="carousel-image-wrapper">
                  <img src={img} alt={`Featured work ${index + 1}`} className="carousel-image" />
                  <div className="image-overlay">
                    <FiCamera className="overlay-icon" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <div className="scroll-text">Explore More</div>
        <FiChevronDown className="scroll-arrow" />
      </div>
    </div>
  );
}

export default Header;
