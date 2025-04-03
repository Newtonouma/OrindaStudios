import React, { useEffect, useState } from 'react';
import './TextCarousel.css'; // Import your CSS file for styling

const ElegantTextCarousel = () => {
  const photographyPhrases = [
    "Capture the moment",
    "Timeless elegance",
    "Urban perspectives",
    "Natural beauty",
    "Frozen emotions",
    "Light and shadow",
    "Authentic stories",
    "Art in motion",
    "Silent narratives",
    "Ephemeral beauty"
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition(prev => (prev - 0.25) % -100); // Slower, elegant pace
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elegant-carousel">
      <div 
        className="elegant-track"
        style={{ transform: `translateX(${currentPosition}%)` }}
      >
        {photographyPhrases.map((phrase, index) => (
          <div key={index} className="phrase-container">
            <span className="elegant-phrase">{phrase}</span>
            
          </div>
        ))}
        {/* Mirrored set for seamless looping */}
        {photographyPhrases.map((phrase, index) => (
          <div key={`m-${index}`} className="phrase-container">
            <span className="elegant-phrase">{phrase}</span>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElegantTextCarousel;