// LIBRARY
import React, { useState } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import CalendarModal from "./CalendarModal";

// ICON
import { Gitlab } from "react-feather";

// STYLE
import styled from "styled-components";

const CalendarDates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;
  const [openModal, setOpenModal] = useState(false);
  const Calendar = useSelector((state) =>
    props.path === "mypage" ? state.mypage.calendar : state.cat.calendar
  );
  //일한 날인지 아닌지 구분하기위해 변수를 선언 일한날이면 해당날짜가 클릭되면 모달이 열림
  let WorkDay = [];
  return (
    <>
      <Form
        onClick={() => {
          if (WorkDay.length > 0) {
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

            <Dots>
              {Calendar &&
                Calendar.filter(
                  (workDate) =>
                    workDate.date[2] === elm && workDate.date[1] === month
                )
                  .sort()
                  .map((workDate, idx) => {
                    WorkDay.unshift(workDate.date[2]);
                    const food = workDate.food;
                    const water = workDate.water;
                    const snack = workDate.snack;
                    return (
                      <div
                        key={idx}
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
          </DateNum>
        )}
      </Form>
      {openModal && (
        <CalendarModal
          path={props.path}
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
  background: #ffffff;
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
