import React, { useEffect } from 'react';
import { Artist, Work } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { QuizzItem } from './QuizzItem';

import './Quizz.scss';

export const Quizz: React.FC<{ artists : Artist[] }> = ({ artists }) => {
  let [reveal, setReveal] = React.useState(false);
  let [work, setWork] = React.useState<Work>();
  let [artist, setArtist] = React.useState<Artist>();

  function setRandomWork() {
    const i = Math.floor(Math.random() * artists.length);
    setArtist(artists[i]);
    const j = Math.floor(Math.random() * artists[i].works.length);
    setWork(artists[i].works[j]);
  }

  useEffect(() => {
    setRandomWork()
  }, [])

  return (
    <div>
      <div className='quizz-work'>
        {work !== undefined && artist !== undefined ?
          <QuizzItem work={work} artist={artist} reveal={reveal}></QuizzItem>
          : null
        }
      </div>
      <div className='quizz-btn-container'>
        <div className='quizz-reveal-btn' onClick={() => { setReveal(true); }}>
          reveal
        </div>
        <div className='quizz-next-btn' onClick={setRandomWork}>
          next
        </div>
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