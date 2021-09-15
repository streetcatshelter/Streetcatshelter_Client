import React, { useState, useEffect } from "react";
import { User } from "react-feather";
import styled from "styled-components";

const CalendarModal = (props) => {
  const { elm, month, year, openModal } = props;
  const [OpenModal, SetOpenModal] = useState(false);
  useEffect(() => {
    openModal ? SetOpenModal(true) : SetOpenModal(false);
  }, []);
  return (
    <>
      {OpenModal ? (
        <Background>
          <Form>
            <Header>
              disCATch<span>활동일지</span>
            </Header>
            <ViewDate>
              {year}-{month}-{elm}
            </ViewDate>
            <Events>
              <ul>
                <li>또또 밥주기</li>
                <li>초코 급수</li>
              </ul>
            </Events>

            <Close
              onClick={() => {
                SetOpenModal(false);
              }}
            >
              닫기
            </Close>
          </Form>
        </Background>
      ) : (
        ""
      )}
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
  z-index: 100;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 0.5 px solid #d3d3d3;
  margin: auto;
  padding-top: 10px;
  color: #b5bb19;
  span {
    color: #191919;
    font-size: 25px;
  }
`;

const ViewDate = styled.div`
  padding: 5px;
`;
const Events = styled.div`
  text-align: left;
`;

const Close = styled.div`
  margin: 120px auto;
  padding: auto;
  width: 80px;
  height: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #cbcf52;
  border-radius: 10px;
  text-align: center;
  //   cursor: pointer;
`;
export default CalendarModal;
