import styled from "@emotion/styled";

const ListContainer = styled.div`
  margin-top: 48px;
`;

const ListInner = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* row-gap: 32px; */
  align-items: center;
  margin: 0 auto;
`;

const ListForm = styled.div`
  width: 100%;
  border-bottom: 1px solid #333;
  padding: 25px;

  p {
    margin-bottom: 0px;
  }

  .title {
    font-weight: 800;
    margin-bottom: 3px;
  }
`;

export { ListContainer, ListInner, ListForm };
