import styled from "@emotion/styled";

const DetailContainer = styled.div`
  margin-top: 48px;
`;

const DetailInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: center;
  margin: 0 auto;
`;

const DetailForm = styled.div`
  width: 100%;
  border: 1px solid #333;
  padding: 25px;

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

  img {
    width: 100%;
    margin: 20px 0;
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
    p {
      font-size: 14px;
      color: #999;
    }
  }
`;

const DetailButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 16px;
  font-family: "Galmuri9";
`;

const DetailButton = styled.button`
  display: flex;
  padding: 10px 20px;
  color: #01ff30;
  justify-content: end;
  border: 1px solid #01ff30;
  transition: all 0.2s ease-in-out;
  background-color: #000;
  font-size: 14px;

  &:hover {
    background-color: #01ff30;
    color: #000;
  }
`;

export {
  DetailContainer,
  DetailInner,
  DetailForm,
  DetailButtons,
  DetailButton,
};
