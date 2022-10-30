import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";
import {
  LoginDiv,
  LoginInner,
  LoginForm,
  LoginButtons,
} from "../Style/LoginCss";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    if (!(userID && userPW)) {
      return alert("모든 값을 입력해주세요!");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(userID, userPW);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setErrMessage("존재하지 않은 이메일입니다.");
      } else if (err.code === "auth/worng-password") {
        setErrMessage("비밀번호가 일치하지 않습니다.");
      } else {
        setErrMessage("로그인에 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrMessage("");
    }, 4000);
  }, []);

  return (
    <LoginDiv>
      <LoginInner>
        <p className="loginTitle">로그인</p>
        <LoginForm>
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
        </LoginForm>
        <LoginButtons>
          {errMessage !== "" && <p>{errMessage}</p>}
          <button className="loginBtn" onClick={onLogin}>
            로그인
          </button>
          <Link to="/signup">
            <button className="signUpBtn">회원가입</button>
          </Link>
        </LoginButtons>
      </LoginInner>
    </LoginDiv>
  );
};

export default Login;
