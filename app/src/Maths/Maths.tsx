import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { MathsTimeLine } from '../MathsTimeLine/MathsTimeLine';

type Props = {}

export default function Maths(props: Props) {
  // Sort by birth
  Catalog.formulas.sort((x, y) => x.date - y.date)
  return (
    <div>
      <header className="app-header">
        <p>
          Maths formulas I <u>have</u> to remember. This one's in french.
        </p>

      </header>
      <MathsTimeLine formulas={Catalog.formulas}></MathsTimeLine>
    </div>
  );
}