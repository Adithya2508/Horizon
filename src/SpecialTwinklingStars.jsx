import React, { useEffect } from 'react';
import './index.css';

const createStars = () => {
  const starsContainer = document.querySelector('.special-twinkling-stars');
  const numStars = 100; // Adjust number of stars as needed

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    starsContainer.appendChild(star);
  }
};

const SpecialTwinklingStars = () => {
  useEffect(() => {
    createStars();
  }, []);

  return <div className="special-twinkling-stars" />;
};

export default SpecialTwinklingStars;
