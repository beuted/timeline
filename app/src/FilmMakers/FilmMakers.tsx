import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../Timeline/TimeLine';


export const FilmMakers: React.FC = () => {
  // Sort by birth
  Catalog.filmmakers.sort((x, y) => x.lifePeriod.start.getTime() - y.lifePeriod.start.getTime())
  return (
    <div>
      <header className="App-header">
        <p>
          Timeline about film makers that I care about.
        </p>
      </header>
      <TimeLine artists={Catalog.filmmakers}></TimeLine>
    </div>
  );
}