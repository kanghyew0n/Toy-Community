import React from "react";
import ReplyList from "./ReplyList";
import ReplyUpload from "./ReplyUpload";
import { AreaDiv } from "../../Style/Reply/ReplyAreaCss";
import { useSelector } from "react-redux";

const ReplyArea = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <AreaDiv>
       <h2>댓글 👀</h2>
      {user.accessToken && <ReplyUpload postId={props.postId} />}
      <ReplyList postId={props.postId} />
    </AreaDiv>
  );
};

export default ReplyArea;
