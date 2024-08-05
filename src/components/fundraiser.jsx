import './fundraiser.css'
import fundpic from '../assets/fund.png'
import React, { useState, useEffect, useRef } from 'react';


const ProgressBar = ({ value, max }) => {
    const [isVisible, setIsVisible] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(progressRef.current);
                }
            },
            { threshold: 0.1 } // Adjust as needed
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar-container" ref={progressRef}>
            <div
                className="progress-bar"
                style={{ width: isVisible ? `${percentage}%` : '0%' }}
            ></div>
        </div>
    );
};


export default function Fundraiser(){
    const currentValue = 2000;
    return (
        <>
         <div className="box">
            <div className="fund1">
                <div className="atext">FUNDRAISER</div>
                <div className="fund-image">
                    <img src={fundpic} alt="horizonpic" />
                    <div className="fundtext">
                    A group of 26 members of our team is gearing up to represent India at ERC 24 in Krakow, Poland. To ensure our brightest minds can participate, we're providing financial support to key team members. However, we need your help to bridge the funding gap. With a target of 6 lakh rupees, including 2 lakh for our rover, we aim to make India proud on the global stage. Your contribution will fuel our journey to explore new frontiers.
                    </div>
                </div>
                <div><button className="view-campaign-button">View Campaign</button></div>
                <div className="raised">$200 raised</div>
                <div className="progress"> <ProgressBar value={currentValue} max={8000} /></div>
                <div className="target">Target: $800000</div>
                <div className='butt'><button className="contribute">Contribute</button><button className="share">Share</button></div>
            </div>
         </div>
        </>
    )
}