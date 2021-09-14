import React from "react";
import styled from "styled-components";
import { Image, Text } from "../../elements";
import { FileText, MessageCircle } from "react-feather";

const MyPageCat = () => {
  return (
    <Wrapper>
      <CatPost>
        <Image width="80px" height="80px" />
        <CatInfo>
          <p style={{ fontWeight: "800" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(255, 232, 188, 0.3);
  margin-top: 10px;
`;

const CatPost = styled.div`
  width: 80%;
  display: flex;
  p {
    font-size: 12px;
    line-height: 2px;
  }
`;

const CatInfo = styled.div`
  margin: auto;
  height: 80px;
`;

const InfoIcon = styled.div`
  display: flex;

  p {
    font-size: 12px;
  }
`;
export default MyPageCat;
