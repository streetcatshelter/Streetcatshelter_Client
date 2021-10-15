import React, { useEffect } from "react";

/* == components*/
import { ProgressBar, Calendar } from "..";

/* == Library - style */
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";
const Mywork = () => {
  // const NoticeList = useSelector((state) => state.mypage.noticelist);
  // console.log(NoticeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mypageActions._getCalender());
  }, []);
  return (
    <Wrapper>
      <p>
        이달의 disCATch : 20일 <span>아주 멋져요 !!!😻👍</span>
      </p>
      <ProgressBar />
      <Calendar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 10px auto;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
  }
  span {
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export default Mywork;
