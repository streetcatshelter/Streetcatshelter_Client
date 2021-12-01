// LIBRARY
import React, { useEffect } from "react";
import { FadeLoader } from "react-spinners";
import PropTypes from "prop-types";

// STYLE
import styled from "styled-components";

const SecondSpinner = (props) => {
  const visible = props.visible;

  return (
    <>
      {visible ? (
        <SpinnerBG>
          <FadeLoader color="rgba(251,216,134,1);" />
        </SpinnerBG>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

SecondSpinner.propTypes = {
  visible: PropTypes.bool,
};
const SpinnerBG = styled.div`
  display: fixed;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

export default SecondSpinner;
