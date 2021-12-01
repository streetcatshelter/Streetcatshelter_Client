// LIBRARY
import React from "react";
import { useDispatch } from "react-redux";

// ELEMENTS
import { Grid, p, Image } from "../../elements";

// REDUX
import { history } from "../../redux/configureStore";
import { __catLike } from "../../redux/modules/cat";

// STYLE
import styled, { css } from "styled-components";
import { flexBox } from "../../shared/style";

// ICON
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MoreHorizontal } from "react-feather";

const CatPost = ({ cat, location, path, pathLocation }) => {
  const dispatch = useDispatch();
  const catId = cat.catId;
  const userLiked = cat.userLiked;
  const likeToggle = () => {
    dispatch(__catLike(catId, location, path));
  };
  const CatDetailBtn = () => {
    if (path !== "detail") {
      history.push(`/catdetail/${pathLocation}/${cat.catId}`);
    } else return;
  };

  return (
    <CatPostStyle>
      <RightBox>
        <CatImage
          src={cat.catImage}
          alt={cat.catImage}
          onClick={CatDetailBtn}
        />
      </RightBox>

      <LeftBox>
        <Header>
          <p onClick={CatDetailBtn}>
            이름: {cat.catName ? cat.catName : "이름을 지어주세요!"}
          </p>

          <p onClick={CatDetailBtn}> 중성화: {cat.neutering}</p>

          {path === "detail" && (
            <MoreHorizontalBtn
              style={{ color: "rgb(249, 200, 82)" }}
              onClick={() => history.push(`/catinfoedit/${catId}`)}
            />
          )}
        </Header>
        <BodyBox>
          <TagOutBox onClick={CatDetailBtn}>
            {cat.catTagList?.map((tag, idx) => {
              return <TagBox key={idx}>#{tag.tag}</TagBox>;
            })}
          </TagOutBox>
          <LikeBox>
            {" "}
            <FavoriteIcon
              onClick={likeToggle}
              style={{
                color: userLiked ? "red" : "gray",
              }}
            />
          </LikeBox>
        </BodyBox>
      </LeftBox>
    </CatPostStyle>
  );
};
const MoreHorizontalBtn = styled(MoreHorizontal)`
  &:hover {
    color: #cbcf52;
  }
`;

const CatPostStyle = styled.div`
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width: 100%;
  display: flex;
  margin: 5px auto;
  p {
    margin: 0px;
    line-height: 20px;
  }
`;
const RightBox = styled.div`
  width: 20%;
  min-width: 80px;
`;

const CatImage = styled.img`
  width: 80px;
  height: 80px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80px;
  p {
    font-size: 14px;
    font-weight: 900;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: auto;
  cursor: pointer;
  p {
    font-size: 12px;
    margin-left: 5px;
    :nth-child(2) {
      margin-left: 10px;
    }
  }
`;
const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  height: 40px;
`;

const TagOutBox = styled.div`
  display: flex;
  width: 280px;
  flex-wrap: wrap;
  overflow: hidden;
=
`;
const TagBox = styled.div`
  height: 25px;
  width: auto;
  border-radius: 20px;
  margin: 5px 10px 5px 0px;
  padding: 0px 5px 3px 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  background: #fbd986;
`;
const LikeBox = styled.div`
  width: 30px;
`;

export default CatPost;
