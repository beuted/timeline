import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Home.scss';
import { ParticleBackground } from '../ParticleBackground/ParticleBackground';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="particle-background">
        <ParticleBackground canvasWidth={window.innerWidth} canvasHeight={window.innerHeight}></ParticleBackground>
      </div>
      <header className="App-header name">
        Benoît Jehanno
      </header>
    </div>
  );
}