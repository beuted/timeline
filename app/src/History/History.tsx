import React from 'react';
import { Catalog, Event } from '../Catalog';
import './History.scss';

type Props = {}

export default function History(props: Props) {
  // Sort by birth
  var history = Catalog.history;
  var events = Catalog.history.map(x => x.events.map(y => ({ period: x.name, ...y }))).flat();
  var startFirstPeriod = Math.min(...Catalog.history.map(x => x.start));
  let periodColors: { [key: string]: string } = {};
  for (const period of Catalog.history) {
    periodColors[period.name] = '#' + intToRGB(hashCode(period.name));
  }
  let [details, setDetails] = React.useState<{ text: string } | null>(null);

  function setDetailsFromEvent(event: Event) {
    setDetails({ text: event.text || "" })
  }

  const zoom = 1;
  return (
    <div className="container">
      <header className="app-header">
        Histoire
      </header>
      <div>
        {details != null ? <div className="details">
          {details.text}
        </div> : null}
        <div className="anchor">
          {history.map((x, i) => {
            return (
              <div key={x.name} className="period" style={{ top: zoom * (x.start - startFirstPeriod) + 'px', height: zoom * (x.end - x.start) + 'px', marginLeft: i * 5 + 'px', color: periodColors[x.name], borderColor: periodColors[x.name] }}>
                <div className="period-name">{x.name}</div>
              </div>
            )
          })}
        </div>
        <div className="anchor">
          {events.map(x => {
            return (
              <div key={x.name} className="event" style={{ top: zoom * (x.date - startFirstPeriod) + 'px', color: periodColors[x.period] }} onClick={() => { setDetailsFromEvent(x); }}>
                <div className="event-date">{x.date}</div>
                <div className="bullet"></div>
                <div className="event-name">{x.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

function hashCode(str: string) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i: number) {
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}