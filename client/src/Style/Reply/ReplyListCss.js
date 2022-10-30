import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../../constant";

const ListDiv = styled.div`
  margin-top: 20px;
  padding-bottom: 100px;
`;

const ReplyGroup = styled.div`
  padding: 15px;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 15px 0;
  }

  .author {
    font-size: 14px;
    color: #888;
  }

  .btnArea {
    display: flex;
    gap: 16px;
    font-size: 12px;
    align-items: center;
    p {
      font-family: "Galmuri9";
      margin: 0;
      cursor: pointer;
      &:hover {
        color: #01ff30;
      }
    }
  }

  .contentArea {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
    img {
      margin: 0;
    }
  }

  .smallContent {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
      gap: 0px;
    }
    p {
      font-size: 14px;
      color: #999;
    }
  }
`;

export { ListDiv, ReplyGroup };
