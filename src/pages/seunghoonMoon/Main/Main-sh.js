import React from 'react';
import '../Main/Main-sh.scss';

// const Main = () => {
// return <h1> 3팀 문승훈 메인 페이지입니다 </h1>;

function Main() {
  return (
    <>
      {/* <div className="nav_box">
        <div className="nav_img">
          <img src="./img/instagram (1).png" alt="img" />
          <span className="title">westargram</span>
        </div>
        <input type="search" placeholder="검색" />
        <div className="nav_icon">
          <img src="./img/weta.icon/explore.png" alt="img" />
          <img src="./img/weta.icon/heart.png" alt="img" />
          <img src="./img/weta.icon/profile.png" alt="img" />
        </div>
      </div> */}

      <div className="main_box">
        <div className="feed_section">
          <div className="main_profile">
            <div className="main_text_profile">
              <img className="josh" src="./img/josh.jpg" alt="img" />
              <span>wework_seunghun</span>
            </div>

            <div>
              <img className="more" src="./img/weta.icon/more.png" alt="img" />
            </div>

            {/* feed section */}
          </div>
          <div className="feed_picture">
            <img src="./img/IMG_8420.jpeg" alt="img" />
          </div>
          <div className="feed_icons">
            <div className="feed_icon_heart">
              <img src="/images/seunghoonmun/weta.icon/heart.png" alt="img" />
              <img src="/images/seunghoonmun/weta.icon/send.png" alt="img" />
              <img src="/images/seunghoonmun/weta.icon/chat.png" alt="img" />
            </div>
            <div className="bookmark">
              <img src="./bookmark.png" alt="img" width="30px" />
            </div>
          </div>
          <div className="feed_reply">
            <ul className="feed_reply_list">
              <span>204.sh님 외 123.456만명이 좋아합니다</span>
              <li>
                <img className="josh" src="img/josh.jpg" alt="img" />
                <span className="feed_rely_id">204_sh</span>
                <span> playing the game with my friend</span>
              </li>
            </ul>
          </div>
          <div className="feed_box" />
          <div className="main_comment" />
        </div>
        <div className="right_box">
          <div className="user_info_section">
            <p>
              <img src="img/josh.jpg" />
              <span>wework_seunghun</span>
            </p>
          </div>

          <div className="story_section">
            <p>
              <img src="./img/weta.icon/profile.png" alt="img" /> user1
            </p>
            <p>
              <img src="./img/weta.icon/profile.png" alt="img" />
              user2
            </p>
            <p>
              <img src="./img/weta.icon/profile.png" alt="img" />
              user3
            </p>
          </div>
          <div className="recommand_section" />
        </div>
      </div>
      <div className="user_box">
        <img src="./img/weta.icon/profile.png" alt="img" />
        <p>user</p>
      </div>
    </>
  );
}

export default Main;
