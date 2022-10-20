import styled from "@emotion/styled";

const UploadDiv = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadForm = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  font-family: "Galmuri9";
  font-size: 14px;

  .buttonBox {
    display: flex;
    justify-content: end;
  }

  .title {
    padding: 15px;
    background-color: #081a2e;
    border: 1px solid #265d97;
    &:focus {
      outline: 1px solid #fff;
    }
  }

  .content {
    height: 300px;
    padding: 15px;
    background-color: #081a2e;
    border: 1px solid #265d97;
    resize: none;
    &:focus {
      outline: 1px solid #fff;
    }
  }
`;

const UploadButton = styled.button`
  display: flex;
  padding: 10px 20px;
  color: #265d97;
  justify-content: end;
  background-color: #081a2e;
  border: 1px solid #265d97;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #265d97;
    color: #081a2e;
  }
`;

export { UploadDiv, UploadForm, UploadButton };
