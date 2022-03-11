import styled from "styled-components";

export const CardWrap = styled.div`
  background: ${({ theme }) => theme.colors.diaryIvory};
  padding: 10px 15px;
  width: 95%;
  margin: 5px auto;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
`;

export const DiaryText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const CountBox = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 18px;
    margin-left: 5px;
  }
  svg:last-child {
    color: red;
  }
`;
