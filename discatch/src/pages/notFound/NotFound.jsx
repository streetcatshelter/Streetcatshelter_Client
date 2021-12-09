// LIBRARY
import React from "react";

// COMPONENTS
import { Template } from "../../components";

// ELEMENTS
import { Button, Text } from "../../elements";

// IMAGE
import NotFoundCatImage from "../../styles/images/NotFoundCat.svg";

// REDUX
import { history } from "../../redux/configureStore";

const NotFound = (props) => {
  return (
    <Template props={props}>
      <Text size="30px" fontWeight="700">
        {" "}
        404 Error!!!
      </Text>
      <img src={NotFoundCatImage} alt={NotFoundCatImage} />
      <Button
        bgColor="yellow"
        clickEvent={() => {
          history.push("/");
        }}
      >
        <Text fontWeight="700">메인으로 돌아가기</Text>
      </Button>
    </Template>
  );
};

export default NotFound;
