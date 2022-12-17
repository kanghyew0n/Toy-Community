import { useState } from "react";
import { ReplyGroup } from "../../Style/Reply/ReplyListCss";
import { useSelector } from "react-redux";
import { UploadrDiv } from "../../Style/Reply/ReplyUploadCss";
import axios from "axios";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
import { RootState } from "../../Reducer/store";
import { ReplyState } from "../../../types/reply";

type ReplyContentProps = {
    reply: ReplyState;
};

const ReplyContent = (props: ReplyContentProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [reply, setReply] = useState(props.reply.reply);
    const user = useSelector((state: RootState) => state.user);

    const handleSubmit = () => {
        let body = {
            uid: user,
            reply: reply,
            postId: props.reply.postId,
            replyId: props.reply._id,
        };

        axios.post("/api/reply/edit", body).then((res) => {
            if (res.data.success) {
                alert("댓글 수정 성콩!");
            } else {
                alert("댓글 수정 실패!");
            }
            return window.location.reload();
        });
    };

    const handleDelete = () => {
        if (window.confirm("삭제 진행합니까?")) {
            let body = {
                replyId: props.reply._id,
                postId: props.reply.postId,
            };

            axios
                .post("/api/reply/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("삭제 완!");
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    alert("삭제 실팽");
                });
        }
    };

    return (
        <div>
            {isEdit ? (
                <UploadrDiv>
                    <div className="container">
                        <div className="author">
                            {props.reply.author.displayName}
                        </div>
                        <div className="update">
                            <input
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            />
                            <button onClick={() => setIsEdit(false)}>
                                취소
                            </button>
                            <button onClick={handleSubmit}>등록</button>
                        </div>
                    </div>
                </UploadrDiv>
            ) : (
                <ReplyGroup>
                    <div className="contentArea">
                        <div className="imgDiv">
                            <Avatar
                                size="40"
                                round={true}
                                src={
                                    props.reply.author &&
                                    props.reply.author.photoURL
                                }
                            />
                        </div>
                        <div className="userContent">
                            <div className="smallContent">
                                <div className="author">
                                    {props.reply.author.displayName}
                                </div>
                                <div className="author">
                                    {moment(props.reply.createdAt).format(
                                        "LLL"
                                    )}
                                </div>
                            </div>
                            <div className="content"> {props.reply.reply}</div>
                        </div>
                    </div>
                    {props.reply.author.uid === user.uid && (
                        <div className="btnArea">
                            <p
                                className="update"
                                onClick={() => setIsEdit(true)}
                            >
                                수정
                            </p>
                            <p className="delete" onClick={handleDelete}>
                                삭제
                            </p>
                        </div>
                    )}
                </ReplyGroup>
            )}
        </div>
    );
};

export default ReplyContent;
