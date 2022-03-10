// LIBRARY
import React from "react";

// COMPONENTS
import CalendarDates from "./CalendarDates";

// STYLE
import * as S from "./Calendar.styled";

const CalendarBody = (props) => {
  //props로 날짜관련 정보를 받아옴
  const { totalDate, today, month, year, YEAR } = props;

  //전체 날짜에서 숫자 1이 몇번째 인덱스인지 찾음(전달의 마지막날짜찾기)
  const lastDate = totalDate.indexOf(1);
  //전체 날짜에서 7일 이후에 숫자 1이 몇번째 인덱스인지 찾음(다음달의 첫날찾기)
  const firstDate = totalDate.indexOf(1, 7);
  const getMonth = new Date().getMonth() + 1;
  //today 색을 바꿔주기위해 같은 년월인지 체크
  const findToday = year === YEAR && month === getMonth ? today : "";

  return (
    <S.Form>
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
    </S.Form>
  );
};

export default CalendarBody;
