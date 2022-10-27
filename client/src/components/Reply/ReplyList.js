import { useState, useEffect } from "react";
import axios from "axios";
import { ListDiv } from "../../Style/Reply/ReplyListCss";
import ReplyContent from "./ReplyContent";

const ReplyList = (props) => {
  const [replyList, setReplyList] = useState([]);

  useEffect(() => {
    // useEffect props 값을 받으면 의존성 배열에 props를 넣어주어야 한다!
    let body = {
      postId: props.postId,
    };

    axios.post("/api/reply/getReply", body).then((res) => {
      if (res.data.success) {
        setReplyList([...res.data.replyList]);
      }
    });
  }, [props]);

  return (
    <ListDiv>
      {replyList.map((reply, idx) => {
        return (
         <ReplyContent reply={reply} key={idx}/>
        );
      })}
    </ListDiv>
  );
};

export default ReplyList;
