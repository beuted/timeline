import React from 'react';
import './ScrollIndicator.scss';


export const ScrollIndicator: React.FC<{scrollRatio: number}> = ({scrollRatio}) => {
  return (
  <div className="scroll-indicator-ref">
      <div className="scroll-indicator-bullet-container" style={{marginTop: scrollRatio*200+'px'}}>
        <div className="scroll-indicator-bullet"></div>
      </div>
      <div className="scroll-indicator"></div>
      <div className="scroll-indicator-text">scroll</div>
  </div>);
}