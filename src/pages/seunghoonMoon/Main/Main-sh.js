import React, { useState } from 'react';
import '../Main/Main-sh.scss';
import Comment from '../Comment';

// const Main = () => {
// return <h1> 3팀 문승훈 메인 페이지입니다 </h1>;
let nextId = 0;

function Main() {
  // let [userName] = useState('hacker');
  let [comment, setComment] = useState('');
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = e => {
    console.log(feedComments);
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  console.log(feedComments);
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
              <img
                className="josh"
                src="/images/seunghoonmun/weta.icon/profile.png"
                alt="img"
              />
              <span>wework_seunghun</span>
            </div>

            <div>
              <img
                className="more"
                src="/images/seunghoonmun/weta.icon/more.png"
                alt="img"
              />
            </div>

            {/* feed section */}
          </div>
          <div className="feed_picture">
            <img src="/images/seunghoonmun/weta.icon/josh.jpg" alt="img" />
          </div>
          <div className="feed_icons">
            <div className="feed_icon_heart">
              <img src="/images/seunghoonmun/weta.icon/heart.png" alt="img" />
              <img src="/images/seunghoonmun/weta.icon/send.png" alt="img" />
              <img src="/images/seunghoonmun/weta.icon/chat.png" alt="img" />
            </div>
            <div className="bookmark">
              <img
                src="/images/seunghoonmun/weta.icon/bookmark.png"
                alt="img"
                width="30px"
              />
            </div>
          </div>
          <div className="feed_reply">
            <div className="reply_summary">
              <ul className="feed_reply_list">
                <span>204.sh님 외 123.456만명이 좋아합니다</span>
                <li>
                  {/* <img
                    className="josh"
                    src="/images/seunghoonmun/weta.icon/profile.png"
                    alt="img"
                  /> */}
                  <span className="feed_rely_id">204_sh</span>
                  <span> cool ~</span>
                </li>
              </ul>
              <ul className="" />
            </div>
          </div>
          <Comment feedComments={feedComments} />
          <ul>
            {feedComments.map((feedComments, index) => {
              return (
                <li key={index}>
                  <span>204.sh</span>
                  {feedComments.comment}
                </li>
              );
              // <li key={feedComments.id}>{feedComments.comment}</li>
            })}
          </ul>
          <input
            className="reply_comment"
            type="text"
            placeholder="댓글 달기..."
            onChange={e => {
              setComment(e.target.value);
            }}
            onKeyUp={e => {
              e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
            }}
            value={comment}
          />
          <button
            onClick={() => {
              setComment('');
              setFeedComments([
                ...feedComments,
                { id: nextId++, comment: comment },
              ]);
            }}
            // type="button"
            // className={
            //   comment.length > 0
            //     ? 'submitCommentActive'
            //     : 'submitCommentInactive'
            // }
            // onClick={post}
            // disabled={isValid ? false : true}
          >
            게시
          </button>
          {/* <ul>
            {feedComments.map((feedComments, index) => {
              return <li key={index}>{feedComments.comment}</li>;
              // <li key={feedComments.id}>{feedComments.comment}</li>
            })}
          </ul> */}
        </div>
        {/* <div className="main_comment"></div> */}
        <div className="right_box">
          <div className="user_info_section">
            <p>
              <img src="/images/seunghoonmun/weta.icon/profile.png" />
              <span>wework_seunghun</span>
            </p>
          </div>

          <div className="story_section">
            <p>
              <img src="/images/seunghoonmun/weta.icon/profile.png" alt="img" />{' '}
              user1
            </p>
            <p>
              <img
                src="./images/seunghoonmun/weta.icon/profile.png"
                alt="img"
              />
              user2
            </p>
            <p>
              <img src="/images/seunghoonmun/weta.icon/profile.png" alt="img" />
              user3
            </p>
            <p>
              <img src="/images/seunghoonmun/weta.icon/profile.png" alt="img" />
              user4
            </p>
            <p>
              <img src="/images/seunghoonmun/weta.icon/profile.png" alt="img" />
              user5
            </p>
          </div>
          <div className="recommand_section" />
        </div>
      </div>
      {/* < className="user_box">
        {/* <img src="/images/seunghoonmun/weta.icon/profile.png" alt="img" /> */}
      {/* </div> */}
    </>
  );
}

export default Main;
