import React, { useState } from "react";

// STYLE
import * as S from "./Location.styled";
const MapModal = ({ placeList, pagination }) => {
  console.log(placeList);
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
      <S.ListNum></S.ListNum>
      <S.ListDesc>
        {placeList &&
          placeList.map((place) => {
            return (
              <div key={place.id}>
                <span>{place.place_name}</span>
              </div>
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
