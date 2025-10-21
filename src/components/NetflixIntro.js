import React, { useEffect, useState } from "react";
import "./NetflixIntro.css";

function NetflixIntro({ onComplete }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Step 1: Show the text with letter animation (zooming from far)
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    
    // Step 2: Zoom in effect (like Netflix ta-dum!)
    const timer2 = setTimeout(() => setAnimationStep(2), 3500);
    
    // Step 3: Complete and hide
    const timer3 = setTimeout(() => {
      setAnimationStep(3);
      setTimeout(onComplete, 300);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`netflix-intro ${animationStep >= 3 ? "fade-out" : ""}`}>
      <div className="netflix-background">
        <div className={`netflix-text-container ${animationStep >= 1 ? "show" : ""} ${animationStep >= 2 ? "zoom" : ""}`}>
          <h1 className="netflix-text">
            <span className="letter">N</span>
            <span className="letter">E</span>
            <span className="letter">E</span>
            <span className="letter">L</span>
            <span className="letter">I</span>
            <span className="letter">M</span>
            <span className="letter">A</span>
            <span className="space"> </span>
            <span className="letter">S</span>
            <span className="letter">I</span>
            <span className="letter">N</span>
            <span className="letter">G</span>
            <span className="letter">H</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NetflixIntro;
