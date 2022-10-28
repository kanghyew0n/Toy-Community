import styled from "@emotion/styled";

const MypageDiv = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Galmuri11";
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    justify-content: center;
  }

  button {
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

  .btn {
    margin: 20px auto 0 auto;
    width: 100%;
  }

  input {
    display: none;
  }
`;

export { MypageDiv };
