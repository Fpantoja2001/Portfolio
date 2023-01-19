import './main.scss'
import { useState } from "react";

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const projectTitles = ['STO', 'DNA-P', 'DSE']
    /* const projectDescriptTitles = ['Speed Typing Online', 'DNA Profiler', 'Document Search Engine']
    const projectDescriptionParagraph = [
        'Website with multiple user oriented features intended to help the user improve their typing speed.',
        'Database that returns the person to whom a DNA sequence belongs to upon query.',
        'Online article parser that applies unique identifiers to each article and allows user to search them up using the indetifiers.'
    ]
    */

    const backFunction = () => {
        const isFirstSlide = currentIndex == 0;
        const newIndex = isFirstSlide ? projectTitles.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

    }

    const nextFunction = () => {
        const isLastSlide = currentIndex == projectTitles.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className='page'>
            <div className='projectContainer'>
                <div className='projectDisplay'>
                    <div className='projectVideoContainer'>

                    </div>
                </div>
                <div className='projectInformation'>
                    <div className='projectTitle'>{projectTitles[currentIndex]}</div>
                    <div className='projectRole'></div>
                    <div className='projectDescriptionContent'></div>
                    <div className='leadingButtons'>
                        <div className='nextProjectButton' onClick={backFunction}></div>
                        <div className='demoProjectButton' onClick={nextFunction}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects