import React, { useEffect, useState } from "react";
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

const Detail = () => {
  const [postInfo, setPostInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };

    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.post);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(postInfo);
  }, [postInfo]);

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
        {loading}
        <DetailForm>
          <p className="title">{postInfo.title}</p>
          {postInfo.image ? (
            <img src={`http://localhost:3001/${postInfo.image}`} alt="" />
          ) : (
            ""
          )}
          <p className="userName">
            {postInfo.author && postInfo.author.displayName}
          </p>
          <p>{postInfo.content}</p>
        </DetailForm>
        {postInfo.author && user.uid === postInfo.author.uid && (
          <DetailButtons>
            <Link to={`/edit/${postInfo.postNum}`}>
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
