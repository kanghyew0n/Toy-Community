import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UploadDiv, UploadForm, UploadButton } from "../Style/UploadCss";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onCreate = (e) => {
    if (title === "" || content === "") {
      return alert("항목을 모두 입력해주세요!");
    }

    let body = {
      title,
      content,
    };

    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 작성 성콩!");
          navigate("/")
        } else {
          alert("글 작성 실패!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <UploadDiv>
      <UploadForm>
        <input
          className="title"
          placeholder="제목을 입력해주세요"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="buttonBox">
          <UploadButton onClick={(e) => onCreate(e)}>올리기</UploadButton>
        </div>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
