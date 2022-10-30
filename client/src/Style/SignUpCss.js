import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../constant";

const SignUpDiv = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

const SignUpInner = styled.div`
  width: 500px;
  border: 1px solid #333;
  font-family: "Galmuri9";
  padding: 50px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 50px 30px;
    width: 90%;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

const SignUpForm = styled.div`
  height: 100%;

  .formItem {
    margin-bottom: 20px;
    .title {
      margin-bottom: 12px;
      font-size: 12px;
    }
    .nameCheck {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;

      p {
        font-size: 12px;
        margin: 0;
      }

      button {
        background-color: #000;
        font-size: 12px;
        color: #01ff30;
        border: none;
      }
    }
  }

  .formItem:last-child {
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

const SignUpButtons = styled.div`
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

  .signUpBtn {
    margin-bottom: 16px;
    background-color: #01ff30;
    color: #000;
  }
`;

export { SignUpDiv, SignUpInner, SignUpForm, SignUpButtons };
