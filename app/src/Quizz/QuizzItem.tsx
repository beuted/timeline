import React from 'react';
import { Artist, Work } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';

export const QuizzItem: React.FC<{ artist : Artist, work: Work }> = ({ artist, work }) => {
  let [reveal, setReveal] = React.useState(false);
  return (
    <div onClick={() => { setReveal(true); }}>
      {work.img ? <img src={work.img} alt=""/> : null }
      {reveal ?
        <div>{work.name} - {work.date}</div>
        : null
      }
    </div>
  );
}