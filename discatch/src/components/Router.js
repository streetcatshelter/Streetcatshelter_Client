import React from "react";
import { Switch, Route } from "react-router-dom";
// import Auth from "../shared/auth";
/* == Pages */
import {
  Home,
  Slider,
  MyPage,
  UserInfoWrite,
  CatInfoWrite,
  CatDetailInfoWrite,
  CatDetail,
  CommunityPostWrite,
  CommunityPostEdit,
  CommunityDetail,
  NotFound,
  CommunityPostDetail,
  Community,
} from "../pages";
// 배포 시 해당 라우트 삭제 예정
import test from "../pages/test";

// * == ( Router ) -------------------- * //
const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/slider" exact component={Slider} />
      <Route path="/mypage" exact component={MyPage} />
      <Route path="/userinfowrite" exact component={UserInfoWrite} />
      <Route path="/catinfowrite" exact component={CatInfoWrite} />
      <Route path="/catdetailinfowrite" exact component={CatDetailInfoWrite} />
      <Route path="/catdetail" exact component={CatDetail} />
      <Route path="/communitypostwrite" exact component={CommunityPostWrite} />
      <Route path="/communitypostedit" exact component={CommunityPostEdit} />
      <Route path="/community/catinfo" exact component={CommunityDetail} />
      <Route path="/community/gathering" exact component={CommunityDetail} />
      <Route path="/community/sharing" exact component={CommunityDetail} />
      <Route path="/communitypostdetail" exact component={CommunityPostDetail}/>
      <Route path="/community" exact component={Community} />
      <Route path="/test" exact component={test} />
      <Route path={"*"} exact component={NotFound} />
    </Switch>
  );
};

export default Router;
