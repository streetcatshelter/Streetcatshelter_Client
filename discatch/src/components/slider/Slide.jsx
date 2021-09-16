import React from "react";

/* == Library - style */
import styled from "styled-components";

/* == Custom - Icon */
import onboadingImg from "../../styles/images/onboadingImg(1).svg";

/* == Redux */
import { history } from "../../redux/configureStore";

const Slide = (props) => {
  return (
    <>
      {props.number === "3" ? (
        <div
          style={{
            alignItems: "center",
            height: "80vh",
            background: "#FEFDF8",
          }}
        >
          <img
            style={{ width: "100vw", height: "100%" }}
            src={onboadingImg}
            alt={onboadingImg}
          />

          <Button
            onClick={() => {
              history.push("/login");
            }}
          >
            우리동네 고양이 집사가 되기!
          </Button>
        </div>
      ) : props.number === "2" ? (
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            height: "80vh",
            background: "#FEFDF8",
          }}
        >
          <img
            style={{ width: "100vw", height: "100%" }}
            src={onboadingImg}
            alt={onboadingImg}
          />
          <p
            style={{
              position: "absolute",
              top: "72%",
              left: "115%",
              fontWeight: "700",
              width: "300px",
            }}
          >
            우리 어플은 이러쿵저러쿵 쓰면됩니다! 설명을 여기다가 쓰면 되겠죠?
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            height: "80vh",
            background: "#FEFDF8",
          }}
        >
          <img
            style={{ width: "100vw", height: "100%" }}
            src={onboadingImg}
            alt={onboadingImg}
          />
          <p
            style={{
              position: "absolute",
              top: "72%",
              left: "15%",
              fontWeight: "700",
            }}
          >
            우리동네 고양이의 집사가 되어보세요!
          </p>
        </div>
      )}
    </>
  );
};

const Button = styled.button`
  position: absolute;
  top: 85%;
  left: 220%;
  font-weight: 700;
  width: 240px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background: #b5bb19;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #fbd986;
  }
`;

export default Slide;
