import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../Timeline/TimeLine';

type Props = {}

export default function Painters(props: Props) {
  // Sort by birth
  Catalog.painters.sort((x, y) => x.lifePeriod.start.getTime() - y.lifePeriod.start.getTime())

  return (
    <div>
      <header className="app-header">
        <p>
          Timeline about painters that I care about.
        </p>
      </header>
      <TimeLine artists={Catalog.painters}></TimeLine>
    </div>
  );
}