import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  DetailContainer,
  DetailInner,
  DetailForm,
  DetailButtons,
  DetailButton,
} from "../Style/DetailCss.js";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleDelte = () => {
    if (window.confirm("삭제 진행합니까?")) {
      let body = {
        postNum: params.postNum,
      };

      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("삭제 완!");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("삭제 실팽");
        });
    }
  };

  return (
    <DetailContainer>
      <DetailInner>
        <DetailForm>
          <p className="title">{props.postInfo.title}</p>
          <p className="userName">
            {props.postInfo.author && props.postInfo.author.displayName}
          </p>
          {props.postInfo.image ? (
            <img src={props.postInfo.image} alt="" />
          ) : (
            ""
          )}

          <p>{props.postInfo.content}</p>
        </DetailForm>
        {props.postInfo.author && user.uid === props.postInfo.author.uid && (
          <DetailButtons>
            <Link to={`/edit/${props.postInfo.postNum}`}>
              <DetailButton>수정</DetailButton>
            </Link>
            <DetailButton onClick={handleDelte}>삭제</DetailButton>
          </DetailButtons>
        )}
      </DetailInner>
    </DetailContainer>
  );
};

export default Detail;
