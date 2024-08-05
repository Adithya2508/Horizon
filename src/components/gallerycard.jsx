import './gallerycard.css'
import Proptypes from 'prop-types'
export default function GalleryCard({image,heading,date,hashtag}){
    return(
        <div className="gallerycard">
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <div className='card-text'>
                <div className='text1'>
                    <h2 className='heading'>{heading}</h2>
                    <h2 className='date'>{date}</h2>
                </div>
                <div className='hashtag'>
                    <h2>{hashtag}</h2>
                </div>
            </div>
        </div>
    );
}
GalleryCard.propTypes = {
    image : Proptypes.string.isRequired,
    heading : Proptypes.string.isRequired,
    date : Proptypes.string.isRequired,
    hashtag : Proptypes.string.isRequired,
}