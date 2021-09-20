// library
import React from 'react';
import styled, { css } from 'styled-components';

// element
import { Grid, Button } from '../../elements/index';

// icon
import { MoreHorizontal } from 'react-feather';

// style
import { flexBox } from '../../shared/style';

const EditModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={openModal}>
        <MoreHorizontal color="#cbcf5e" />
      </Button>

      <ModalContent showModal={showModal}></ModalContent>

      {showModal ? (
        <Background onClick={closeModal}>
          <Grid
            addstyle={() => {
              return css`
                ${flexBox()}
                flex-direction: column;
              `;
            }}
          >
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <Button
                bgColor="D_yellow"
                width="100%"
                padding="6%"
                fontSize="18px"
                fontWeight="bold"
                addstyle={() => {
                  return css`
                    border-bottom: 2px solid white;
                  `;
                }}
              >
                수정
              </Button>
              <Button
                bgColor="D_yellow"
                width="100%"
                padding="6%"
                fontSize="18px"
                fontWeight="bold"
                addstyle={() => {
                  return css`
                    border-bottom: 2px solid white;
                  `;
                }}
              >
                삭제
              </Button>
              <Button
                bgColor="D_yellow"
                width="100%"
                padding="6%"
                fontSize="18px"
                fontWeight="bold"
                onClick={closeModal}
              >
                닫기
              </Button>
            </ModalContainer>
          </Grid>
        </Background>
      ) : null}
    </>
  );
};

const ModalContent = styled.div``;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 37.5%;
  background: rgb(249, 200, 82);
  /* transition: all 400ms ease-in-out; */
`;

export default EditModal;
