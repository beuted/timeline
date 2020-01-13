import React from 'react';
import { Artist, Work } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import './QuizzItem.scss';

export const QuizzItem: React.FC<{ artist : Artist, work: Work, reveal: boolean }> = ({ artist, work, reveal }) => {
  return (
    <div className='quizz-item'>
      {work.img ? <img src={work.img} alt="" className='quizz-item-img'/> : null }
      {reveal ?
        <div className='quizz-item-description'>{work.name} - {work.date} by {artist.artist}</div>
        : null
      }
    </div>
  );
}