import React from 'react';
import '../App.css';
import './Section.css';

function Section() {
  return (
    <div className='video-container'>
        <video src='/videos/homeVideo.mp4' autoPlay loop muted/>
        <h1>A PLATAFORMA DE TODAS AS FÓRMULAS</h1>
    </div>
  )
}

export default Section