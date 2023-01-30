import React from 'react'
import Button from './Button'

const HeroText = () => {
  const click = () => window.location.href = '#contact-anchor'

  return (
    <div className='hero-box'>

      <div className='hero'>
          <h1>Hi, my name is Adam Dunowski</h1>
          <p id='title'><span className='gray'>I'm a </span>Software Developer</p>
          <div className="text-box">
              <p className='gray'>I am Knowledge-hungry, goal-oriented and highly motivated
                                  Software Developer that carves
                                  development and success.
              </p>
          </div>
          <Button text='Hire Me' onclick={click} />
          
          {/* <button className="btn">
              Hire me
          </button> */}
          


      </div>
    </div>
  )
}

export default HeroText