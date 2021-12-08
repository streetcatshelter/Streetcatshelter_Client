// LIBRARY
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import styled from "styled-components";

// ICON
import { XCircle, Upload } from "react-feather";

// COMPONENTS
import { SearchAddress, Toast } from "..";

// REDUX
import { deleteVillage, mypageActions } from "../../redux/modules/mypage";
import { imgActions } from "../../redux/modules/image";

const UserInfo = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.mypage.userInfo);
  const [nickName, setNickName] = useState(userInfo.nickname);
  console.log(nickName);
  const village = useSelector((state) => state.mypage.userVillage);
  const [fileUrl, setFileUrl] = useState(null);

  //토스트모달
  const [toastState, setToastState] = useState(false);
  const [editToastState, setEditToastState] = useState(false);
  const [secondToastState, setSecondToastState] = useState(false);

  useEffect(() => {
    if (toastState) {
      setTimeout(() => {
        setToastState(false);
      }, 1500);
    } else if (secondToastState) {
      setTimeout(() => {
        setSecondToastState(false);
      }, 1500);
    } else if (editToastState) {
      setTimeout(() => {
        setEditToastState(false);
      }, 1500);
    }
  }, [toastState, secondToastState, editToastState]);

  const changeNickName = (e) => {
    const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
    if (regExp.test(e.target.value) || e.target.value.search(/\s/) !== -1) {
      setEditToastState(true);
    } else {
      setNickName(e.target.value);
    }
  };

  const EditMyInfo = () => {
    if (nickName === "" || nickName === null || nickName === undefined) {
      setToastState(true);
    } else if (village.length === 0) {
      setSecondToastState(true);
    } else {
      dispatch(mypageActions._editMyInfo(nickName, village));
    }
  };

  const processImage = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    dispatch(imgActions.setInitialState(imageUrl));
    dispatch(imgActions.setFile(imageFile));
    setFileUrl(imageUrl);
  };

  return (
    <React.Fragment>
      {toastState ? (
        <Toast message="닉네임을 입력해주세요!" />
      ) : secondToastState ? (
        <Toast message="동네를 입력해주세요!" />
      ) : editToastState ? (
        <Toast message="특수문자 및 공백을 사용할 수 없습니다." />
      ) : (
        ""
      )}

      <Wrapper>
        <Inner>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            onChange={changeNickName}
            defaultValue={nickName}
          />
        </Inner>
        <Inner>
          <p>프로필사진</p>
          <ImageLabel for="imgFile">
            <p>프로필 사진 업로드하기</p>
            <Upload />
          </ImageLabel>
          <ImageInput
            id="imgFile"
            name="imgFile"
            type="file"
            accept="image/png, image/jpeg"
            onChange={processImage}
          />
        </Inner>
        {fileUrl === null ? (
          ""
        ) : (
          <img
            style={{ width: "100px", height: "100px" }}
            src={fileUrl}
            alt={fileUrl}
          />
        )}
        <Inner>
          <p>내동네</p>
          {village.length > 0 ? (
            <VillageWrap>
              {village.map((village, key) => {
                const DeleteVillage = () => {
                  if (window.confirm("정말로 동네를 지우시겠습니까?")) {
                    dispatch(deleteVillage(village));
                  }
                };
                return (
                  <div
                    style={{ display: "flex", width: "90px", height: "20px" }}
                  >
                    <div> {village.split(" ")[2]}</div>

                    <XCircle
                      width="18px"
                      height="18px"
                      style={{ cursor: "pointer" }}
                      onClick={DeleteVillage}
                    />
                  </div>
                );
              })}
            </VillageWrap>
          ) : (
            ""
          )}
        </Inner>
        <SearchAddress Village={village} />

        <Inner>
          <button onClick={EditMyInfo} style={{cursor: 'pointer'}}>등록</button>
        </Inner>
      </Wrapper>
    </React.Fragment>
  );
};

const ImageInput = styled.input`
  display: none;
`;
const ImageLabel = styled.label`
  background: #f9c852;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 10px;
  justify-content: center;
  margin: 5px auto 0px;
  display: flex;
  cursor: pointer;
  p {
    width: 180px;
    margin: auto;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
  }
  svg {
    width: 16px;
    margin: auto;
  }
`;
const Inner = styled.div`
  width: 75%;
  display: inherit;
  flex-direction: inherit;
  margin-top: 10px;
  p {
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 700;
  }
  input {
    height: 35px;
    border: 1px solid #b5bb19;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 900;
    padding-left: 10px;
  }
  button {
    background: #cbcf52;
    width: 114px;
    height: 32px;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    justify-content: center;
    margin: 30px auto 0px;
  }
`;
const VillageWrap = styled.div`
  height: 35px;
  border: 1px solid #b5bb19;
  border-radius: 10px;
  display: flex;
  padding: 4px 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default UserInfo;
