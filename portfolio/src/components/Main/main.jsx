import './main.scss'
import React from 'react'
import ImageSlider from './slider'

function Main(){
    const slides = [
        {url:"https://upload.wikimedia.org/wikipedia/commons/e/e5/Redsquare.png"},
        {url:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
        {url:"https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]
    return (
        <div className='mainContainer'>
                <ImageSlider slides={slides}/>
        </div>
        
    )
}

export default Main;