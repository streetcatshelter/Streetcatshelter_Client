// LIBRARY
import React, { useState, useEffect } from "react";

// COMPONENTS
import { Template, Location, Spinner } from "../components";

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
        <Spinner visible={loading} />
        <Location props={props} />
      </Template>
    </>
  );
};

export default Map;
