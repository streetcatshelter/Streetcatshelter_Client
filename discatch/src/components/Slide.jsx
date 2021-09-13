import React from "react";
import onboadingImg from "../styles/images/onboadingImg(1).svg";
const Slide = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: "360px", height: "80%" }}
        src={onboadingImg}
        alt={onboadingImg}
      />
      <p
        style={{
          position: "absolute",
          top: "68%",
          left: "15%",
          fontWeight: "700",
        }}
      >
        우리동네 고양이의 집사가 되어보세요!
      </p>
    </div>
  );
};

export default Slide;
