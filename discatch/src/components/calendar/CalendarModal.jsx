// LIBRARY
import React, { useEffect } from "react";

// STYLE
import { CheckSquare } from "react-feather";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";

const CalendarModal = (props) => {
  const { elm, month, year, setOpenModal } = props;
  const dispatch = useDispatch();
  const WorkDetail = useSelector((state) => state.mypage.calendardetail);

  useEffect(() => {
    dispatch(mypageActions._getCalenderDetail(year, month, elm));
  }, [year, month, elm, dispatch]);
  return (
    <>
      <Background>
        <Form>
          <Head>
            <Header>
              <p>
                dis<span>C</span>
                <span>A</span>
                <span>T</span>ch
              </p>
            </Header>
            <ViewDate>
              <span>활동일지</span>({year}년{month}월{elm}일)
            </ViewDate>
          </Head>

          <Events>
            {WorkDetail.map((EachCatWork, idx) => {
              return (
                <EventBox>
                  😺 고양이이름: {EachCatWork.catName}
                  <ul>
                    {EachCatWork.food ? (
                      <li>
                        <CheckSquare />
                        밥주기
                      </li>
                    ) : (
                      ""
                    )}
                    {EachCatWork.water ? (
                      <li>
                        <CheckSquare />
                        급수하기
                      </li>
                    ) : (
                      ""
                    )}
                    {EachCatWork.snack ? (
                      <li>
                        <CheckSquare />
                        간식주기
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </EventBox>
              );
            })}
          </Events>
          <Footer>
            <Close
              onClick={() => {
                setOpenModal(false);
              }}
            >
              닫기
            </Close>
          </Footer>
        </Form>
      </Background>
    </>
  );
};
const Background = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Form = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: #fef7ea;
  text-align: center;
  color: black;
  z-index: 99;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  border-bottom: 0.5 px solid #d3d3d3;
  height: 30px;
  margin: auto;
  padding-top: 20px;
  color: #b5bb19;
  p {
    margin: 0px auto;
    font-size: 25px;
    font-weight: 700;
    color: #fbd986;
  }
  span {
    font-size: 30px;
    font-weight: 800;
    margin-left: -1.5px;
    color: #cbcf52;
    :nth-child(2) {
      color: #d19b61;
    }
  }
`;
const Head = styled.div`
  height: 30%;
`;

const ViewDate = styled.div`
  padding-top: 20px;
  font-size: 12px;
  span {
    font-size: 15px;
    margin-left: -2px;
    font-weight: 700;
  }
`;
const Events = styled.div`
  height: 150px;
  text-align: left;
  font-weight: 700;
  overflow-y: auto;
  font-size: 14px;
  padding: 0px 20px;
  ul {
    padding: 0px 20px;
    font-size: 12px;
    li {
      list-style: none;
      margin: 10px auto;
    }
    svg {
      margin: auto 4px -4px auto;
      width: 15px;
      height: 15px;
    }
  }
`;

const EventBox = styled.div``;
const Footer = styled.div`
  height: 20%;
`;

const Close = styled.div`
  margin: auto;
  margin-top: 10px;
  padding: auto;
  width: 80px;
  height: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #cbcf52;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
export default CalendarModal;
