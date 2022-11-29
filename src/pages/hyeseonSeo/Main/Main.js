import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ASIDE_LIST from './AsideData';
import Comments from './Comments';
import './Main.scss';

const Main = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const checkComment = e => setComment(e.target.value);

  const uploadComment = () => {
    const commentArr = [...commentsList];
    commentArr.push(comment);
    setCommentsList(commentArr);
    setComment('');
  };

  return (
    <div className="Main">
      <header className="wrapperNav">
        <nav className="innerNav">
          <Link to="/login-hs">
            <div className="logoBox">
              <img
                alt=" westagramLogo"
                className="westagramLogo"
                src="./images/instagram_logo.png"
              />
              <span className="logoDivSlash">|</span>
              <h1 className="westagramTitle">Westagram</h1>
            </div>
          </Link>
          <input className="search" type="text" placeholder="검색" />
          <div className="iconBox">
            <img
              alt="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="mypage"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </header>
      <section className="wrapperFeeds">
        <div className="feeds">
          <div className="feedsLeft">
            <article className="profileBox">
              <div className="wrapperProfile">
                <img
                  alt="profileImage"
                  className="profileImage"
                  src="./images/hyeseonSeo/camping2.jpg"
                />
                <ul>
                  <li>wecode_hyeseon</li>
                  <li>선릉 Seonlleung</li>
                </ul>
              </div>
              <img
                alt="more"
                className="more"
                src="./images/hyeseonSeo/more.png"
              />
            </article>
            <article className="contents" />
            <article className="stateBox">
              <div className="wrapperState">
                <div className="stateIcons">
                  <img alt="like" src="./images/hyeseonSeo/heart.png" />
                  <img alt="chat" src="./images/hyeseonSeo/chat.png" />
                  <img alt="send" src="./images/hyeseonSeo/send.png" />
                </div>
                <img
                  alt="bookmark"
                  className="bookmark"
                  src="./images/hyeseonSeo/bookmark.png"
                />
              </div>
              <div>
                <div className="likeMsg">
                  <img
                    alt="profileImage"
                    className="profileImageSizeSmall"
                    src="./images/hyeseonSeo/camping2.jpg"
                  />
                  <p>
                    <strong>wecode_hyeseon</strong>님 외 <strong>35명</strong>이
                    좋아합니다
                  </p>
                </div>
                <div className="commentWrite">
                  <span>
                    <strong>wecode_hyeseon</strong>
                    &nbsp;&nbsp; sunrise lucy droplet masquerade lucid you
                    droplet charming masquerade haze flora blush flutter miracle
                    melody iris{' '}
                  </span>
                </div>
              </div>
            </article>
            <ul className="commentsSample">
              <li>
                <div className="createComments">
                  <ul>
                    <strong>wecode_hyeseon</strong>
                    <span>Placeat eligendi neque </span>
                  </ul>
                  <ul className="commentsSampleBtn">
                    <img
                      className="likeBtn"
                      alt="like"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    />
                    <span className="deleteBtn">x</span>
                  </ul>
                </div>
              </li>
              {commentsList.map((li, i) => {
                return <Comments user={NICKNAME} list={li} key={i} />;
              })}
            </ul>

            <div className="wrapperCommentsBox">
              <input
                className="commentsInput"
                type="text"
                placeholder="댓글 달기..."
                value={comment}
                onChange={checkComment}
              />
              <button
                className="commentsBtn"
                type="button"
                onClick={uploadComment}
              >
                게시
              </button>
            </div>
          </div>
          <article className="mainRight">
            <div className="profileBox">
              <img
                alt="profileImageSizeMedium"
                className="profileImageRight"
                src="./images/hyeseonSeo/camping2.jpg"
              />
              <ul>
                <li>wecode_hyeseon</li>
                <li>선릉 Seonlleung</li>
              </ul>
            </div>
            <div className="story">
              <div className=" rightHeader">
                <span>스토리</span>
                <span>모두보기</span>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping3.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>we___</li>
                  <p>4시간 전</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping4.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>star_gram</li>
                  <p>4시간 전</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping5.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>pro._.ject</li>
                  <p>4시간 전</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping6.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>we___</li>
                  <p>4시간 전</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping5.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>star_gram</li>
                  <p>4시간 전</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping6.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>pro._.ject</li>
                  <p>4시간 전</p>
                </ul>
              </div>
            </div>

            <div className="recommend">
              <div className="rightHeader">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping3.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>
                    .zip___ <span>팔로우</span>
                  </li>
                  <p className="short">wecode님 외 2명이 좋아합니다.</p>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping4.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>
                    gagosip_da<span>팔로우</span>
                  </li>
                  <p className="short">wecode님 외 2명이 좋아합니다.</p>
                </ul>
              </div>
              <div className="rightBox">
                <div>
                  <img
                    className="profileImageSizeMedium"
                    src="./images/hyeseonSeo/camping5.jpg"
                    alt="profileImage"
                  />
                  <ul>
                    <li>
                      _please__<span>팔로우</span>
                    </li>
                    <p className="short">wecode님 외 2명이 좋아합니다.</p>
                  </ul>
                </div>
              </div>
            </div>

            <aside className="aside">
              {ASIDE_LIST.map(menu => {
                return <span key={menu.id}>{menu.asideMenu} &#183; </span>;
              })}
            </aside>
            <p className="copyRight">ⓒ 2022 WESTAGRAM</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Main;

const NICKNAME = 'seonday';
