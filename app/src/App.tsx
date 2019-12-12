import React from 'react';
import './App.css';
import { Art } from './Art';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const App: React.FC = () => {
  Art.artists.sort((x, y) => (x.workPeriod.end.getTime() - x.workPeriod.start.getTime()) - (y.workPeriod.end.getTime() - y.workPeriod.start.getTime()))
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Timeline about artists that I care about.
        </p>
      </header>
      <VerticalTimeline>
        {Art.artists.map(x => {
          return (<VerticalTimelineElement
            key={x.artist}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={x.workPeriod.start.getFullYear() + " - " + x.workPeriod.end.getFullYear()}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={x.img}></img>}
          >
            <h3 className="vertical-timeline-element-title">{x.artist}</h3>
            <p>
              {x.description}
            </p>
          </VerticalTimelineElement>)
        })}

      </VerticalTimeline>

    </div>
  );
}

export default App;
