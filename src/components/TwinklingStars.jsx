// TwinklingStars.jsx
import React from 'react';
import './TwinklingStars.css';

const TwinklingStars = () => {
  const getRandomDelay = () => Math.random() * 15;
  const getRandomPosition = () => Math.random();

  const stars = Array.from({ length: 80 }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        animationDelay: `${getRandomDelay()}s`,
        '--random-x': getRandomPosition(),
        '--random-y': getRandomPosition()*0.5,
      }}
    ></div>
  ));
  return <div className="twinkling-starsa">{stars}</div>;
};
export default TwinklingStars;
