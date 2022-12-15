import { useState, useEffect } from "react";
import { ListContainer, ListInner } from "../Style/ListCss";
import {
  SortContainer,
  SearchContainer,
  FilterContainer,
} from "../Style/FilterCss";
import List from "../pages/List";
import axios from "axios";

const Main = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    getPostList();
  }, [sort]);

  const getPostMoreList = () => {
    let body = {
      sort,
      search,
      skip,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...postList, ...res.data.postList]);
          setSkip(skip + res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);
    let body = {
      sort,
      search,
      skip: 0,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
          setSkip(res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    getPostList();
  };

  return (
    <ListContainer>
      <ListInner>
        <FilterContainer>
          <SearchContainer>
            <input
              type="text"
              placeholder="검색어를 입력하고 enter!"
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </SearchContainer>
          <SortContainer>
            <select onChange={(e) => setSort(e.target.value)}>
              <option>최신순</option>
              <option>인기순</option>
            </select>
          </SortContainer>
        </FilterContainer>
        <List postList={postList} />
        {loadMore && <button className="moreBtn" onClick={getPostMoreList}>more</button>}
      </ListInner>
    </ListContainer>
  );
};

export default Main;
