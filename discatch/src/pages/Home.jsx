import React from "react";

/* == components*/
import { CatPostList, Template } from "../components";

const Home = (props) => {
  return (
    <Template props={props}>
      <CatPostList />
    </Template>
  );
};

export default Home;
