import React, { useEffect, useState } from "react";

/* == components*/
import CalendarModal from "./CalendarModal";

import { Gitlab } from "react-feather";
/* == Library - style */
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Calendar } from "..";
const CalendarDates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;

  const [openModal, setOpenModal] = useState(false);
  const Calendar = useSelector((state) => state.mypage.calendar);

  const DayOff = [];
  return (
    <>
      <Form
        onClick={() => {
          if (DayOff.length > 0) {
            setOpenModal(true);
          } else return;
        }}
      >
        {(props.firstDate > 0 && props.idx > props.firstDate - 1) ||
        props.idx < props.lastDate ? (
          ""
        ) : (
          <DateNum
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            findToday={findToday}
          >
            <TodayCSS findToday={findToday}>
              <span>{elm}</span>
            </TodayCSS>
            {props.path === "mypage" ? (
              <Dots>
                {Calendar.filter(
                  (workDate) =>
                    workDate.date[2] == elm && workDate.date[1] == month
                )
                  .sort()
                  .map((workDate) => {
                    DayOff.unshift(workDate.date[2]);
                    const food = workDate.food;
                    const water = workDate.water;
                    const snack = workDate.snack;
                    return (
                      <div
                        style={{
                          display: "flex",
                          margin: "auto",
                        }}
                      >
                        <Gitlab width="5px" height="5px" />
                        <Dot
                          background="#D19B61"
                          work={food ? "block" : "none"}
                        />
                        <Dot
                          background="skyblue"
                          work={water ? "block" : "none"}
                        />
                        <Dot
                          background="#CBCF52"
                          work={snack ? "block" : "none"}
                        />
                      </div>
                    );
                  })}
              </Dots>
            ) : (
              ""
            )}
          </DateNum>
        )}
      </Form>
      {openModal && (
        <CalendarModal
          elm={elm}
          month={month}
          year={year}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};
const Form = styled.li`
  background: #fefdf8;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 55px;
  text-align: left;
  border-top: 1px solid #e4e3e6;
  :nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4),
  :nth-child(5),
  :nth-child(6),
  :nth-child(7) {
    border-top: none;
  }

  :nth-child(7n + 1) {
    background-color: #f5f5f5;
    border-left: none;
  }
  :nth-child(7n) {
    background-color: #f5f5f5;
  }
  &:hover {
    filter: brightness(90%);
  }
`;
const Dots = styled.div`
  display: flex;
  justify-content: flex-start;
  p {
    font-size: 12px;
  }
`;
const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${(props) => props.background};
  margin: 2px;
  display: ${(props) => props.work};
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
