// LIBRARY
import React from "react";
import { PropagateLoader } from "react-spinners";
import PropTypes from "prop-types";

// STYLE
import styled from "styled-components";
import SpinnerCat from "../styles/images/spinnerCat.png";

const Spinner = (props) => {
  if (!props.visible) {
    return <></>;
  }

  return (
    <div>
      <SpinnerBG>
        <SpinnerInner>
          <img src={SpinnerCat} alt={SpinnerCat} width="250px" height="250px" />
          <MainText>
            <p>
              디<span>스</span>
              <br />
              <span>캐</span>치
            </p>
          </MainText>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#d19b61",
              margin: "20px auto",
            }}
          >
            Loading
          </p>
          <PropagateLoader color="#d19b61;" size="15px" />
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
  background: #fefdf8;
  z-index: 1000;
`;

const MainText = styled.div`
  p {
    margin: 0px auto;
    font-size: 60px;
    font-weight: 900;
    color: #fbd986;
    span {
      color: #cbcf52;
    }
  }
`;

const SpinnerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

export default Spinner;
