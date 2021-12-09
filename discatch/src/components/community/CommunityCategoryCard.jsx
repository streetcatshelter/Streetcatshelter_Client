// LIBRARY
import React from "react";

// ELEMENTS
import { Image, Text } from "../../elements/index";

// STYLE
import styled, { css } from "styled-components";

const CommunityCategoryCard = ({
  src,
  width,
  height,
  title,
  subtitle,
  clickEvent,
}) => {
  return (
    <>
      <CardStyle onClick={clickEvent}>
        <Image
          src={src}
          width={width}
          height={height}
          addstyle={() => {
            return css`
              margin: 0 20px 0 0;
            `;
          }}
        />
        <div>
          <Text
            fontWeight="bold"
            size="20px"
            addstyle={() => {
              return css`
                position: relative;
                top: 20px;

                @media screen and (max-width: 320px) {
                  font-size: 15px;
                }
              `;
            }}
          >
            {title}
          </Text>
          <Text
            size="14px"
            addstyle={() => {
              return css`
                position: relative;
                top: 30px;
                @media screen and (max-width: 320px) {
                  font-size: 11px;
                }
              `;
            }}
          >
            {subtitle}
          </Text>
        </div>
      </CardStyle>
    </>
  );
};

CommunityCategoryCard.defaultProps = {
  clickEvent: () => {},
};

const CardStyle = styled.div`
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width: 100%;
  height: 100px;
  margin: 20px auto;
  display: flex;
  cursor: pointer;
  @media screen and (max-height: 736px) {
    margin: 15px auto;
  }
  &:hover {
    filter: brightness(90%);
  }
`;

export default CommunityCategoryCard;
