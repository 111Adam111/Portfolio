import React, {useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";




const ScreenshotSlider = ({ screenshot }) => {
    const [current, setCurrent] = useState(0)
    const length = screenshot.length
    // console.log()
   
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }


    return (   
        <div className='screenshots'>
            <div className="arrow-box">
            <FaArrowAltCircleLeft className='arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='arrow' onClick={nextSlide} />
            </div>
            {screenshot.map((images, index) => {
                return (
                    <div key={index}>
                    {index === current && <img src={images.image} alt='' />}
                        
                    </div>
                )
                })}
            
        </div>
    )
}

export default ScreenshotSlider