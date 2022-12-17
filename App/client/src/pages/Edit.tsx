import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UploadDiv, UploadForm, UploadButton } from "../Style/UploadCss";
import { PostInfoState } from "../../types/post";

const Edit = () => {
    const params = useParams();
    const [postInfo, setPostInfo] = useState<PostInfoState>();
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const onCreate = () => {
        if (title === "" || content === "") {
            return alert("항목을 모두 입력해주세요!");
        }

        let body = {
            title,
            content,
            postNum: params.postNum,
        };

        axios
            .post("/api/post/edit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 수정 성콩!");
                    navigate(`/upload/${params.postNum}`);
                } else {
                    alert("글 수정 실패!");
                }
            })
            .catch((err) => console.log(err));
    };

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
        setTitle(postInfo.title);
        setContent(postInfo.content);
    }, [postInfo]);

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
                    <UploadButton
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                        취소
                    </UploadButton>
                    <UploadButton onClick={() => onCreate()}>
                        올리기
                    </UploadButton>
                </div>
            </UploadForm>
        </UploadDiv>
    );
};

export default Edit;
