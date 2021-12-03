// LIBRARY
import React, { useState, useEffect } from "react";

// COMPONENTS
import { Template, Location, SecondSpinner } from "../components";

const Map = (props) => {
  const [loading, setLoading] = useState(false);
  console.log("map");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <>
      <Template props={props} page="map">
        <SecondSpinner visible={loading} />
        <Location props={props} />
      </Template>
    </>
  );
};

export default Map;
