import React, { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { QuizzItem, QuizzItemWork } from './QuizzItem';

import './Quizz.scss';

export interface ArtistQuizz {
  artist?: string,
  img?: string,
  works: QuizzItemWork[]
}

export const Quizz: React.FC<{ artists: ArtistQuizz[] }> = ({ artists }) => {
  let [reveal, setReveal] = React.useState(false);
  let [work, setWork] = React.useState<QuizzItemWork>();
  let [artist, setArtist] = React.useState<ArtistQuizz>();

  function setRandomWork() {
    setReveal(false);
    const i = Math.floor(Math.random() * artists.length);
    setArtist(artists[i]);
    const j = Math.floor(Math.random() * artists[i].works.length);
    setWork(artists[i].works[j]);
  }

  useEffect(() => {
    setRandomWork()
  }, [])

  return (
    <div className='quizz'>
      <div className='quizz-btn-container'>
        <div className='quizz-btn' onClick={() => { setReveal(true); }}>
          reveal
        </div>
        <div className='quizz-btn' onClick={setRandomWork}>
          next
        </div>
      </div>
      <div className='quizz-work'>
        {work !== undefined && artist !== undefined ?
          <QuizzItem work={work} artistName={artist.artist} reveal={reveal}></QuizzItem>
          : null
        }
      </div>
    </div>
  );
}