// LIBRARY
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ELEMENTS
import styled from "styled-components";

// REDUX
import { __getGallery } from "../../redux/modules/cat";
import { history } from "../../redux/configureStore";

const CatGallery = (props) => {
  const dispatch = useDispatch();
  const location = props.location;
  const catId = props.catId;

  const galleryList = useSelector((state) => state.cat.gallery);

  useEffect(() => {
    dispatch(__getGallery(catId));
  }, [catId, dispatch]);

  return (
    <div
      style={{
        width: "98%",
        height: "100%",
        display: "grid",
        margin: "auto",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "3px",
      }}
    >
      {galleryList.map((gallery, idx) => {
        return (
          <CardContainer
            key={idx}
            style={{
              width: "100%",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() =>
              history.push(`/catdetailinfo/${location}/${gallery.catDetailId}`)
            }
          >
            <img
              src={gallery.catImages}
              alt="catgalleryimage"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
          </CardContainer>
        );
      })}
    </div>
  );
};

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(252, 246, 222, 1);
  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

export default CatGallery;
