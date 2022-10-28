import styled from "@emotion/styled";
import { BREAK_POINT_TABLET, BREAK_POINT_PHONE } from "../constant";

const UploadDiv = styled.div`
  margin-top: 48px;
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
  transition: all 0.3s;

  .buttonBox {
    display: flex;
    justify-content: end;
  }

  .title {
    font-size: 12px;
    padding: 15px;
    border: 1px solid #666;
    background-color: #000;

    &:focus {
      outline: 1px solid #eee;
    }
  }

  .content {
    font-size: 12px;
    height: 250px;
    padding: 15px;
    border: 1px solid #666;
    background-color: #000;
    resize: none;
    &:focus {
      outline: 1px solid #eee;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 80%;
  }
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    width: 90%;
  }
`;

const UploadButton = styled.button`
  display: flex;
  padding: 10px 20px;
  color: #01ff30;
  justify-content: end;
  border: 1px solid #01ff30;
  transition: all 0.2s ease-in-out;
  background-color: #000;
  margin-left: 10px;
  font-size: 14px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    padding: 7px 15px;
    font-size: 12px;
  }

  &:hover {
    background-color: #01ff30;
    color: #000;
  }
`;

const Image = styled.div`
  font-size: 14px;
  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 12px;
  }
`;

export { UploadDiv, UploadForm, UploadButton, Image };
