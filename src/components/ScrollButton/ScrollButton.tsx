import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/style/ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 320) {
      setVisible(true);
    } else if (scrolled <= 320) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="scroll-up-button">
      <FontAwesomeIcon
        icon={faArrowCircleUp}
        onClick={scrollToTop}
        size="lg"
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </div>
  );
};

export default ScrollButton;