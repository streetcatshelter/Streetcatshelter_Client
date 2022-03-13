// STYLE
import styled from "styled-components";
// ICON
import Favorite from "@material-ui/icons/Favorite";
// ELEMENTS
import { TextArea, Button } from "elements/index";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 30px auto 15px auto;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`;

export const CommentCnt = styled.div`
  display: flex;
`;

export const Text = styled.span`
  font-weight: 700;
  size: 16px;
  margin-right: 5px;
  line-height: 20px;
`;
export const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  background: ${({ theme }) => theme.colors.yellow};
`;

export const LikedBox = styled.div`
  display: flex;
`;

export const FavoriteIcon = styled(Favorite)`
  color: ${(props) => (props.liked ? "red" : "gray")};
  position: relative;
  bottom: 2px;
  cursor: pointer;
  margin-right: 5px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentTextArea = styled(TextArea)`
  border-radius: 10px;
  padding: 5px;
  min-height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
`;

export const WriteBtn = styled(Button)`
  background: ${({ theme }) => theme.colors.lightYellow};
  width: 50px;
  display: flex;
  position: relative;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 3px;
`;
