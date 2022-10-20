import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  height: 80px;
  width: 100%;
  background-color: #081a2e;
  border-bottom: 1px solid #132f4c;
`;

const HeaderInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  text-decoration: double;
  font-family: "Galmuri9";
  .logo {
    font-size: 20px;
    color: #00b3ff;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  font-family: "Galmuri9";
  div {
    color: #00b3ff;
  }
`;

export { HeaderDiv, HeaderInner, HeaderMenu };
