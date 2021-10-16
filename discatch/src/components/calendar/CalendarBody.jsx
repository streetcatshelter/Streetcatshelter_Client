import React, { useEffect, useState } from "react";

/* == components*/
import CalendarDates from "./CalendarDates";

/* == Library - style */
import styled from "styled-components";
import { useSelector } from "react-redux";
const CalendarBody = (props) => {
  // const Calendar = useSelector((state) => state.mypage.calendar);
  // console.log(Calendar[0].createdAt.substr(8, 2));

  const { totalDate, today, month, year, YEAR } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  //today
  const findToday = year === YEAR ? totalDate.indexOf(today) : "";
  const getMonth = new Date().getMonth() + 1;

  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <CalendarDates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
            findToday={findToday === idx && month === getMonth && findToday}
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
