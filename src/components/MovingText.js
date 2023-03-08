import React, { useEffect, useRef } from 'react';

function MovingText() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    let x = 0;
    let y = 0;
    let dx = 5;
    let dy = 5;
    const radius = 150;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const interval = setInterval(() => {
      x += dx;
      y += dy;
      if (x + radius > window.innerWidth || x - radius < 0) {
        dx = -dx;
      }
      if (y + radius > window.innerHeight || y - radius < 0) {
        dy = -dy;
      }
      text.style.left = `${centerX + x}px`;
      text.style.top = `${centerY + y}px`;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const style = {
    position: 'fixed',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    zIndex: '999',
  };

  return (
    <div className="moving-text" style={style} ref={textRef}>
      <span>Rotierender Text</span>
    </div>
  );
}

export default MovingText;