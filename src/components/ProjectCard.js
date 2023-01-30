import React, { useState } from 'react'
import Button from './Button'
import ScreenshotSlider from './ScreenshotSlider'

const ProjectCard = ({title, desc, screenshots, callToAction, url, filesUrl}) => {
  let [page, setCard] = useState('desc') 
  let sSClick = () => setCard('screenshoot')
  let descClick = () => setCard('desc')

  let click = () => window.location.href=(url)
  let filesClick = () => window.location.href=(filesUrl)
  
  return (
    <div className='card'>
        <p className='card-title'>{title}</p>
        {title !== 'portfolio' ?
          <div className="switch-bar">
            <Button style={'transparent-btn'} onclick={descClick} text='desc'></Button>
            <Button style={'transparent-btn'} onclick={sSClick} text='Screenshots'></Button>
            <Button style={'transparent-btn'} onclick={filesClick} text='files'></Button>
        </div>
         : <div className='space'></div> }
        {page === 'desc' ?
        <div className='desc' dangerouslySetInnerHTML={{ __html: desc }}/>
        :
        <ScreenshotSlider screenshot={screenshots} />}
    
        <Button onclick={click} text={callToAction}></Button>

    </div>
  )
}

export default ProjectCard