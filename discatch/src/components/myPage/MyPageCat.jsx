import React from "react";
import styled from "styled-components";
import { Image, Text } from "../../elements";
import { FileText, MessageCircle } from "react-feather";
import { history } from "../../redux/configureStore";
const MyPageCat = () => {
  return (
    <div>
      <CatPost
        onClick={() => {
          history.push("/catdetail");
        }}
      >
        <Image width="80px" height="80px" margin="0px 20px 0px 0px" />
        <CatInfo>
          <p style={{ fontWeight: "800", fontSize: "14px" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
      <CatPost>
        <Image width="80px" height="80px" margin="0px 20px 0px 0px" />
        <CatInfo>
          <p style={{ fontWeight: "800", fontSize: "14px" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
      <CatPost>
        <Image width="80px" height="80px" margin="0px 20px 0px 0px" />
        <CatInfo>
          <p style={{ fontWeight: "800", fontSize: "14px" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
      <CatPost>
        <Image width="80px" height="80px" margin="0px 20px 0px 0px" />
        <CatInfo>
          <p style={{ fontWeight: "800", fontSize: "14px" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
      <CatPost>
        <Image width="80px" height="80px" margin="0px 20px 0px 0px" />
        <CatInfo>
          <p style={{ fontWeight: "800", fontSize: "14px" }}>뽀삐</p>
          <p>최근활동:2021-09-10</p>
          <p>나의 최근활동: 2021-09-03</p>
          <InfoIcon>
            <FileText width="15px" height="15px" /> <p>8</p>
            <MessageCircle width="15px" height="15px" /> <p>10</p>
          </InfoIcon>
        </CatInfo>
      </CatPost>
    </div>
  );
};

const CatPost = styled.div`
  background: rgba(255, 232, 188, 0.3);
  width: 100%;
  display: flex;
  margin: 10px 0px;
  p {
    font-size: 12px;
    line-height: 2px;
  }
`;

const CatInfo = styled.div`
  height: 80px;
`;

const InfoIcon = styled.div`
  display: flex;
  p {
    font-size: 12px;
    margin: auto 5px auto 2px;
  }
`;
export default MyPageCat;
