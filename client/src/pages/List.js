import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListContainer, ListInner, ListForm } from "../Style/ListCss";
import axios from "axios";

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
    <ListContainer>
      <ListInner>
        {postList.map((data, idx) => {
          console.log(data);
          return (
            <ListForm key={idx}>
              <Link to={`/upload/${data.postNum}`}>
                <p className="title">🚀 &nbsp; {data.title}</p>
              </Link>
              <p className="userName">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {data.author.displayName}
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.content}</p>
            </ListForm>
          );
        })}
      </ListInner>
    </ListContainer>
  );
};

export default List;
