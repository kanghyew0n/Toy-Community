import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../constant";

const LoginDiv = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginInner = styled.div`
  width: 500px;
  border: 1px solid #333;
  font-family: "Galmuri9";
  padding: 50px;

  p {
    text-align: center;
    font-size: 18px;
    margin-bottom: 32px;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 50px 30px;
    width: 90%;
    p {
      font-size: 14px;
    }
    .loginTitle {
      font-size: 18px;
    }
  }
`;

const LoginForm = styled.div`
  height: 100%;

  .formItem {
    margin-bottom: 20px;
    .title {
      margin-bottom: 12px;
      font-size: 12px;
    }
  }

  .formItem:nth-of-type(2) {
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    font-size: 12px;
    padding: 10px;
    border: 1px solid #666;
    background-color: #000;

    &:focus {
      outline: 1px solid #eee;
      /* 01FF30 */
    }
  }
`;

const LoginButtons = styled.div`
  button {
    width: 100%;
    display: flex;
    padding: 10px 20px;
    color: #01ff30;
    justify-content: center;
    border: 1px solid #01ff30;
    transition: all 0.2s ease-in-out;
    background-color: #000;
    font-size: 12px;
  }

  .loginBtn {
    margin-bottom: 16px;
    background-color: #01ff30;
    color: #000;
  }
`;

export { LoginDiv, LoginInner, LoginForm, LoginButtons };
