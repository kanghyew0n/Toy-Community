import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../constant";

const ListContainer = styled.div`
  margin-top: 48px;
`;

const ListInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 90%;

    .moreBtn {
      padding: 7px 15px;
      font-size: 12px;
    }
  }

  .moreBtn {
    margin-top: 50px;
    padding: 10px 20px;
    color: #01ff30;
    font-size: 14px;
    border: 1px solid #01ff30;
    transition: all 0.2s ease-in-out;
    background-color: #000;
    font-family: "Galmuri9";
    border-radius: 50%;
    &:hover {
      background-color: #01ff30;
      color: #000;
    }
  }
`;

const ListForm = styled.div`
  width: 100%;
  border-bottom: 1px solid #333;
  padding: 25px;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 25px 0;
  }

  p {
    margin-bottom: 0px;
  }

  .title {
    font-weight: 800;
  }

  .userName {
    font-size: 14px;
    color: #999;
  }

  .topContent {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
    img {
      margin: 0;
      width: 40px;
      height: 40px;
    }
  }

  .smallContent {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    p {
      font-size: 14px;
      color: #999;
    }
  }
`;

export { ListContainer, ListInner, ListForm };
