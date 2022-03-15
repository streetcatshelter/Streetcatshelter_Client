import React, { useState } from "react";
import * as S from "./Location.styled";

const MapModal = ({ placeList, pagination }) => {
  console.log(pagination);
  const totalPage = pagination.totalCount / pagination.perPage;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [];
  for (let i = 1; i < totalPage + 1; i++) {
    pages.push(i);
  }

  const changePageHandler = (page) => {
    setCurrentPage(page);
    pagination.gotoPage(page);
  };
  return (
    <S.Window>
      <S.ListNum>총{pagination.totalCount}개의 결과</S.ListNum>
      <S.ListDesc>
        {placeList &&
          placeList.map((place, idx) => {
            console.log(place);
            return (
              <S.List key={place.id}>
                <S.ListNum>{idx + 1}</S.ListNum>
                <S.ListDesc>
                  <p>{place.place_name}</p>
                  <span>{place.address_name}</span>
                </S.ListDesc>
              </S.List>
            );
          })}
      </S.ListDesc>
      <S.PagenationWrap>
        {pages.map((page) => {
          return (
            <S.TotalPage
              currentPage={currentPage === page}
              onClick={() => changePageHandler(page)}
            >
              {page}
            </S.TotalPage>
          );
        })}
      </S.PagenationWrap>
    </S.Window>
  );
};

export default MapModal;
