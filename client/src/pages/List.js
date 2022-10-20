import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {postList.map((data, idx) => (
        <div key={idx}>
          <Link to={`/upload/${data.postNum}`}>
            <p>제목 : {data.title}</p>
          </Link>
          <p>내용 : {data.content}</p>
        </div>
      ))}
    </>
  );
};

export default List;
