import React from "react";
import { CatPostDetail } from "../components";
import { Button } from "../elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { history } from "../redux/configureStore";
const CatDetail = () => {
  return (
    <React.Fragment>
      <CatPostDetail />
      <Button
        is_float="is_float"
        clickEvent={() => {
          history.push("/catdetailinfowrite");
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
      </Button>
    </React.Fragment>
  );
};

export default CatDetail;
