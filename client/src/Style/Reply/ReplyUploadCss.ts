import styled from "@emotion/styled";

const UploadrDiv = styled.div`
  margin-top: 20px;
  display: flex;

  h2 {
    font-size: 18px;
    font-family: "Galmuri9";
    margin-bottom: 20px;
    margin-top: 100px;
  }
  input {
    width: 100%;
    background-color: #000;
    color: #eee;
    border: 1px solid #333;
    padding: 10px 15px;
    font-size: 14px;
    &:focus {
      outline: 1px solid #fff;
    }
  }

  button {
    width: 70px;
    text-align: center;
    background-color: #000;
    padding: 10px;
    border: 1px solid #333;
    margin-left: 10px;
    font-size: 14px;
    font-family: "Galmuri9";
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  .container {
    border-bottom: 1px solid #333;
    margin: 0;
    max-width: 100%;

    .update {
      display: flex;
      margin-bottom: 20px;
      button {
        width: 60px;
        font-size: 12px;
      }
    }

    .author {
      font-size: 14px;
      color: #888;
      margin-bottom: 10px;
    }
  }
`;

export { UploadrDiv };
