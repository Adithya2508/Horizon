// src/components/Rover.jsx
import React from 'react';
import Slider from 'react-slick';
import '../rover.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import roverimage1 from '../assets/rover1.png';
import roverimage2 from '../assets/rover1.png';
import roverimage3 from '../assets/rover1.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <i className='bx bx-right-arrow'></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <i className='bx bx-left-arrow'></i>
        </div>
    );
}

export default function Rover() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <div className="atext">ROVER</div>
            <div className="rover-carousel-container">
                <Slider {...settings}>
                    <div className="rover-image-container">
                        <img src={roverimage1} alt="RoverImage1" className="rover-image" />
                        <div className="hover-text"><h2>Pheonix Mars Rover</h2><br /><strong>Name</strong>: Pheonix Mars Rover<br /><strong>Year</strong>:2023<br /><strong>Competitions participated</strong>: ERC 2023<br /><strong>Innovative factors</strong>:Custom wheel fork,cycloidal gearbox,weight reduction through aluminium construction<br /><strong>Result</strong>:rank 19th globally and rank 3 in India</div>
                    </div>
                    <div className="rover-image-container">
                        <img src={roverimage2} alt="RoverImage2" className="rover-image" />
                        <div className="hover-text">Description for Rover Image 2</div>
                    </div>
                    <div className="rover-image-container">
                        <img src={roverimage3} alt="RoverImage3" className="rover-image" />
                        <div className="hover-text">Description for Rover Image 3</div>
                    </div>
                </Slider>
                <div className="swipe-indicator">Swipe to see more >></div>
            </div>
        </>
    );
}
