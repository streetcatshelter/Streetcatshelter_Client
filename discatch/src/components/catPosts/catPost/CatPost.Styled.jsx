import styled from "styled-components";
// ICON
import { MoreHorizontal } from "react-feather";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const MoreHorizontalBtn = styled(MoreHorizontal)`
  color: ${({ theme }) => theme.colors.yellow};
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
export const CatPostStyle = styled.div`
  background: ${({ theme }) => theme.colors.diaryIvory};
  width: 100%;
  height: 80px;
  display: flex;
  margin: 5px auto;
  cursor: pointer;
  p {
    margin: 0px;
    line-height: 20px;
  }
  &:hover {
    filter: brightness(90%);
  }
`;
export const LeftBox = styled.div`
  width: 20%;
  min-width: 80px;
  @media screen and (max-width: 320px) {
    width: 25%;
  }
`;
export const CatImage = styled.img`
  width: 80px;
  height: 80px;
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80px;
  cursor: auto;
  @media screen and (max-width: 400px) {
    width: 75%;
  }
  div {
    p {
      font-size: 14px;
      font-weight: 500;
      @media screen and (max-width: 320px) {
        font-size: 12px;
      }
    }
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: auto;
  p {
    cursor: pointer;
    font-size: 14px;
    margin-left: 5px;
    :nth-child(2) {
      margin-left: 10px;
    }
  }
`;
export const BodyBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  height: 40px;
`;
export const TagOutBox = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  overflow: hidden;
  margin-left: 5px;
  @media screen and (max-width: 320px) {
    width: 80%;
  }
`;
export const TagBox = styled.div`
  height: 25px;
  width: auto;
  border-radius: 20px;
  margin: 5px 10px 5px 0px;
  padding: 0px 5px 3px 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightYellow};
`;
export const LikeBox = styled.div`
  width: 24px;
  cursor: auto;
  margin: auto;
  width: 15%;
  @media screen and (max-width: 320px) {
    width: 20%;
  }
`;

export const FavoriteIconBtn = styled(FavoriteIcon)`
  position: relative;
  left: 12px;
  color: ${(props) => (props.userLiked ? "red" : "gray")};
  cursor: pointer;
`;
