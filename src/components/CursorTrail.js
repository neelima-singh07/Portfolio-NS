import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

function CursorTrail() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setTrail((prevTrail) => {
        const updatedTrail = [...prevTrail, newTrail];
        // Keep only last 10 trail points
        if (updatedTrail.length > 10) {
          updatedTrail.shift();
        }
        return updatedTrail;
      });

      // Remove trail point after animation
      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.filter((t) => t.id !== newTrail.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail-dot"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - index * 0.1,
            transform: `scale(${1 - index * 0.1})`,
          }}
        />
      ))}
    </div>
  );
}

export default CursorTrail;
