import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Header.css";

// Import images the ES Module way
import background1 from '../assets/images/background1.png';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';
import background4 from '../assets/images/background4.jpg';

const images = [background1, background2, background3, background4];

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [ // Breakpoints for responsiveness
      {
        breakpoint: 1024, // Max-width: 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600, // Max-width: 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='header'>    
      <div className='header-title'>
        <h1>Memories in a Snap</h1>
        <h2>Photography moments captured…naturally</h2>
      </div>
      
      <div className='carousel'>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Header;
