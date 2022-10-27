import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Detail from "../components/Detail";
import ReplyArea from "../components/Reply/ReplyArea";

const PostArea = () => {
  const [postInfo, setPostInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

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

  return (
    <div>
      <Detail postInfo={postInfo}/>
      <ReplyArea postId={postInfo._id}/>
    </div>
  );
};

export default PostArea;
