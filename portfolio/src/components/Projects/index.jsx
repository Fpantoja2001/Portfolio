import './main.scss'

function Projects() {
    const slides = ['Speed Typing Online', 'DNA Profiler', 'Document Search Engine']
    function placeHolder() {
        document.getElementById("projectContainer").style.color = "#fff";
    }
    return (
        <div className='page'>
            <div className='projectContainer' onScroll={placeHolder}>
                <div className='projectDisplay'>
                    <div className='projectVideoContainer'>

                    </div>
                </div>
                <div className='projectInformation'>
                    <div className='projectTitle'></div>
                    <div className='projectRole'></div>
                    <div className='projectDescriptionContent'></div>
                    <div className='leadingButtons'>
                        <div className='nextProjectButton'></div>
                        <div className='demoProjectButton'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects