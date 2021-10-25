// LIBRARY
import React from 'react'

// ELEMENTS
import { Grid, Image } from "../../elements/index";

// STYLE
import { css } from "styled-components";

// ROUTE
import { useLocation } from "react-router-dom";

const CommunityPreview = (preview) => {
    let previewImage; 
    const path = useLocation();
    const pathLength = path.pathname.split('/').length
    let newImage = preview?.preview[preview?.previewNum]?.preview;
    if (pathLength === 6) {
      newImage = preview?.preview[preview?.previewNum - preview.imageNum]?.preview;
      previewImage = preview?.imageList[preview?.previewNum]?.image;
    }
    return (
        <>
        {pathLength === 5 ? (<Grid
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
                  <Image src={newImage} width="100%" height="100%"/>
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
                src={previewImage || newImage} 
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

export default CommunityPreview;