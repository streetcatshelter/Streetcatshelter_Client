import React, { useState, useEffect } from "react";

/* == Library - style */
import { CheckSquare } from "react-feather";
import styled from "styled-components";

const CalendarModal = (props) => {
  const { elm, month, year, setOpenModal } = props;

  return (
    <>
      <Background>
        <Form>
          <Head>
            <Header>
              <p>
                dis<span>C</span>
                <span>A</span>
                <span>T</span>ch
              </p>{" "}
            </Header>
            <ViewDate>
              {year}년{month}월{elm}일 <span>활동일지</span>
            </ViewDate>
          </Head>

          <Events>
            <ul>
              <li>
                <CheckSquare />
                또또 밥주기
              </li>
              <li>
                <CheckSquare />
                초코 급수
              </li>
            </ul>
          </Events>
          <Footer>
            <Close
              onClick={() => {
                setOpenModal(false);
              }}
            >
              닫기
            </Close>
          </Footer>
        </Form>
      </Background>
    </>
  );
};
const Background = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Form = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: #fef7ea;
  text-align: center;
  color: black;
  z-index: 99;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 0.5 px solid #d3d3d3;
  height: 30px;
  margin: auto;
  padding-top: 20px;
  color: #b5bb19;
  p {
    margin: 0px auto;
    font-size: 25px;
    font-weight: 700;
    color: #fbd986;
  }
  span {
    font-size: 30px;
    font-weight: 800;
    margin-left: -1.5px;
    color: #cbcf52;
    :nth-child(2) {
      color: #d19b61;
    }
  }
`;
const Head = styled.div`
  height: 30%;
`;

const ViewDate = styled.div`
  padding-top: 5px;
  span {
    font-size: 15px;
    margin-left: -2px;
    font-weight: 700;
  }
`;
const Events = styled.div`
  height: 50%;
  text-align: left;
  font-weight: 700;
  ul {
    padding: 0px 20px;

    li {
      list-style: none;
      margin: 10px auto;
    }
    svg {
      margin: auto 4px -4px auto;
    }
  }
`;
const Footer = styled.div`
  height: 20%;
`;

const Close = styled.div`
  margin: auto;
  padding: auto;
  width: 80px;
  height: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #cbcf52;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
export default CalendarModal;
