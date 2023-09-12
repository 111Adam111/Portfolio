import React, { useState } from 'react';
import Button from './Button';
import ScreenshotSlider from './ScreenshotSlider';

const ProjectCard = ({
  title,
  desc,
  screenshots,
  callToAction,
  url,
  filesUrl,
  showButtons,
}) => {
  const [card, setCard] = useState('desc');

  const sSClick = () => setCard('screenshoot');
  const descClick = () => setCard('desc');
  const linkToWebsite = () => (window.location.href = url);
  const filesClick = () => (window.location.href = filesUrl);

  return (
    <div className="card">
      <p className="card-title">{title}</p>
      {showButtons ? (
        <div className="switch-bar">
          <Button style={'transparent-btn'} onclick={descClick} text="desc"></Button>
          <Button style={'transparent-btn'} onclick={sSClick} text="Screenshots"></Button>
          <Button style={'transparent-btn'} onclick={filesClick} text="files"></Button>
        </div>
      ) : (
        <div className="space"></div>
      )}

      {card === 'desc' ? (
        <div className="desc" dangerouslySetInnerHTML={{ __html: desc }} />
      ) : (
        <ScreenshotSlider screenshots={screenshots} />
      )}

      <Button onclick={linkToWebsite} text={callToAction}></Button>
    </div>
  );
};

export default ProjectCard;
