import React from "react";
import { Link } from "react-router-dom";
import {
  LoginDiv,
  LoginInner,
  LoginForm,
  LoginButtons,
} from "../Style/LoginCss";

const Login = () => {
  return (
    <LoginDiv>
      <LoginInner>
        <p>로그인</p>
        <LoginForm>
          <div className="formItem">
            <div className="title">아이디</div>
            <input type="text" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="formItem">
            <div className="title">비밀번호</div>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
        </LoginForm>
        <LoginButtons>
          <button className="loginBtn">로그인</button>
          <Link to="/signup">
            <button className="signUpBtn">회원가입</button>
          </Link>
        </LoginButtons>
      </LoginInner>
    </LoginDiv>
  );
};

export default Login;
