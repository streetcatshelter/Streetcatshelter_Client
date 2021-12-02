// LIBRARY
import React, { useState, useEffect } from "react";

// COMPONENTS
import { CalendarHead, CalendarBody } from "..";
import { useDispatch } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";

// REDUX
import { __getCalendar } from "../../redux/modules/cat";

const Calendar = (props) => {
  const dispatch = useDispatch();

  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);

  const changeDate = (month) => {
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
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  useEffect(() => {
    props.path === "mypage"
      ? dispatch(mypageActions._getCalender(year, month))
      : dispatch(__getCalendar(props.catId, year, month));
  }, [dispatch, year, month, props.catId]);

  const [today, setToday] = useState(0);

  const goToday = () => {
    let TODAY = new Date().getDate();

    let goMonth = new Date().getMonth() + 1;
    let goYear = new Date().getFullYear();

    setYear(goYear);
    setMonth(goMonth);
    setToday(TODAY);
  };
  useEffect(() => {
    goToday();
  }, []);

  return (
    <div
      style={{
        borderBottom: "1px solid #B5BB19",
      }}
    >
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
    </div>
  );
};
export default Calendar;
