import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ScreenshotSlider = ({ screenshots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenshotAmount = screenshots.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === screenshotAmount - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? screenshotAmount - 1 : currentSlide - 1);
  };

  return (
    <div className="screenshots">
      <div className="arrow-box">
        <FaArrowAltCircleLeft className="arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="arrow" onClick={nextSlide} />
      </div>
      {screenshots.map((screenshot, index) => (
        <div key={screenshot}>
          {index === currentSlide && <img src={screenshot} alt="" />}
        </div>
      ))}
    </div>
  );
};

export default ScreenshotSlider;
