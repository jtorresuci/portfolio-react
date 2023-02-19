import React, { useState, useEffect } from 'react';
import './MatrixAnimation.css';

const MatrixAnimation = () => {
  const [characters, setCharacters] = useState([]);

  // Generate a random sequence of letters and numbers to display
  const generateCharacters = () => {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charArray = charSet.split('');
    const result = [];

    for (let i = 0; i < 50; i++) {
      const randIndex = Math.floor(Math.random() * charArray.length);
      const char = charArray[randIndex];
      result.push(char);
    }
    console.log(result)
    setCharacters(result);
  };

  useEffect(() => {
    generateCharacters();
  }, []);

  return (
    <div className="matrix-animation">
      {characters.map((char, index) => (
        <span key={index} className="matrix-character">
          {char}
        </span>
      ))}
    </div>
  );
};

export default MatrixAnimation;
