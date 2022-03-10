// STYLE
import styled, { css } from "styled-components";

export const Form = styled.div`
  grid-template-columns: repeat(7, 1fr);
  border-radius: 2px;
  width: 100%;
  display: grid;
  flex-flow: row wrap;
`;

export const DateForm = styled.li`
  background: ${({ theme }) => theme.colors.white};
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 55px;
  text-align: left;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  :nth-child(n + 1):nth-child(-n + 7) {
    border-top: none;
  }
  :nth-child(7n + 1),
  :nth-child(7n) {
    background-color: ${({ theme }) => theme.colors.lightGrayBG};
  }
  :nth-child(7n + 1) {
    border-left: none;
  }
  &:hover {
    filter: brightness(90%);
  }
`;
export const Dots = styled.div`
  display: flex;
  justify-content: flex-start;
  p {
    font-size: 12px;
  }
`;
export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  ${({ background, theme }) => {
    return css`
      background: ${theme.colors}.${background};
    `;
  }};
  margin: 2px;
  display: ${(props) => props.work};
`;
export const DateNum = styled.div`
  padding: auto;
  ${({ theme }) => {
    return css`
      ${(props) => props.idx < props.lastDate && `color:${theme.colors.gray};`};
      ${(props) =>
        props.firstDate > 0 &&
        props.idx > props.firstDate - 1 &&
        `
    color:${theme.colors.gray};
  `};
    `;
  }}
`;
export const TodayCSS = styled.div`
  span {
    margin: 2px;
    font-size: 12px;
  }
  ${({ theme }) => {
    return css`
      ${(props) =>
        props.findToday &&
        ` position: relative;
    width:20px;
    height:20px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    margin:3px 0px 0px 0px;
    color: ${theme.colors.black};
    background-color:${theme.colors.lightGreen};
 `}
    `;
  }}
`;

export const HeadDots = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: 20px;
  p {
    font-size: 12px;
    line-height: 20px;
    margin: 0px;
  }
`;
export const HeadDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  ${({ background, theme }) => {
    return css`
      background: ${theme.colors}.${background};
    `;
  }};
  margin: 5px;
  line-height: 20px;
`;
export const HeadForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 2px;
`;
export const HeadNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.7vw;
`;
export const HeadYear = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const HeadBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
`;
export const HeadBtn = styled.li`
  list-style: none;
  padding: auto;
  width: 30px;
  border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
`;
export const HeadDays = styled.div`
  display: flex;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export const HeadDay = styled.li`
  list-style: none;
  text-align: center;
  font-size: 12px;
  :nth-child(7n + 1),
  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  max-width: 420px;
  width: 100vw;
  height: 50vh;
  min-height: 450px;
  border-radius: 20px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1000;
  overflow: auto;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ModalHead = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalViewDate = styled.div`
  p {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    margin: auto;
    text-align: center;
    span {
      font-size: 12px;
    }
  }
`;
export const ModalCancleBox = styled.div`
  cursor: pointer;
  position: fixed;
  top: 4%;
  left: 85%;
  svg {
    width: 20px;
    height: 20px;
    margin: auto;
    padding: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightYellow};
  }
`;
export const ModalEvents = styled.div`
  height: 85%;
  width: 100%;
  margin: auto;
`;
export const ModalEventBox = styled.div`
  width: 90%;
  height: 100px;
  margin: auto;
  display: flex;
  border-bottom: 0.2px solid ${({ theme }) => theme.colors.lightGreen};
  cursor: ${(props) => props.path === "mypage" && " pointer"};
  &:hover {
    ${({ theme, path }) => {
      if (path === "mypage") {
        return css`
          background: ${theme.colors.ivory};
        `;
      }
    }};
  }
`;
export const ModalCatLeft = styled.div`
  width: 20%;
  min-width: 60px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @media screen and (max-width: 320px) {
      width: 60px;
      height: 60px;
    }
  }
`;
export const ModalCatRight = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
  p {
    margin: 5px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const ModalCatWorkBox = styled.div`
  width: 100%;
  display: flex;
`;
export const ModalCheckBox = styled.div`
  display: flex;
  svg {
    width: 18px;
    height: 18px;
    margin: 5px 0px;
  }
  p {
    font-size: 12px;
    margin: 5px 0px;
  }
`;
