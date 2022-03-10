// LIBRARY
import React, { useState } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import CalendarModal from "./CalendarModal";

// STYLE
import * as S from "./Calendar.styled";

// ICON
import { Gitlab } from "react-feather";

const CalendarDates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;
  const [openModal, setOpenModal] = useState(false);
  const Calendar = useSelector((state) =>
    props.path === "mypage" ? state.mypage.calendar : state.cat.calendar
  );
  //일한 날인지 아닌지 구분하기위해 변수를 선언 일한날이면 해당날짜가 클릭되면 모달이 열림
  let WorkDay = [];

  const workModalOpenHandler = () => {
    WorkDay.length > 0 && setOpenModal(true);
  };

  return (
    <>
      <S.DateForm onClick={workModalOpenHandler}>
        {(props.firstDate > 0 && props.idx > props.firstDate - 1) ||
        props.idx < props.lastDate ? (
          ""
        ) : (
          <S.DateNum
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            findToday={findToday}
          >
            <S.TodayCSS findToday={findToday}>
              <span>{elm}</span>
            </S.TodayCSS>

            <S.Dots>
              {Calendar &&
                Calendar.filter(
                  (workDate) =>
                    workDate.date[2] === elm && workDate.date[1] === month
                )
                  .sort()
                  .map((workDate, idx) => {
                    WorkDay.unshift(workDate.date[2]);
                    const workIcons = [
                      {
                        work: workDate.food,
                        background: ({ theme }) => theme.colors.lightBrown,
                      },
                      {
                        work: workDate.water,
                        background: ({ theme }) => theme.colors.skyBlue,
                      },
                      {
                        work: workDate.snack,
                        background: ({ theme }) => theme.colors.lightGreen,
                      },
                    ];
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          margin: "auto",
                        }}
                      >
                        <Gitlab width="5px" height="5px" />
                        {workIcons.map((workIcon, index) => (
                          <S.Dot
                            key={index}
                            background={workIcon.background}
                            work={workIcon.work}
                          />
                        ))}
                      </div>
                    );
                  })}
            </S.Dots>
          </S.DateNum>
        )}
      </S.DateForm>
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

export default CalendarDates;
