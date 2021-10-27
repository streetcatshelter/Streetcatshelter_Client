import React, { useEffect, useState } from "react";

/* == components*/
import CalendarDates from "./CalendarDates";

/* == Library - style */
import styled from "styled-components";
import { useSelector } from "react-redux";
const CalendarBody = (props) => {
  const { totalDate, today, month, year, YEAR } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const getMonth = new Date().getMonth() + 1;

  const findToday = year === YEAR && month === getMonth ? today : "";
  // const Calendar = useSelector((state) => state.mypage.calendar);
  // const dayOffList = [];
  // console.log(Calendar);

  // useEffect(() => {
  //   Calendar.map((workDate, idx) => {
  //     return dayOffList.unshift(workDate.date);
  //   });
  // }, []);

  // console.log(dayOffList);

  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <CalendarDates
            path={props.path}
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
            findToday={findToday === elm}
            month={month}
            year={year}
          ></CalendarDates>
        );
      })}
    </Form>
  );
};

const Form = styled.div`
  grid-template-columns: repeat(7, 1fr);
  border-radius: 2px;
  width: 100%;
  display: grid;
  flex-flow: row wrap;
`;
export default CalendarBody;
