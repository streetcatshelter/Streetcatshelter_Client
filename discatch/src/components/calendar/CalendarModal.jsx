// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import * as S from "./Calendar.styled";

// ICON
import { X, CheckSquare } from "react-feather";

// REDUX
import { mypageActions } from "redux/modules/mypage";
import { __getCalendarDetail } from "redux/modules/cat";
import { history } from "redux/configureStore";

const CalendarModal = (props) => {
  const { elm, month, year, setOpenModal, path } = props;
  const dispatch = useDispatch();
  const workDetail = useSelector((state) =>
    path === "mypage" ? state.mypage.calendardetail : state.cat.calendardetail
  );
  const catId = useSelector((state) => state.cat.catinfo?.catId);
  const catName = useSelector((state) => state.cat.catinfo?.catName);

  useEffect(() => {
    path === "mypage"
      ? dispatch(mypageActions._getCalenderDetail(year, month, elm))
      : dispatch(__getCalendarDetail(catId, elm, month, year));
  }, [year, month, elm, catId, path, dispatch]);

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      <S.ModalBackground>
        <S.ModalOverlay onClick={closeModalHandler} />
        <S.ModalWindow>
          <S.ModalWrapper>
            <S.ModalHead>
              <S.ModalViewDate>
                {path === "mypage" ? (
                  <p>
                    집사일기
                    <span>
                      ({year}년{month}월{elm}일)
                    </span>
                  </p>
                ) : (
                  <p>
                    {catName} 를 위한 집사일기
                    <br />
                    <span>
                      ({year}년{month}월{elm}일)
                    </span>
                  </p>
                )}
              </S.ModalViewDate>
              <S.ModalCancleBox>
                <X onClick={closeModalHandler} />
              </S.ModalCancleBox>
            </S.ModalHead>
            <S.ModalEvents>
              {workDetail.map((eachCatWork, idx) => {
                const activities = [
                  { work: eachCatWork.food, workName: "밥주기" },
                  { work: eachCatWork.water, workName: "급수하기" },
                  { work: eachCatWork.snack, workName: "간식주기" },
                ];
                return (
                  <S.ModalEventBox
                    key={idx}
                    path={path}
                    onClick={() => {
                      if (path === "mypage") {
                        history.push({
                          pathname: `/catdetail/calendar/${eachCatWork.location}/${eachCatWork.catId}/1`,
                          state: { location: eachCatWork.location },
                        });
                      }
                    }}
                  >
                    <S.ModalCatLeft>
                      <img src={eachCatWork.catImage} alt="catImage" />
                    </S.ModalCatLeft>
                    <S.ModalCatRight>
                      {path === "mypage" && <p>이름: {eachCatWork.catName}</p>}
                      <p>동네: {eachCatWork.location}</p>

                      <S.ModalCatWorkBox>
                        <p>활동: </p>
                        {activities.map(
                          (activity) =>
                            activity.work && (
                              <S.ModalCheckBox key={activity.workName}>
                                <CheckSquare />
                                <p>{activity.workName}</p>
                              </S.ModalCheckBox>
                            )
                        )}
                      </S.ModalCatWorkBox>
                    </S.ModalCatRight>
                  </S.ModalEventBox>
                );
              })}
            </S.ModalEvents>
          </S.ModalWrapper>
        </S.ModalWindow>
      </S.ModalBackground>
    </>
  );
};

export default CalendarModal;
