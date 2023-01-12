import { useState } from "react";
import './slider.scss'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const backFunction = () => {
        const isFirstSlide = currentIndex == 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextFunction = () => {
        const isLastSlide = currentIndex == slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="slideContainer">
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            <span className="s_over"></span>
            
      
            <div className='slideComponent'>
                <img style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></img>
                <div className="slideComponentText">Tilt Effect</div>
                <div className='learnMoreText'>Click <span>here</span> to learn more about Stype</div>
                <span class="material-symbols-outlined" id='frontArrow' onClick={nextFunction}>arrow_forward_ios</span>
                <span class="material-symbols-outlined" id='backArrow' onClick={backFunction}>arrow_back_ios</span>
                <div className="projectDescript">
                    <h1>Projet title</h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider

// style={{backgroundImage:`url(${slides[currentIndex].url})`}}
// hello