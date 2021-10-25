import React from "react";
/* == Library - style */
import styled from "styled-components";
import SpinnerCat from "../styles/images/spinnerCat.svg";
/* == Library  */
import PropTypes from "prop-types";
import { PropagateLoader } from "react-spinners";

const Spinner = (props) => {
  if (!props.visible) {
    return <></>;
  }

  return (
    <div>
      <SpinnerBG>
        <SpinnerInner>
          <img src={SpinnerCat} alt={SpinnerCat} width="300px" height="300px" />
          <p style={{ fontSize: "30px", fontWeight: "900", color: "#d19b61" }}>
            Loading
          </p>
          <PropagateLoader color="#fbd986" size="15" />
        </SpinnerInner>
      </SpinnerBG>
    </div>
  );
};

Spinner.propTypes = {
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
  background-color: #fff;
  z-index: 1000;
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

export default Spinner;
