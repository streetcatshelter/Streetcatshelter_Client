// LIBRARY
import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";

import { Toast } from "..";
// STYLE
import styled from "styled-components";

// ICON
import { Search } from "react-feather";

// REDUX
import { saveVillage } from "../../redux/modules/mypage";

const SearchAddress = (props) => {
  const dispatch = useDispatch();
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [ToastStatus, setToastStatus] = useState(false);

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1500);
    }
  }, [ToastStatus]);
  const onChangeOpenPost = () => {
    if (isOpenPost === false && props.Village.length === 3) {
      setToastStatus(true);
    } else {
      setIsOpenPost(!isOpenPost);
    }
  };

  const onCompletePost = (data) => {
    let fullAddr = `${data.sido} ${data.sigungu} ${data.bname}`;
    if (fullAddr.split(" ").length === 4) {
      fullAddr = `${data.sigungu} ${data.bname}`;
    }
    let extraAddr = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    if (
      props.Village[0]?.split(" ")[2] !== data.bname &&
      props.Village[1]?.split(" ")[2] !== data.bname &&
      props.Village[2]?.split(" ")[2] !== data.bname
    ) {
      dispatch(saveVillage(`${fullAddr.split(" (")[0]}`));
    } else {
      alert("이름이 같은 동은 한 곳만 등록 가능합니다.");
    }
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: " translate(-50%, -50%)",
    boxShadow:
      "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
    maxWidth: "420px",
    width: "100vw",
    height: "50vh",
    minHeight: " 450px",
    borderRadius: "20px",
  };

  return (
    <>
      <SearchButton onClick={onChangeOpenPost}>
        <p>동네검색하기</p>
        <Search />
      </SearchButton>
      {isOpenPost ? (
        <Background>
          <Overlay onClick={() => setIsOpenPost(!isOpenPost)} />
          <DaumPostcode
            style={postCodeStyle}
            autoClose
            onComplete={onCompletePost}
          />
        </Background>
      ) : null}
      {ToastStatus && (
        <Toast
          message="최대 3동네까지 등록하실 수 있습니다"
          message2="수정을 원하시면 동네 삭제 후 다시 시도해주세요!"
        />
      )}
    </>
  );
};

const SearchButton = styled.div`
  background: #f9c852;
  width: 75%;
  height: 32px;
  border: none;
  border-radius: 10px;
  justify-content: center;
  margin: 10px auto 0px;
  display: flex;
  cursor: pointer;
  p {
    width: 100px;
    margin: auto;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
  }
  svg {
    width: 16px;
    margin: auto;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default SearchAddress;
