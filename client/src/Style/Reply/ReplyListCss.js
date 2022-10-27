import styled from "@emotion/styled";

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
`;

export { ListDiv, ReplyGroup };