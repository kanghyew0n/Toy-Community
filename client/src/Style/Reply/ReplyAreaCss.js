import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../../constant";

const AreaDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;

  h2 {
    font-size: 18px;
    font-family: "Galmuri9";
    margin-bottom: 20px;
    margin-top: 100px;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 90%;
    h2 {
      font-size: 16px;
    }
  }
`;

export { AreaDiv };
