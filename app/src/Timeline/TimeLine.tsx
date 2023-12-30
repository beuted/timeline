import React, { useState } from 'react';
import { Artist } from '../Catalog';
import { TimelineElementDetails } from './TimelineElementDetails';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

let initialShowDetails: string | null = null;

let VerticalTimelineAny = VerticalTimeline as any;
let VerticalTimelineElementAny = VerticalTimelineElement as any; // Flemme de fixer ca mieux.

export const TimeLine: React.FC<{ artists: Artist[] }> = ({ artists }) => {
  // Sort by birth
  const [showDetails, setShowDetails] = useState(initialShowDetails);

  function clickArtist(artistName: string, refToFocus: React.RefObject<HTMLDivElement>) {
    if (showDetails === artistName) {
      setShowDetails(null);
    } else {
      setShowDetails(artistName);
      if (refToFocus.current) {
        refToFocus.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  return (
    <div>
      <VerticalTimelineAny>
        {artists.map((x, i) => {
          const refToFocus = React.createRef<HTMLDivElement>();
          const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          const timelineDetailSize = 0.6 * h;
          const areWeAboveTheCollapsedArtistIfAny = showDetails && i > artists.findIndex(x => x.artist === showDetails)
          // This complicated crap is done to scroll at the right place depending of the "collapse" animation
          const scrollOffset = -20 - (areWeAboveTheCollapsedArtistIfAny ? timelineDetailSize : 0)

          return (<div key={x.artist} style={{ position: 'relative' }}>
            <div ref={refToFocus} style={{ position: 'absolute', top: scrollOffset + 'px', left: 0 }}></div>
            <VerticalTimelineElementAny
              className="vertical-timeline-element"
              contentStyle={{ background: '#6eaab8', color: '#fff', boxShadow: 'none', marginBottom: '50px' }}
              contentArrowStyle={{ borderRight: '7px solid  #6eaab8' }}
              date={x.lifePeriod.start + " - " + (x.lifePeriod.end ? x.lifePeriod.end : "today")}
              icon={<img alt={x.artist} src={x.img}></img>}
              iconStyle={{ cursor: 'pointer' }}
              iconOnClick={() => clickArtist(x.artist, refToFocus)}
              position={i % 2 === 0 ? 'right' : 'left'}
            >
              <h3 className="vertical-timeline-element-title">{x.artist}</h3>
              <p>
                {x.description}
              </p>
            </VerticalTimelineElementAny>
            <TimelineElementDetails show={showDetails === x.artist} artist={x}></TimelineElementDetails>
          </div>)
        })}

      </VerticalTimelineAny>
    </div>
  );
}