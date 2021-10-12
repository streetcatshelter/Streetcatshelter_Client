// LIBRARY
import React from 'react'

// ELEMENTS
import { Grid, Image } from "../../elements/index";

// STYLE
import styled, { css } from "styled-components";

// ROUTE
import { useLocation } from "react-router-dom";

const CommunityPreview = (preview) => {
    const previewImage = preview.preview[preview.previewNum]?.preview;
    const path = useLocation();
    console.log(preview);
    const pathLength = path.pathname.split('/').length
    console.log(path);
    let editImage = null;
    if (pathLength === 3) {
      editImage = preview?.preview[preview.previewNum-preview.imageNum]?.preview || preview?.imageList[preview.previewNum]?.image;
    }
    return (
        <>
        {pathLength === 3 ? (<Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      overflow-x: hidden;
                      top: 5.5px;
                    `;
                  }}
                >
                  <Image src={editImage} width="100%" height="100%"/>
                </Grid>) : (<Grid
            width="90px"
            height="90px"
            margin="0 5.5px"
            addstyle={() => {
                return css`
                position:relative;
                background: lightgray;
                display: inline-block;
                overflow-x: hidden;
                top: 5.5px;
                `;
            }}
            >
            
            <Image 
                src={previewImage} 
                width="100%" 
                height="100%" 
                addstyle={() => {
                return css`
                    position:relative;
                `;
                }}
            />
        </Grid>)}
        </>
    )
}

const DeleteButton = styled.button`
  width: 13px;
  height: 13px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  display:flex;
  border-radius: 13px;
  border: 0;
  background-color: lightgray;
`;

const EmptyButton = styled.button`
  width: 13px;
  height: 13px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  display:flex;
  border-radius: 13px;
  border: 0;
  background-color: transparent;
  color: transparent;
`;

export default CommunityPreview;