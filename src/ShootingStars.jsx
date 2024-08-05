import React from 'react';
import './ShootingStars.css';

const getRandomPosition = (existingPositions) => {
  let position;
  do {
    position = {
      top: `${Math.random() * 25}vh`, // Top position within the top 30% of the screen
      left: `${Math.random() * 40}vw`, 
      animationDelay: `${Math.random() * 10}s`, // Random delay from 0 to 10 seconds
      animationDuration: `${Math.random() * (150 - 75) + 75}s`, // Random duration between 100s to 150s
    };
  } while (existingPositions.some(existingPosition => Math.abs(existingPosition.top - parseFloat(position.top)) < 10));

  return position;
};

const ShootingStars = () => {
  const numStars = 4;
  const existingPositions = [];
  
  const stars = Array.from({ length: numStars }, (_, index) => {
    const position = getRandomPosition(existingPositions);
    existingPositions.push(position);

    return (
      <div
        key={index}
        className="shooting-star"
        style={{
          top: position.top,
          left: position.left,
          animationDelay: position.animationDelay,
          animationDuration: position.animationDuration,
        }}
      />
    );
  });

  return <div className="shooting-stars">{stars}</div>;
};

export default ShootingStars;
