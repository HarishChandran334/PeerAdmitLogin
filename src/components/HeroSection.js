import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LOREM IPSUM</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae explicabo placeat maxime perspiciatis provident officiis in nobis unde aut exercitationem magnam nesciunt molestiae repellendus qui iusto iure labore, expedita distinctio.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          [WATCH TRAILER?] <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;