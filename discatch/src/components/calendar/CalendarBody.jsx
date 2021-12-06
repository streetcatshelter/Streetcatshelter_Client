// LIBRARY
import React from "react";

// COMPONENTS
import CalendarDates from "./CalendarDates";

// STYLE
import styled from "styled-components";

const CalendarBody = (props) => {
  const { totalDate, today, month, year, YEAR } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);
  const getMonth = new Date().getMonth() + 1;
  const findToday = year === YEAR && month === getMonth ? today : "";

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
