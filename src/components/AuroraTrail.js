import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import Particles from './Particles';

const AuroraTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth > 768);
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const onMouseMove = e => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const onTouchMove = e => {
    if (e.touches.length > 0) {
      setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {isDesktop && mousePos && <Particles mousePos={mousePos} />}
    </div>
  );
};

export default AuroraTrail;
