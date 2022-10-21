import React from "react";
import {
  SignUpDiv,
  SignUpInner,
  SignUpForm,
  SignUpButtons,
} from "../Style/SignUpCss";

const SignUp = () => {
  return (
    <SignUpDiv>
      <SignUpInner>
        <p>회원가입</p>
        <SignUpForm>
        <div className="formItem">
            <div className="title">이름</div>
            <input type="text" placeholder="이름을 입력해주세요" />
          </div>
          <div className="formItem">
            <div className="title">아이디</div>
            <input type="text" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="formItem">
            <div className="title">비밀번호</div>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className="formItem">
            <div className="title">비밀번호 확인</div>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
        </SignUpForm>
        <SignUpButtons>
          <button className="signUpBtn">회원가입</button>
        </SignUpButtons>
      </SignUpInner>
    </SignUpDiv>
  );
};

export default SignUp;
