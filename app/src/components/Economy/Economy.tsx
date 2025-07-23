import React from 'react';

type Props = {}

export default function Economy(props: Props) {
  // Sort by birth
  return (
    <div className="container">
      <header className="app-header">
        Notes sur des livres et pensées économique
      </header>

      <div className="article">
        <a href="https://www.notion.so/dekajoo/Tout-sur-l-conomie-ou-presque-Gilles-Mitteau-79ee6f6a056f4d25bb49099ab927b5aa" target="_blank" rel="noopener noreferrer">
          <h1>Tout sur l'économie ou presque - Gilles Mitteau</h1>
          <img src="../economy/tout-sur-l-economie-ou-presque.jpg" alt="apres-la-democratie" />
        </a>
      </div>
    </div>
  );
}