import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import Particles from './Particles';

const AuroraTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = e => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ width: '100%', height: '100%' }} onMouseMove={onMouseMove}>
      {mousePos && <Particles mousePos={mousePos} />}
    </div>
  );
};

export default AuroraTrail;
