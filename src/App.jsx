// App.jsx
import { useState } from 'react';
import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import TwinklingStars from './components/TwinklingStars';
import SpecialTwinklingStars from './SpecialTwinklingStars';
import ShootingStars from './ShootingStars';
import Achivement from './components/achivements';
import About from './components/about';
import Fundraiser from './components/fundraiser';
import Rover from './components/rover';
import Sponser from './components/sponser';
import Socials from './components/socials';
import Footer from './components/footer';
import Gallery from './components/gallery.jsx';

const generateStars = (container) => {
  const numStars = 50; // Adjust number of stars as needed
  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      const randomDelay = Math.random() * 10; // Random delay between 0 and 2 seconds
      star.style.animationDelay = `${randomDelay}s`;
      container.appendChild(star);
  }
};

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const starsContainer = document.querySelector('.stars-container');
    const hideDiv = document.querySelector('#hide-div'); // Replace with your specific div ID

    const handleScroll = () => {
        const rect = hideDiv.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if the div is in the viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
            // Div is in the viewport
            starsContainer.style.display = 'none';
        } else {
            // Div is out of the viewport
            starsContainer.style.display = 'block';
            if (!starsContainer.hasChildNodes()) {
                generateStars(starsContainer);
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="App">
      <div id="hide-div">
      <div className="background-container">
        <ShootingStars />
        <TwinklingStars />
        <Navbar />
      </div>
      </div>
      <div className="content-container">
        <About />
        <div className="box">
        <SpecialTwinklingStars />
        
          <Achivement />
          
        </div>
        <div className="box">
          <Rover />
          <div className="stars-container"></div>
        </div>
        <div className="box">
          <Fundraiser />
        </div>
        <div className="box">
          <Sponser />
        </div>
        <div className="box">
          <Gallery />
        </div>
        <div className="box">
          <Socials />
        </div>
        <div className="box">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
