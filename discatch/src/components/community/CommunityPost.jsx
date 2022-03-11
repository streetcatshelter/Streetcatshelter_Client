// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";

// ICON
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MessageCircle, Eye } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

// REDUX
import { history } from "redux/configureStore";

// ROUTE
import { useLocation } from "react-router-dom";

//utils
import { dateFormat } from "utils";

const CommunityPost = ({ community }) => {
  const path = useLocation();
  const location = path.pathname.split("/")[2];
  const communityId = community.communityId;
  const category = path.pathname.split("/")[3];
  let name;
  if (community.nickname === "" || community.nickname === null) {
    name = community.username;
  } else {
    name = community.nickname;
  }

  return (
    <CommunityPostStyle
      onClick={() =>
        history.push(
          `/community/${location}/${category}/postdetail/${communityId}`
        )
      }
    >
      <UserInfoBox>
        <RightBox>
          <Avatar
            src={community.profileImageUrl}
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          />
          <p>{name}</p>
        </RightBox>
        <p>{dateFormat(community.createdAt)}</p>
      </UserInfoBox>

      <ContentBox>
        <p fontWeight={"bold"} margin={"8px 0 -4px 0"}>
          {community.title}
        </p>
      </ContentBox>
      <InfoBox>
        <IconBox>
          <Eye />
          <p size={"12px"} fontWeight={"bold"} width="35px">
            {String(community.cntView).length > 3
              ? `${String(community.cntView)[0]}${"0".repeat(
                  String(community.cntView).length - 4
                )}K`
              : community.cntView}
          </p>
        </IconBox>
        <IconBox>
          <MessageCircle />
          <p size={"12px"} fontWeight={"bold"} width="35px">
            {String(community.cntComment).length > 3
              ? `${String(community.cntComment)[0]}${"0".repeat(
                  String(community.cntComment).length - 4
                )}K`
              : community.cntComment}
          </p>
        </IconBox>
        <IconBox>
          <FavoriteIcon
            style={{
              color: community.cntLikeit > 0 ? "red" : "gray",
            }}
          />
          <p size={"12px"} fontWeight={"bold"} width="35px">
            {String(community.cntLikeit).length > 3
              ? `${String(community.cntLikeit)[0]}${"0".repeat(
                  String(community.cntLikeit).length - 4
                )}K`
              : community.cntLikeit}
          </p>
        </IconBox>
      </InfoBox>
    </CommunityPostStyle>
  );
};

const CommunityPostStyle = styled.div`
  background: rgb(${(props) => props.theme.palette.diaryColor});
  width: 100%;
  cursor: pointer;
  margin: 5px auto;
  p {
    margin: 0px;
    line-height: 20px;
  }
  &:hover {
    filter: brightness(90%);
  }
`;
const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  height: 40px;
  margin: auto;
  p {
    font-size: 12px;
  }
`;
const RightBox = styled.div`
  display: flex;
  height: 30px;
  p {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 900;
  }
`;
const ContentBox = styled.div`
  width: 90%;
  height: 30px;
  margin: auto;
  p {
    font-size: 14px;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const InfoBox = styled.div`
  display: flex;
  width: 93%;
  height: 20px;
  margin: auto;
  justify-content: flex-end;
`;
const IconBox = styled.div`
  display: flex;
  margin-left: 10px;
  line-height: 20px;
  align-items: center;
  svg {
    width: 15px;
    height: 15px;
    margin-right: 1px;
  }
  p {
    font-size: 14px;
  }
`;

export default CommunityPost;
