// LIBRARY
import React from "react";
import { FadeLoader } from "react-spinners";
import PropTypes from "prop-types";

// STYLE
import styled from "styled-components";

const SecondSpinner = (props) => {
  const visible = props.visible;
  const path = props.path;
  return (
    <>
      {visible ? (
        path === "scroll" ? (
          <SpinnerBG>
            <SpinnerInner>
              <FadeLoader color="rgba(251,216,134,1);" />
            </SpinnerInner>
          </SpinnerBG>
        ) : (
          <SpinnerInner>
            <FadeLoader color="rgba(251,216,134,1);" />
          </SpinnerInner>
        )
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
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;
const SpinnerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default SecondSpinner;
