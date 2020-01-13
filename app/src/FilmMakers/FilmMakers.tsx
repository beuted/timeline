import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../Timeline/TimeLine';
import { Link } from 'react-router-dom';

type Props = {}

export default function FilmMakers(props: Props) {
  // Sort by birth
  Catalog.filmmakers.sort((x, y) => x.lifePeriod.start - y.lifePeriod.start)
  return (
    <div>
      <header className="app-header">
        <p>
          Timeline about film makers that I care about.
        </p>

        <Link to="/quizz/filmmakers"><i className="fa fa-question-circle"></i></Link>
      </header>
      <TimeLine artists={Catalog.filmmakers}></TimeLine>
    </div>
  );
}