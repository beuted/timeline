import React from "react";
import { Catalog } from "../../Catalog";
import "react-vertical-timeline-component/style.min.css";
import { LightTimeLine } from "../LightTimeLine/LightTimeLine";

type Props = {};

export default function Maths(props: Props) {
  // Sort by birth
  return (
    <div>
      <header className="app-header">
        <p>
          Maths formulas I <u>have</u> to remember. This one's in french.
        </p>
      </header>
      <LightTimeLine elements={Catalog.formulas}></LightTimeLine>
    </div>
  );
}
