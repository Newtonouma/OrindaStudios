import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../assets/Data/testimonials";
import "./Testimonials.css";

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <p className="testimonial-message">"{testimonial.message}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-role">{testimonial.role}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
