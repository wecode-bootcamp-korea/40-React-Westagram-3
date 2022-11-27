import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
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
                    <b>wecode_hyeseon</b>님 외 <b>35명</b>이 좋아합니다
                  </p>
                </div>
                <div className="commentWrite">
                  <span>
                    <b>wecode_hyeseon</b>
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Placeat, eligendi neque eum beatae modi
                    amet.{' '}
                  </span>
                  <img
                    alt="like"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </article>
            <ul className="commentsSample" />
            <div className="wrapperCommentsBox">
              <input
                className="commentsInput"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="commentsBtn" type="button">
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
                <span style={{ color: '#ccc' }}>스토리</span>
                <span>모두보기</span>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping3.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>hhyeseonn</li>
                  <li>1시간 전</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping4.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>na._.jeong3</li>
                  <li>2시간 전</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping5.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>seo_jeongee1</li>
                  <li>3시간 전</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping6.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>min_93</li>
                  <li>4시간 전</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping5.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>seo_jeongee1</li>
                  <li>3시간 전</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping6.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>min_93</li>
                  <li>4시간 전</li>
                </ul>
              </div>
            </div>

            <div className="recommend">
              <div className="rightHeader">
                <span style={{ color: '#ccc' }}>회원님을 위한 추천</span>
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
                    hhyesseonn<b className="follow">팔로우</b>
                  </li>

                  <li className="short">wecode님 외 2명이 좋아합니다.</li>
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
                    na._.jeong3<b className="follow">팔로우</b>
                  </li>
                  <li className="short">wecode님 외 2명이 좋아합니다.</li>
                </ul>
              </div>
              <div className="rightBox">
                <img
                  className="profileImageSizeMedium"
                  src="./images/hyeseonSeo/camping5.jpg"
                  alt="profileImage"
                />
                <ul>
                  <li>
                    seo_jeongee1<b className="follow">팔로우</b>
                  </li>
                  <li className="short">wecode님 외 2명이 좋아합니다.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Main;
