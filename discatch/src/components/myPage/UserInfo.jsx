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
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const [NickName, setNickName] = useState(UserInfo.nickname);
  const Village = useSelector((state) => state.mypage.userVillage);
  const [fileUrl, setFileUrl] = useState(null);

  //토스트모달
  const [ToastStatus, setToastStatus] = useState(false);
  const [SecondToastStatus, setSecondToastStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1500);
    } else if (SecondToastStatus) {
      setTimeout(() => {
        setSecondToastStatus(false);
      }, 1500);
    }
  }, [ToastStatus, SecondToastStatus]);

  const changeNickName = (e) => {
    setNickName(e.target.value);
  };

  const EditMyInfo = () => {
    if (NickName === "") {
      setToastStatus(true);
    } else if (Village.length === 0) {
      setSecondToastStatus(true);
    } else {
      setEditStatus(true);
      setTimeout(() => {
        dispatch(mypageActions._editMyInfo(NickName, Village));
      }, 1000);
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

  useEffect(() => {
    if (editStatus) {
      setTimeout(() => {
        setEditStatus(false);
      }, 1500);
    }
  }, [editStatus]);

  return (
    <React.Fragment>
      {ToastStatus ? (
        <Toast message="닉네임을 입력해주세요!" />
      ) : SecondToastStatus ? (
        <Toast message="동네를 입력해주세요!" />
      ) : (
        ""
      )}
      {editStatus && <Toast message="사용자 정보가 수정됐어요!" />}
      <Wrapper>
        <Inner>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            onChange={changeNickName}
            defaultValue={NickName}
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
          {Village.length > 0 ? (
            <VillageWrap>
              {Village.map((village, key) => {
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
        <SearchAddress Village={Village} />

        <Inner>
          <button onClick={EditMyInfo}>등록</button>
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
