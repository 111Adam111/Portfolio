import React from 'react';
import Button from './Button';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../CV_Adam_Dunowski.pdf';
    link.download = '../CV_Adam_Dunowski.pdf';
    link.click();
  };

  return <Button text="Download CV" onclick={handleDownload} />;
};

export default DownloadButton;
