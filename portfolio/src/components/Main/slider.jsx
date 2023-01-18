import { useState } from "react";
import './slider.scss'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projectTitles = ['STO', 'DNA-P', 'DSE']
    const projectDescriptTitles = ['Speed Typing Online', 'DNA Profiler', 'Document Search Engine']
    const projectDescriptionParagraph = [
        'Website with multiple user oriented features intended to help the user improve their typing speed.',
        'Database that returns the person to whom a DNA sequence belongs to upon query.',
        'Online article parser that applies unique identifiers to each article and allows user to search them up using the indetifiers.'
    ]

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
                <div className="slideComponentText">{projectTitles[currentIndex]}</div>
                <div className='learnMoreText'>Click <span>here</span> to learn more about <span>{projectDescriptTitles[currentIndex]}.</span></div>
                <span class="material-symbols-outlined" id='frontArrow' onClick={nextFunction}>chevron_right</span>
                <span class="material-symbols-outlined" id='backArrow' onClick={backFunction}>chevron_left</span>
                <div className="projectDescript">
                    <h1>{projectDescriptTitles[currentIndex]}</h1>
                    <p>{projectDescriptionParagraph[currentIndex]}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider

// style={{backgroundImage:`url(${slides[currentIndex].url})`}}
// hello