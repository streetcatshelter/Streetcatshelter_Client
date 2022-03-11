import React, { useEffect } from "react";
// REDUX
import { __getGallery } from "redux/modules/cat";
import { history } from "redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
//styles
import * as S from "./CatGallery.styled";

const CatGallery = ({ location, catId }) => {
  const dispatch = useDispatch();
  const galleryList = useSelector((state) => state.cat.gallery);

  useEffect(() => {
    dispatch(__getGallery(catId));
  }, [catId, dispatch]);

  return (
    <S.GalleryWrap>
      {galleryList.map((gallery, idx) => {
        return (
          <S.CardContainer
            key={gallery.catDetailId}
            onClick={() =>
              history.push(
                `/catdetailinfo/${location.split(" ")[2]}/${
                  gallery.catDetailId
                }`
              )
            }
          >
            <img src={gallery.catImages} alt="catgalleryimage" />
          </S.CardContainer>
        );
      })}
    </S.GalleryWrap>
  );
};

export default CatGallery;
