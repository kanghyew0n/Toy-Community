import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  height: 80px;
  width: 100%;
  /* border-bottom: 1px solid #eee; */
  background-color: #000;
`;

const HeaderInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  text-decoration: double;
  .logo {
    font-size: 14px;
    color: #01FF30;
    padding: 10px;
    border: 1px solid #01FF30;
    border-radius: 50%;
    font-family: "Galmuri9";

  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  div {
    color: #eee;
    font-family: "Galmuri9";

  }
`;

export { HeaderDiv, HeaderInner, HeaderMenu };
