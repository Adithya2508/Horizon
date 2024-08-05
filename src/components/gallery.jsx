import GalleryCard from "./gallerycard.jsx";
import './gallerycard.css'
import image1 from '../assets/gal1.png'
import image2 from '../assets/gal2.png'
import image3 from '../assets/gal3.png'
import image4 from '../assets/gal4.png'
import { LuArrowRight } from "react-icons/lu";

export default function Gallery(){
    return (
        <>
            <div className="gallery">
                <GalleryCard image={image1} heading="Team Horizon" date="July 10, 2024" hashtag='#team'/>
                <GalleryCard image={image2} heading="Team Horizon" date="July 10, 2024" hashtag='#team'/>
                <GalleryCard image={image3} heading="Team Horizon" date="July 10, 2024" hashtag='#team'/>
                <GalleryCard image={image4} heading="Team Horizon" date="July 10, 2024" hashtag='#team'/>
            </div>
            <div className="viewmore">
                <h2>View more in Gallery</h2>
                <LuArrowRight size={25} color="white"/>
                
            </div>
        </>
    );
}