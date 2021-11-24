// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import { Template, Location, Spinner } from "../components";

const Map = (props) => {
  const isLoaded = useSelector((state) => state.mypage.isLoaded);

  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props} page="map">
        <Location props={props} />
      </Template>
    </>
  );
};

export default Map;
