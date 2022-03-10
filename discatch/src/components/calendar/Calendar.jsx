// LIBRARY
import React, { useState, useEffect, useCallback } from "react";

// COMPONENTS
import { CalendarHead, CalendarBody } from "..";
import { useDispatch } from "react-redux";
import { mypageActions } from "redux/modules/mypage";

// REDUX
import { __getCalendar } from "redux/modules/cat";

// STYLE
import * as S from "./Calendar.styled";

const Calendar = (props) => {
  const dispatch = useDispatch();

  //Date함수로 날짜를 만들어냄
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();

  //날짜관련 state들
  const [today, setToday] = useState(0);
  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);

  //날짜만들기 함수
  const changeDate = useCallback(
    (month) => {
      //이전 날짜
      let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
      let PVLastDay = new Date(YEAR, month - 1, 0).getDay();

      //다음 날짜
      const ThisLasyDay = new Date(YEAR, month, 0).getDay();
      const ThisLasyDate = new Date(YEAR, month, 0).getDate();

      //이전 날짜 만들기
      let PVLD = [];
      if (PVLastDay !== 6) {
        for (let i = 0; i < PVLastDay + 1; i++) {
          PVLD.unshift(PVLastDate - i);
        }
      }
      //다음 날짜 만들기
      let TLD = [];
      for (let i = 1; i < 7 - ThisLasyDay; i++) {
        if (i === 0) {
          return TLD;
        }
        TLD.push(i);
      }

      //현재날짜
      let TD = [];
      TD = [...Array(ThisLasyDate + 1).keys()].slice(1);
      return PVLD.concat(TD, TLD);
    },
    [YEAR]
  );

  //현재 날짜의 달로 스테이트를 바꿔주는 함수
  const goToday = () => {
    let TODAY = new Date().getDate();

    let goMonth = new Date().getMonth() + 1;
    let goYear = new Date().getFullYear();

    setYear(goYear);
    setMonth(goMonth);
    setToday(TODAY);
  };

  //goToday()함수를 실행하면 해당 날짜로 감.
  useEffect(() => {
    goToday();
  }, []);

  //최초 초기달을 현재 달로 함.
  useEffect(() => {
    setTotalDate(changeDate(MONTH));
  }, [changeDate, MONTH]);

  //요청에 따라 날짜함수에 넣어 날짜를 가져옴.
  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [changeDate, month]);

  //상위 컴포넌트의 path에 따라 서버에 캘린더데이터를 요청함
  useEffect(() => {
    props.path === "mypage"
      ? dispatch(mypageActions._getCalender(year, month))
      : dispatch(__getCalendar(props.catId, year, month));
  }, [props.path, dispatch, year, month, props.catId]);

  return (
    <S.CalendarWrap>
      <CalendarHead
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
        goToday={goToday}
      />
      <CalendarBody
        path={props.path}
        totalDate={totalDate}
        today={today}
        month={month}
        year={year}
        YEAR={YEAR}
      />
    </S.CalendarWrap>
  );
};
export default Calendar;
