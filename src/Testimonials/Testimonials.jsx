import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../assets/Data/testimonials";
import "./Testimonials.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={`${testimonial.name} - ${testimonial.role}`} 
              className="testimonial-img"
              loading="lazy"
            />
            <p className="testimonial-message">
              {testimonial.message}
            </p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-role">{testimonial.role}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
