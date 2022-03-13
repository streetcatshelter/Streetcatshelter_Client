// STYLE
import styled from "styled-components";
export const Wrap = styled.div`
  width: 95%;
  border-bottom: 0.2px solid ${({ theme }) => theme.colors.green};
  padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  line-height: 15px;
  justify-content: space-between;
`;
export const UserInfoBox = styled.div`
  display: flex;
  span {
    font-size: 10px;
    line-height: 30px;
    margin-left: 5px;
  }
`;
export const Profile = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    margin: 0px 5px;
    line-height: 30px;
    font-weight: bold;
  }
`;

export const DeleteBox = styled.div`
  display: flex;
  line-height: 15px;
  cursor: pointer;
  align-items: center;
  svg {
    line-height: 14px;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

export const CommentText = styled.p`
  font-size: 14px;
`;
