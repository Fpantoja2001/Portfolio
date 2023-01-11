import { useState } from "react";
import './slider.scss'

const ImageSlider = ({slides}) => {
    const [currentIndex,setCurrentUser] = useState(0);

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
                <div className="slideComponentText">Tilt Effect</div>
                <span class="material-symbols-outlined" >arrow_forward_ios</span>
                <div className="projectDescript"></div>
            </div>
        </div>
    )
}

export default ImageSlider

// style={{backgroundImage:`url(${slides[currentIndex].url})`}}