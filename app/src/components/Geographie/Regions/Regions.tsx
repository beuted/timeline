import React from "react";
import { Catalog } from "../../../Catalog";
import "react-vertical-timeline-component/style.min.css";
import { LightTimeLine } from "../../LightTimeLine/LightTimeLine";
import { Link } from "react-router-dom";

type Props = {};

export default function Regions(props: Props) {
  return (
    <div>
      <header className="app-header">
        <p>Les régions françaises.</p>
        <Link to="/quizz/regions">
          <i className="fa fa-question-circle"></i>
        </Link>
      </header>
      <LightTimeLine elements={Catalog.frenchRegions}></LightTimeLine>
    </div>
  );
}
