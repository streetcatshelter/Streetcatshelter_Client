import React, { useEffect, useState } from "react";

/* == components*/
import CalendarModal from "./CalendarModal";

/* == Library - style */
import styled from "styled-components";

const CalendarDates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx, holiday } =
    props;

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Form
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <DateNum
          idx={idx}
          lastDate={lastDate}
          firstDate={firstDate}
          findToday={findToday}
        >
          <TodayCSS findToday={findToday}>
            <span>{elm}</span>
          </TodayCSS>
        </DateNum>
        {openModal && (
          <CalendarModal
            elm={elm}
            month={month}
            year={year}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </Form>
    </>
  );
};
const Form = styled.li`
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 55px;
  text-align: left;
  border-top: 1px solid #e4e3e6;
  :nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(7) {

    border-top: none;
  }
  
  :nth-child(7n + 1) {
    background-color: #f5f5f5;
    border-left: none;
  }
  :nth-child(7n) {
    background-color: #f5f5f5;
  }
  :
`;

const DateNum = styled.div`
  padding: auto;
  ${(props) => props.idx < props.lastDate && `color: #969696;`};
  ${(props) =>
    props.firstDate > 0 &&
    props.idx > props.firstDate - 1 &&
    `
    color: #969696;
  `};
`;

const TodayCSS = styled.div`
  span {
    margin: 2px;
    font-size: 12px;
  }
  ${(props) =>
    props.findToday &&
    ` position: relative;
    width:20px;
    height:20px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    margin:3px 0px 0px 0px;
    color: #191919;
    background-color:#CBCF52;
 `}
`;

export default CalendarDates;
