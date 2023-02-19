import { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';

const Particles = () => {
  const numParticles = 25;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const particles = [...Array(numParticles).keys()].map(i => ({
    id: i,
    x: mousePos.x,
    y: mousePos.y,
    color: "#74dbef",
  }));

  const config = { mass: 10, tension: 800, friction: 100 };

  const trail = useTrail(numParticles, {
    from: { x: mousePos.x, y: mousePos.y },
    to: { x: mousePos.x, y: mousePos.y },
    config,
  });

  useEffect(() => {
    const updateMousePos = e => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      setMousePos({ x, y });
      trail.start({
        from: { x, y },
        to: { x, y },
        config,
      });
    };

    window.addEventListener('mousemove', updateMousePos);

    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);

  return (
    <div style={{ position: 'absolute' }}>
      {trail.map((props, index) => (
        <animated.div
          key={particles[index].id}
          style={{
            position: 'absolute',
            left: props.x,
            top: props.y,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: particles[index].color,
            opacity: 0.8,
            boxShadow: `0px 0px 10px ${particles[index].color}`,

          }}
        />
      ))}
    </div>
  );
};

export default Particles;
