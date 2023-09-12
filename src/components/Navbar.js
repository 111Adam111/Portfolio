import React from 'react';
import Button from './Button';
import DownloadButton from './DownloadButton';

const Navbar = () => {
  const projectsClick = () => (window.location.href = '#projects-anchor');
  const aboutClick = () => (window.location.href = '#about-anchor');
  return (
    <div className="navbar">
      <DownloadButton />
      <div className="menu">
        <Button style={'transparent-btn'} text="Projects" onclick={projectsClick} />
        <Button style={'transparent-btn'} text="About" onclick={aboutClick} />
      </div>
    </div>
  );
};

export default Navbar;
