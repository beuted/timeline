import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="App-header name">
        Benoît Jehanno
      </header>
      <div className="presentation">
        <div className="presentation-text">
          <span>This is what I do</span>
          <span>This is what I enjoy</span>
        </div>
      </div>
    </div>
  );
}