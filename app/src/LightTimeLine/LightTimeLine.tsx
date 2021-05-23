import React from 'react';
import { LightTimeLineElement } from '../Catalog';
import './LightTimeLine.scss';

export const LightTimeLine: React.FC<{ elements: LightTimeLineElement[] }> = ({ elements }) => {
  return (
    <div className="elements-container">
      {elements.map((element, i) => {
        return (
          <div key={element.name} className="element">
            <span className="element-desc">
              <div className="element-desc-title">{element.name}{element.date ? <span> - {element.date}</span> : null}</div>
            </span>
            { element.img ? <img alt={element.name} className="element-img" src={element.img}></img>
              : <div></div>}
            { element.text ? <div className="element-img-text">{element.text}</div>
              : <div></div>}
          </div>)
      })}
    </div>
  );
}