import React from 'react';
import '../Nav/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navBox">
        <div className="logoBox">
          <img
            alt="logoImage"
            className="logoImage"
            src="./images/hyeseonSeo/instagram_logo.png"
          />
        </div>
        <h1 className="logoTitle">Westagram</h1>
      </div>
      <input className="navInput" type="text" placeholder="검색" />
      <div className="navIcons">
        <img
          alt="explore"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        />
        <img
          alt="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
        <img
          alt="myPage"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        />
      </div>
    </div>
  );
};

export default Nav;
