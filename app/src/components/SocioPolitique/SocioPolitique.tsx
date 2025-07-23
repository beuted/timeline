import React from 'react';

type Props = {}

export default function SocioPolitique(props: Props) {
  // Sort by birth
  return (
    <div className="container">
      <header className="app-header">
        Notes sur des livres et pensées socio-politiques
      </header>

      <div className="article">
        <a href="https://www.notion.so/dekajoo/Emanuel-Todd-Apr-s-la-d-mocratie-62bc168c3e9942afba3345cf7f7e87fb" target="_blank" rel="noopener noreferrer">
          <h1>Emanuel Todd - Après la démocratie</h1>
          <img src="../sociopolitique/apres-la-democratie.jpg" alt="apres-la-democratie" />
        </a>
      </div>
    </div>
  );
}