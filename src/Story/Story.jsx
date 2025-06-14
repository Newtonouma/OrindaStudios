import React from "react";
import "./Story.css";

function Story() {
  return (
    <section className="story-container" role="main" aria-labelledby="story-title">
      <h2 id="story-title" className="story-title">
        CAPTURING MOMENTS, TELLING STORIES
      </h2>
      <div className="story-content">
        <p className="story-text story-text-1">
          At Iconic Lenses, photography is more than just taking pictures—it's about capturing emotions, preserving memories, and telling stories through the lens. Every image we create reflects the beauty, depth, and essence of life's most precious moments.
        </p>
        <p className="story-text story-text-2">
          Whether it's a breathtaking landscape, a heartfelt portrait, or a once-in-a-lifetime event, we aim to create visual masterpieces that resonate. Our passion for photography drives us to deliver stunning, high-quality images that speak volumes.
        </p>
      </div>
    </section>
  );
}

export default Story;

