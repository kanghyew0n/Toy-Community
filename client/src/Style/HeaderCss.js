import styled from "@emotion/styled";
import {  BREAK_POINT_PHONE } from "../constant";

const HeaderDiv = styled.div`
  height: 80px;
  width: 100%;
  background-color: #000;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    height: 50px;
  }
`;

const HeaderInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  text-decoration: double;

  .logo {
    font-size: 14px;
    color: #01ff30;
    padding: 10px;
    border: 1px solid #01ff30;
    border-radius: 50%;
    font-family: "Galmuri9";
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 90%;

    .logo {
      font-size: 12px;
      padding: 7px;
    }
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  div {
    color: #eee;
    font-family: "Galmuri9";
    cursor: pointer;
  }
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    gap: 16px;
    div {
      font-size: 12px;
    }
  }
`;

export { HeaderDiv, HeaderInner, HeaderMenu };
