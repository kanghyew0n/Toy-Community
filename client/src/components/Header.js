import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderDiv, HeaderInner, HeaderMenu } from "../Style/HeaderCss";
import { useSelector } from "react-redux";
import firebase from "../firebase";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      firebase.auth().signOut();
      navigate("/");
    }
  };
  return (
    <HeaderDiv>
      <HeaderInner>
        <Link to="/">
          <div className="logo">Community</div>
        </Link>
        <HeaderMenu>
          <Link to="/upload">
            <div>업로드</div>
          </Link>
          {/* 기본적으로 빈 문자열 false로 리턴 */}
          {user.accessToken ? (
            <div onClick={handleLogOut}>로그아웃</div>
          ) : (
            <Link to="/login">
              <div>로그인</div>
            </Link>
          )}
        </HeaderMenu>
      </HeaderInner>
    </HeaderDiv>
  );
};

export default Header;
