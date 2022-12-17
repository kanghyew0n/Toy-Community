import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../constant";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 20px;
  font-family: "Galmuri9";
  gap: 10px;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  select {
    background-color: #000;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  input {
    width: 300px;
    font-size: 12px;
    padding: 10px;
    border: 1px solid #666;
    background-color: #000;

    &:focus {
      outline: 1px solid #eee;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    input {
      width: 100%;
    }
  }
`;

export { SortContainer, SearchContainer, FilterContainer };
