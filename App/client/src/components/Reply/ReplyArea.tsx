import React from "react";
import ReplyList from "./ReplyList";
import ReplyUpload from "./ReplyUpload";
import { AreaDiv } from "../../Style/Reply/ReplyAreaCss";
import { useSelector } from "react-redux";
import { RootState } from "../../Reducer/store";

type ReplyAreaProps = {
  postId: string;
}

const ReplyArea = (props:ReplyAreaProps) => {
  const user = useSelector((state:RootState) => state.user);
  return (
    <AreaDiv>
       <h2>λκΈ π</h2>
      {user.accessToken && <ReplyUpload postId={props.postId} />}
      <ReplyList postId={props.postId} />
    </AreaDiv>
  );
};

export default ReplyArea;
