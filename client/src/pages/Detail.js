import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({});
  const [loading, setLoading] = useState(false);

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
            alert("삭제 완!")
            navigate("/")
          }
        })
        .catch((err) => {
          alert("삭제 실팽")
        });
    }
  };

  return (
    <>
      {loading}
      <p>{postInfo.title}</p>
      <p>{postInfo.content}</p>
      <Link to={`/edit/${postInfo.postNum}`}>
        <button>수정</button>
      </Link>
      <button onClick={handleDelte}>삭제</button>
    </>
  );
};

export default Detail;
