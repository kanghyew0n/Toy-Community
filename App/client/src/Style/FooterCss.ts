import styled from "@emotion/styled";
import { BREAK_POINT_TABLET, BREAK_POINT_PHONE } from "../constant";

const FooterContainer = styled.div`
  height: 80px;
  width: 100%;
  margin-top: 180px;
  transition: all 0.3s;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-top: 80px;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    margin-top: 50px;
  }
`;

const FooterInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "Galmuri9";
  text-align: center;
  font-size: 14px;
  color: #01ff30;

  a {
    color: #eee;
    &:hover {
      color: #01ff30;
    }
  }
`;

export { FooterContainer, FooterInner };
