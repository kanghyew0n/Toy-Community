import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv, HeaderInner, HeaderMenu } from "../Style/HeaderCss";

const Header = () => {
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
          <Link to="/login">
            <div>로그인</div>
          </Link>
        </HeaderMenu>
      </HeaderInner>
    </HeaderDiv>
  );
};

export default Header;
