import React, { useState } from 'react';
import { Catalog } from '../Catalog';
import { TimelineElementDetails } from '../TimelineElementDetails';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

let initialShowDetails: string | null = null;

export const Painters: React.FC = () => {
  // Sort by birth
  const [showDetails, setShowDetails] = useState(initialShowDetails);

  Catalog.painters.sort((x, y) => x.lifePeriod.start.getTime() - y.lifePeriod.start.getTime())
  return (
    <div>
      <header className="App-header">
        <p>
          Timeline about painters that I care about.
        </p>
      </header>
      <VerticalTimeline>
        {Catalog.painters.map((x, i) => {
          return (<div key={x.artist}><VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#6eaab8', color: '#fff', boxShadow: 'none', marginBottom: '50px' }}
            contentArrowStyle={{ borderRight: '7px solid  #6eaab8' }}
            date={x.lifePeriod.start.getFullYear() + " - " + (x.lifePeriod.end ? x.lifePeriod.end.getFullYear() : "today")}
            icon={<img alt={x.artist} src={x.img}></img>}
            iconStyle={{cursor: 'pointer'}}
            iconOnClick={() => showDetails === x.artist ? setShowDetails(null) : setShowDetails(x.artist)}
            position={i % 2 === 0 ? 'right' : 'left'}
          >
            <h3 className="vertical-timeline-element-title">{x.artist}</h3>
            <p>
              {x.description}
            </p>
          </VerticalTimelineElement>
          <TimelineElementDetails show={showDetails === x.artist} artist={x}></TimelineElementDetails>
          </div>)
        })}

      </VerticalTimeline>
    </div>
  );
}