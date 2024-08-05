import '../about.css'
import aboutpic from '../assets/about.jpg'
export default function About(){
    return (
        <>
            <div className="box">
            <div className="about1">
            <div className="atext">ABOUT US</div>
                <div className='horizon-image'>
                    <img src={aboutpic} alt="Horizon Team" />
                    <div className='about-text'>
                    With a zeal for exploration, Team Horizon comprises 56 interdisciplinary undergraduate students from Cochin University of Science and Technology (CUSAT). In 2024, we achieved our highest-ever ranking: 1st place in India and 11th globally at the European Rover Challenge 2024. 

At Team Horizon, we foster the culture of critical thinking, hands-on learning, and empower our members to tackle real-world challenges with cutting-edge solutions. Our growth from humble roots to reaching the height of AIR-1 has been nurtured by hard work and determination.

Our mission is to harness the power of robotics to inspire and innovate future generations, making a lasting impact at CUSAT and beyond.
                    </div>
                </div>
                <div className='world-achivement'>
                    <div className='world-achivement-box'>
                        <h1>19</h1>
                        <p>World Rank Representing India<br/>European Rover Challenge 23</p>
                    </div>
                    <div className='world-achivement-box middle'>
                        <h1>#1</h1>
                        <p>Only Team from<br/>South India for ERC 23</p>
                    </div>
                    <div className='world-achivement-box end'>
                        <h1>#2</h1>
                        <p>Second rank in India<br/>ERC’23 World Finals</p>
                    </div>
                    
                </div>
            </div>      
        </div>
        </>
    );
}