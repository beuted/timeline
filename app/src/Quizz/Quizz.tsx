import React from 'react';
import { Artist, Work } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';

export const Quizz: React.FC<{ artists : Artist[] }> = ({ artists }) => {
  let [reveal, setReveal] = React.useState(false);
  let [work, setWork] = React.useState<Work>(null);
  let [artist, setArtist] = React.useState<Artist>(null);

  function setRandomWork() {
    setArtist
  }

  return (
    <div>
      <div onClick={() => { setReveal(true); }}>
        pwet
      </div>
      <div onClick={setRandomWork}>
        next
      </div>
    </div>
  );
}

/*
{work.img ? <img src={work.img} alt=""/> : null }
      {reveal ?
        <div>{work.name} - {work.date}</div>
        : null
      }
*/