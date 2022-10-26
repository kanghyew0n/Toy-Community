import React, { useState } from "react";
import firebase from "../firebase";
import "firebase/compat/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  SignUpDiv,
  SignUpInner,
  SignUpForm,
  SignUpButtons,
} from "../Style/SignUpCss";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userPWCheck, setUserPWCheck] = useState("");
  const [userNameCheck, setUserNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("");
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const onSignUp = async () => {
    setFlag(true);
    if (!(userName && userID && userPW && userPWCheck)) {
      return alert("모든 값을 채워주세요!");
    }
    if (userPW !== userPWCheck) {
      return alert("비밀번호가 일치하지 않습니다!");
    }

    if (userNameCheck) {
      return alert("중복 검사를 해주세요!");
    }

    // 파이어베이스에 값을 채우기 전까지 기다려주쎄용~
    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(userID, userPW);

    await createdUser.user.updateProfile({
      displayName: userName,
    });
    
    console.log("createdUser", createdUser);
    const body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };

    axios.post("/api/user/register", body).then((res) => {
      setFlag(false);
      if (res.data.success) {
        navigate("/login");
      } else {
        return alert("회원가입에 실패하였습니다.");
      }
    });
  };

  const handleCheckUserName = () => {
    if (!userName) {
      return alert("닉네임을 입력해주세요!");
    }
    const body = {
      displayName: userName,
    };
    axios.post("/api/user/namecheck", body).then((res) => {
      if (res.data.success) {
        if (res.data.check) {
          setUserNameCheck(true);
          setNameInfo("사용 가능한 닉네임입니다.");
        } else {
          setNameInfo("사용 불가능한 닉네임입니다.");
        }
      }
    });
  };

  return (
    <SignUpDiv>
      <SignUpInner>
        <p>회원가입</p>
        <SignUpForm>
          <div className="formItem">
            <div className="title">닉네임</div>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={userNameCheck}
            />
            <div className="nameCheck">
              <p>{nameInfo}</p>
              <button onClick={handleCheckUserName}>중복검사</button>
            </div>
          </div>
          <div className="formItem">
            <div className="title">아이디</div>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div className="formItem">
            <div className="title">비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={userPW}
              onChange={(e) => setUserPW(e.target.value)}
            />
          </div>
          <div className="formItem">
            <div className="title">비밀번호 확인</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={userPWCheck}
              onChange={(e) => setUserPWCheck(e.target.value)}
            />
          </div>
        </SignUpForm>
        <SignUpButtons>
          <button className="signUpBtn" onClick={onSignUp} disabled={flag}>
            회원가입
          </button>
        </SignUpButtons>
      </SignUpInner>
    </SignUpDiv>
  );
};

export default SignUp;