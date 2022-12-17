import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { UploadrDiv } from "../../Style/Reply/ReplyUploadCss";
import { RootState } from "../../Reducer/store";

type ReplyUploadProps = {
    postId: string;
};

const ReplyUpload = (props: ReplyUploadProps) => {
    const [reply, setReply] = useState("");
    const user = useSelector((state:RootState) => state.user);

    const handleSubmit = () => {
        if (!reply) {
            alert("댓글 내용 채워조!");
        }

        let body = {
            reply: reply,
            uid: user.uid,
            postId: props.postId,
        };

        axios.post("/api/reply/submit", body).then((res) => {
            setReply("");
            if (res.data.success) {
                alert("댓글 작성 성콩!");
                window.location.reload();
            } else {
                alert("댓글 작성 실패!");
            }
        });
    };

    return (
        <UploadrDiv>
            <input value={reply} onChange={(e) => setReply(e.target.value)} />
            <button onClick={handleSubmit}>등록</button>
        </UploadrDiv>
    );
};

export default ReplyUpload;
