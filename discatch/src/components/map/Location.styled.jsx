// STYLE
import styled from "styled-components";
import { X } from "react-feather";
import { RefreshCcw } from "react-feather";
// ELEMENTS
import { Button } from "elements/index";
export const FloatBtn = styled(Button)``;

export const SearchBox = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.lightYellow};
  height: 30px;
  border-radius: 15px;
  margin: 10px auto;
  @media screen and (max-width: 280px) {
    width: 250px;
  }
`;

export const RefreshBtn = styled(RefreshCcw)`
position: relative;
top: 50px;
zIndex: 2;,
width: 40px;
cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 250px;
  border: none;
  marginright: 20px;
  outline: none;
  height: 25px;
`;
export const SumbmitBtn = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  width: 80px;
  height: 30px;
  borderradius: 15px;
  cursor: pointer;
  span {
    margin: 5px auto;
    text-align: center;
    font-weight: 900;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 500px;
`;
export const CloseModal = styled(X)`
  display: ${(props) => (props.listvisible ? "block" : "none")};
  cursor: pointer;
  z-index: 1000;
`;
export const Window = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  max-width: 200px;
  position: fixed;
  width: 50vw;
  min-width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  overflow: auto;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-height: 568px) {
    height: 400px;
    margin-top: 40px;
  }
`;
export const ListWrap = styled.div`
  width: 90%;
  height: 95%;
  margin: 10px auto;
  padding: 5px;
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
`;
export const MapWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80vh;
  @media screen and (max-height: 568px) {
    margin: 10px 0;
  }
`;
export const List = styled.div`
  margin-top: 20px;
  padding: 10px 0px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.lightYellow};
    border-radius: 10px;
  }
`;
export const ListNum = styled.span`
  font-weight: 900;
  margin: 0px 10px;
`;
export const ListDesc = styled.div`
  p {
    margin: 0px;
    font-weight: 900;
    font-size: 12px;
  }
  span {
    font-size: 10px;
  }
`;
export const TotalPage = styled.p`
  font-weight: 900;
  margin: 5px 0px;
  background: ${(props) => props.currentPage && props.theme.colors.lightYellow};
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  padding: 1px 1px 2px 1px;
`;
export const PagenationWrap = styled.div`
  margin: 10px auto;
  text-align: center;
  display: flex;
`;

export const InfoWindow = styled.div`
  display: flex;
`;
