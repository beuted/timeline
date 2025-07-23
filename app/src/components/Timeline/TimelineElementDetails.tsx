import React from "react";
import { Artist } from "../../Catalog";
import "./TimelineElementDetails.scss";

export const TimelineElementDetails: React.FC<{
  artist: Artist;
  show: boolean;
}> = (props) => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  var className = ["vertical-timeline-element-details"];
  if (props.show) className.push("show");

  return (
    <div className={className.join(" ")}>
      {props.artist.works.map((work) => {
        return (
          <div
            key={work.name}
            className="vertical-timeline-element-details-element"
          >
            <span className="vertical-timeline-element-details-element-desc">
              <div>
                {work.name} - {work.date}
              </div>
              <div className="vertical-timeline-element-details-element-desc-desc">
                {work.description}
              </div>
            </span>
            {work.img ? (
              <img
                alt={work.name}
                className="vertical-timeline-element-details-element-img"
                src={work.img}
              ></img>
            ) : (
              <div className="vertical-timeline-element-details-element-placeholder"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
