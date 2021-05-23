import React from 'react';
import { Catalog } from '../Catalog';
import 'react-vertical-timeline-component/style.min.css';
import { useParams } from 'react-router-dom';
import { ArtistQuizz, Quizz } from './Quizz';

export const QuizzPage: React.FC<void> = () => {
  let { category } = useParams();
  let artists: ArtistQuizz[] = [];
  switch (category) {
    case 'painters': artists = Catalog.painters; break;
    case 'photographers': artists = Catalog.photographers; break;
    case 'filmmakers': artists = Catalog.filmmakers; break;
    case 'writers': artists = Catalog.writers; break;
    case 'villes': artists = [{ works: Catalog.frenchCities }]; break;
    case 'regions': artists = [{ works: Catalog.frenchRegions }]; break;
    case 'fleuves': artists = [{ works: Catalog.rivers }]; break;
    case 'departements': artists = [{ works: Catalog.frenchDepartements }]; break;
  }

  return (
    <Quizz artists={artists} />
  );
}