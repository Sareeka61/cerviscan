import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import '../css files/landingcontent.css';
import illustration from '../assets/illustrationcervix.png';
import './Classify'
import './ContactUs'

export const LandingContent = () => {
  const [goToClassify, setGoToClassify] = useState(false);
  const [goToContact, setGoToContact] = useState(false);

  if (goToClassify) {
    return <Navigate to="/Classify" />;
  }

  if (goToContact) {
    return <Navigate to="/ContactUs" />;
  }


  return (
    <>
      <div className='aboutdisplay'>
        <div className='aboutContent'>
          <span className='aboutApp'>Cervix Type Classification</span>
          <span>The friend of VIA</span>
          <button onClick={() => setGoToClassify(true)} id="classifyButton">Let's go! ></button>
        </div>
        <img src={illustration} alt="illustration of woman" />
      </div>
    </>
  );
};
