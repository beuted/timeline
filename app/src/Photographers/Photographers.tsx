import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../Timeline/TimeLine';

type Props = {}

export default function Photographers(props: Props) {
  // Sort by birth
  Catalog.photographers.sort((x, y) => x.lifePeriod.start.getTime() - y.lifePeriod.start.getTime())
  return (
    <div>
      <header className="App-header">
        <p>
          Timeline about photographers that I care about.
        </p>
      </header>
      <TimeLine artists={Catalog.photographers}></TimeLine>
    </div>
  );
}