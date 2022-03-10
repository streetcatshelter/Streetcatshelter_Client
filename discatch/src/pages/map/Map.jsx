// LIBRARY
import React from "react";

// COMPONENTS
import { Template, Location } from "components";

const Map = (props) => {
  return (
    <>
      <Template props={props} page="map">
        <Location props={props} />
      </Template>
    </>
  );
};

export default Map;
