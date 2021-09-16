import React from "react";
import styled from "styled-components";
const ProgressBar = () => {
  const workPercent = (20 / 30) * 100 + "%";
  console.log(workPercent);
  return (
    <div>
      <BarWrap>
        <Bar width={workPercent}></Bar>
      </BarWrap>
    </div>
  );
};

const BarWrap = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  border: 1px solid #f9c852;
  margin: 10px auto;
`;

const Bar = styled.div`
  background: #f9c852;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.width};
`;

export default ProgressBar;
