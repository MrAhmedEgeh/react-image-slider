import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft,  faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Slider.css'
const Slider = ({currentImg, setCurrentImg, images}) => {
    // states
    const [animate, SetAnimate] = useState(true); // FOR ANIMATING THE MIDDLE IMAGE TRANSITION (ADDING A CSS CLASS)
    // GLOBALS
    const currentIndex = images.findIndex((image) => image.id === currentImg.id); //CURRENT IMAGE INDEX, FOR SWITCHING IMAGE

    useEffect(() => {
       SetAnimate(!animate);
    }, [currentImg]);
    // SET IMAGE BY CLICKING ON ARROWS
    const ImageSliderHandler = (direction) =>{
        if(direction === 'goRight'){
            setCurrentImg(images[(currentIndex +  1) % images.length]);
            SetAnimate(!animate);
        }else if(direction === 'goLeft'){
            if((currentIndex - 1) % images.length === -1){
                setCurrentImg(images[images.length - 1]);
                SetAnimate(!animate);
                return;
            }
            setCurrentImg(images[(currentIndex -  1) % images.length]);
            SetAnimate(!animate);
        }
    }
    // SET IMAGE BY CLICKING ON SPAN
    const SetImageHandler = (e) => {
        setCurrentImg(images[e.target.id]);
    }
    const GetPreviousImage = () => {
        if((currentIndex - 1) % images.length === -1){
            return images[images.length - 1].image;
        }else{
            return images[(currentIndex -  1) % images.length].image;
        }
    }
    const GetNextImage = () => {
        return images[(currentIndex +  1) % images.length].image;
    }

    return (
        
        <div className="slider-container">
            <div className="leftimage">
                <img  src={GetPreviousImage()} alt='' onClick={() => ImageSliderHandler('goLeft')}/>
            </div>
            <div className={`image-container ${animate ? ' transition': ''}`}>
                <img src={currentImg.image} alt={currentImg.alt} />
                <h4>{currentImg.alt}</h4>
            </div>
    
            <div className="rightimage">
                <img  src={GetNextImage()} alt='' onClick={() => ImageSliderHandler('goRight')}/>
            </div>
            <div className="spans">
            {images.map((img, i) => (
                <span onClick={SetImageHandler} id={i} key={img.id} className={`indicator ${currentImg.id === img.id ? 'active' : ''}`}></span>
            ))}
            </div>
            <FontAwesomeIcon onClick={() => ImageSliderHandler('goRight')} className="play goRight" icon={faArrowCircleRight}/>
            <FontAwesomeIcon onClick={() => ImageSliderHandler('goLeft')} className="play goLeft" icon={faArrowCircleLeft}/>
        </div>

    );
}

export default Slider;