import React, { useState, useEffect } from 'react';


const MovingCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const moveCircle = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const circleWidth = 100;
      const circleHeight = 100;

      if (position.x + circleWidth >= windowWidth) {
        setDirection(prev => ({ ...prev, x: -1 }));
      } else if (position.x <= 0) {
        setDirection(prev => ({ ...prev, x: 1 }));
      }

      if (position.y + circleHeight >= windowHeight) {
        setDirection(prev => ({ ...prev, y: -1 }));
      } else if (position.y <= 0) {
        setDirection(prev => ({ ...prev, y: 1 }));
      }

      setPosition(prev => ({
        x: prev.x + direction.x,
        y: prev.y + direction.y,
      }));
    };

    const intervalId = setInterval(moveCircle, 10);

    return () => clearInterval(intervalId);
  }, [position, direction]);

  return (
    <div
      className="circle"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <span className="circle-text">The beauty of biased bodies</span>
    </div>
  );
};

export default MovingCircle;
