import React, { useEffect } from 'react';
import { Artist, Work, Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { QuizzItem } from './QuizzItem';
import { useParams } from 'react-router-dom';
import { Quizz } from './Quizz';

export const QuizzPage: React.FC<void> = () => {
  let { category } = useParams();
  let artists: Artist[] = [];
  switch(category) {
    case 'painters': artists = Catalog.painters; break;
    case 'photographers': artists = Catalog.photographers; break;
    case 'filmmakers': artists = Catalog.filmmakers; break;
    case 'writers': artists = Catalog.writers; break;
  }

  return (
    <Quizz artists={artists} />
  );
}