import React from "react";
/* == Custom - Elements*/
import { Button, Text } from "../elements";
/* == Custom - Image */
import NotFoundCatImage from "../styles/images/NotFoundCat.svg";
/* == Redux  */
import { history } from "../redux/configureStore";

const NotFound = () => {
  return (
    <>
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
    </>
  );
};

export default NotFound;
