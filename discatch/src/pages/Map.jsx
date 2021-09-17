import React from "react";
import { Template, Location } from "../components";
const Map = (props) => {
  return (
    <Template props={props} page="map">
      <Location />
    </Template>
  );
};

export default Map;
