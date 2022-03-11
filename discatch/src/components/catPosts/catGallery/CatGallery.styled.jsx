import styled from "styled-components";

export const GalleryWrap = styled.div`
  width: 98%;
  height: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
`;
export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.diaryIvory};
  width: 100%;
  position: relative;
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
