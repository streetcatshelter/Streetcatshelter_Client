// LIBRARY
import React from "react";

// STYLE
import * as S from "./Calendar.styled";

// ICON
import { Gitlab } from "react-feather";

const CalendarHead = (props) => {
  const { year, month, goToday, setMonth, setYear } = props;
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];
  const workColors = [
    { work: "먹이", color: "lightBrown" },
    { work: "급수", color: "skyBlue" },
    { work: "간식", color: "lightGreen" },
  ];

  const next = () => {
    setYear(month === 12 ? year + 1 : year);
    setMonth(month === 12 ? 1 : month + 1);
  };
  const previous = () => {
    setYear(month === 1 ? year - 1 : year);
    setMonth(month === 1 ? 12 : month - 1);
  };

  return (
    <S.HeadForm>
      <S.HeadNav>
        <S.HeadYear>
          {year}년 {month}월
        </S.HeadYear>
        <S.HeadBtnBox>
          <S.HeadBtn onClick={previous}>&lt;</S.HeadBtn>
          <S.HeadBtn style={{ width: "50px" }} onClick={() => goToday()}>
            오늘
          </S.HeadBtn>
          <S.HeadBtn onClick={next}>&gt;</S.HeadBtn>
        </S.HeadBtnBox>
      </S.HeadNav>
      <S.HeadDots>
        <Gitlab width="10px" />
        <p>발견</p>
        {workColors.map((workColor) => (
          <>
            <S.HeadDot background={workColor.color} />
            <p>{workColor.work}</p>
          </>
        ))}
      </S.HeadDots>
      <S.HeadDays>
        {DAY.map((elm, idx) => {
          return <S.HeadDay key={idx}>{elm}</S.HeadDay>;
        })}
      </S.HeadDays>
    </S.HeadForm>
  );
};

export default CalendarHead;
