import React from 'react';
import { MathsFormula } from '../Catalog';
import './MathsTimeLine.scss';

export const MathsTimeLine: React.FC<{formulas: MathsFormula[]}> = ({ formulas }) => {
  return (
    <div className="formulas-container">
      {formulas.map((formula, i) => {
        return (
          <div key={formula.name} className="formula">
              <span className="formula-desc">
                <div className="formula-desc-title">{formula.name} - {formula.date}</div>
              </span>
            { formula.img ? <img alt={formula.name} className="formula-img" src={formula.img}></img>
            : <div></div> }
            { formula.text ? <div className="formula-img-text">{formula.text}</div>
            : <div></div> }
          </div>)
      })}
    </div>
  );
}