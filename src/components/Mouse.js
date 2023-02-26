import { useEffect, useRef } from 'react';
import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
import Banner from './Banner';

function Mouse() {
  const appRef = useRef(null);
  const pcRef = useRef(null);

  useEffect(() => {
    if (appRef.current && !pcRef.current) {
      const pc = particlesCursor({
        el: appRef.current,
        gpgpuSize: 512,
        colors: [0x00ff00, 0x0000ff],
        color: 0xff0000,
        coordScale: 0.5,
        noiseIntensity: 0.001,
        noiseTimeCoef: 0.0001,
        pointSize: 5,
        pointDecay: 0.0025,
        sleepRadiusX: 250,
        sleepRadiusY: 250,
        sleepTimeCoefX: 0.001,
        sleepTimeCoefY: 0.002,
        mouseTracking: true
    });
  
      pcRef.current = pc;
  
      function handleClick() {
        pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
        pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
        pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
        pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
      }
  
      document.body.addEventListener('click', handleClick);
  
      return () => {
        document.body.removeEventListener('click', handleClick);
        if (pcRef.current) {
        //   pcRef.current.dispose();
        }
      };
    }
  }, [pcRef.current]);
  

  return (
    <div id="mouse-cursor" ref={appRef}>
<div id="app">
  <div id="hero">
    <h1>PARTICLES<br/>CURSOR</h1>
    <a target="_blank" href="https://github.com/klevron/threejs-toys">github/threejs-toys</a>
  </div>
</div>


    </div>
  );
}

export default Mouse;

// CSS
