import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './QuizzItem.scss';

export type QuizzItemWork = {
  img: string,
  name: string,
  date?: string
}

export const QuizzItem: React.FC<{ artistName: string | undefined, work: QuizzItemWork, reveal: boolean }> = ({ artistName, work, reveal }) => {
  return (
    <div className='quizz-item'>
      {work.img ? <img src={work.img} alt="" className='quizz-item-img' /> : null}
      {reveal ?
        <div className='quizz-item-description'>{work.name} {work.date ? <div>- {work.date}</div> : null} {artistName ? <div>by {artistName}</div> : null}</div>
        : null
      }
    </div>
  );
}