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
  let [artistsWeight, setArtistsWeight] = React.useState<number[]>(artists.map(x => 1));
  const RandomCorrectionFactor = 2;

  function setRandomWork() {
    setReveal(false);
    // Choose random artist based on weights
    const i = weightedRandom(artistsWeight);

    // update weight
    artistsWeight[i] = artistsWeight[i] * 1 / RandomCorrectionFactor;
    if (!artistsWeight.some(x => x > 1)) // try not to go too deep into division
      artistsWeight = artistsWeight.map(x => x * RandomCorrectionFactor)

    setArtistsWeight(artistsWeight);

    setArtist(artists[i]);
    const j = Math.floor(Math.random() * artists[i].works.length);
    setWork(artists[i].works[j]);
  }

  useEffect(() => {
    setRandomWork();
  }, [])

  function weightedRandom(weights: number[]) {
    var weightsTemp = Array.from(weights);
    var i;

    for (i = 0; i < weightsTemp.length; i++)
      weightsTemp[i] += weightsTemp[i - 1] || 0;

    var random = Math.random() * weightsTemp[weightsTemp.length - 1];

    for (i = 0; i < weightsTemp.length; i++)
      if (weightsTemp[i] > random)
        break;

    return i;
  }

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