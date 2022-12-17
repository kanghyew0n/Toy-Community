import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import {
    DetailContainer,
    DetailInner,
    DetailForm,
    DetailButtons,
    DetailButton,
} from "../Style/DetailCss";
import { RootState } from "../Reducer/store.js";
import { PostInfoState } from "../../types/post";

type DetailProps = {
    postInfo: PostInfoState;
};

const Detail = (props: DetailProps) => {
    const params = useParams();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const handleDelte = () => {
        if (window.confirm("삭제 진행합니까?")) {
            let body = {
                postNum: params.postNum,
            };

            axios
                .post("/api/post/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("삭제 완!");
                        navigate("/");
                    }
                })
                .catch((err) => {
                    alert("삭제 실팽");
                });
        }
    };

    const setTime = (a: string, b: string) => {
        if (a !== b) {
            return moment(b).format("LLL") + " (수정됨)";
        } else {
            return moment(a).format("LLL");
        }
    };

    return (
        <DetailContainer>
            <DetailInner>
                <DetailForm>
                    <div className="topContent">
                        <div className="imgDiv">
                            <Avatar
                                size="40"
                                round={true}
                                src={
                                    props.postInfo.author &&
                                    props.postInfo.author.photoURL
                                }
                            />
                        </div>

                        <div className="userContent">
                            <p className="title">{props.postInfo.title}</p>
                            <div className="smallContent">
                                <p className="userName">
                                    {props.postInfo.author &&
                                        props.postInfo.author.displayName}
                                </p>
                                <p className="date">
                                    {setTime(
                                        props.postInfo.createdAt,
                                        props.postInfo.updatedAt
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    {props.postInfo.image ? (
                        <img src={props.postInfo.image} alt="" />
                    ) : (
                        ""
                    )}

                    <p>{props.postInfo.content}</p>
                </DetailForm>
                {props.postInfo.author &&
                    user.uid === props.postInfo.author.uid && (
                        <DetailButtons>
                            <Link to={`/edit/${props.postInfo.postNum}`}>
                                <DetailButton>수정</DetailButton>
                            </Link>
                            <DetailButton onClick={handleDelte}>
                                삭제
                            </DetailButton>
                        </DetailButtons>
                    )}
            </DetailInner>
        </DetailContainer>
    );
};

export default Detail;
