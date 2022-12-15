import { Link } from "react-router-dom";
import { ListForm } from "../Style/ListCss";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
import { PostInfoState } from "../../types/post";

type ListProps = {
    postList: PostInfoState[];
};

const List = (props: ListProps) => {
    console.log("postList", props.postList);
    const setTime = (a: string, b: string) => {
        if (a !== b) {
            return moment(b).format("LLL") + " (수정됨)";
        } else {
            return moment(a).format("LLL");
        }
    };

    return (
        <>
            {props.postList.map((data: PostInfoState, idx: number) => {
                return (
                    <ListForm key={idx}>
                        <div className="topContent">
                            <div className="imgDiv">
                                <Avatar
                                    size="40"
                                    round={true}
                                    src={data.author && data.author.photoURL}
                                />
                            </div>
                            <div className="userContent">
                                <Link to={`/upload/${data.postNum}`}>
                                    <p className="title">{data.title}</p>
                                </Link>
                                <div className="smallContent">
                                    <p className="userName">
                                        {data.author.displayName}
                                    </p>
                                    <p className="date">
                                        {setTime(
                                            data.createdAt,
                                            data.updatedAt
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>{data.content}</p>
                    </ListForm>
                );
            })}
        </>
    );
};

export default List;
