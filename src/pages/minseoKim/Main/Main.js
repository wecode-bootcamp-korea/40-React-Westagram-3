import React from 'react';
import { ASIDE_DATA } from './asidedata';
import './Main.scss';
import './Navbar.scss';

const Main = () => {
  return (
    <section className="main">
      <header>
        <div class="left_box">
          <div class="camera_box">
            <img
              class="camera"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="좌상단 로고"
            />
          </div>
          <div class="line">|</div>
          <div class="logo_box">
            <div class="logo">Westagram</div>
          </div>
        </div>
        <span class="seach_box">
          <input type="seacrh" class="search" placeholder="검색" />
          <div class="magnifier_box">
            <img
              class="magnifier"
              src="https://e7.pngegg.com/pngimages/446/413/png-clipart-computer-icons-button-search-box-button-window-rim.png"
              alt="검색버튼"
            />
          </div>
        </span>
        <div class="right_box">
          <div class="compass_box">
            <img
              class="compass"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="내 프로필"
            />
          </div>
          <div class="myProfile_box">
            <img
              class="myProfile"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="내 프로필"
            />
            <div class="myProfile_box_2">
              <img
                class="my_profile"
                src="https://images.unsplash.com/photo-1668530821844-8093d8e53457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="내 프로필"
              />
            </div>
          </div>
        </div>
      </header>

      <div class="none" />
      <div class="main_body">
        <article>
          <div class="empty_box" />
          <div class="feed">
            <div class="feed_id">
              <div class="id_round">
                <div class="id_box">
                  <div class="id_box_img">
                    <img
                      class="id_img"
                      src="https://images.unsplash.com/photo-1668530821844-8093d8e53457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="내 프로필"
                    />
                  </div>
                  <div class="id_container">
                    <div class="id_name">d_minseo</div>
                    <div class="place">대구광역시 수성구</div>
                  </div>
                </div>
                <div class="more_details">
                  <img
                    src="http://m.ssamplus.com/images/common/icon_more.png"
                    alt="더보기"
                  />
                </div>
              </div>
            </div>
            <div class="feed_picture">
              <img
                src="https://images.unsplash.com/photo-1668661488503-6fe09e1c32b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt="피드 사진"
              />
            </div>
            <div class="feed_bottom">
              <div class="emoticon_box">
                <div class="emoticon_box2">
                  <div class="heart_box">
                    <img class="heart" src="img/heart.png" alt="하트" />
                  </div>
                  <div class="comment_box">
                    <img class="coment" src="img/comment.png" alt="코멘트" />
                  </div>
                  <div class="message_box">
                    <img class="message" src="img/message.png" alt="메시지" />
                  </div>
                </div>
                <div class="bookmark_box">
                  <img class="bookmark" src="img/bookmark.png" alt="북마크" />
                </div>
              </div>
            </div>
            <div class="feed_like_box">
              <div class="feed_like_picture">
                <img
                  class="feed_like_peolpe"
                  src="https://images.unsplash.com/photo-1668530821844-8093d8e53457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="프로필사진"
                />
              </div>
              <div class="feed_like">d_minseo님 외 639명이 좋아합니다.</div>
            </div>
            <div class="feed_article">
              <div class="feed_article_box">
                <div class="comments_container">
                  <div class="comments">d_minseo 지하주차장에서~...</div>
                  <div class="comments1">더 보기</div>
                </div>
                <div class="comments1">
                  댓글 <span id="count" /> 모두 보기
                </div>
                <div class="comments1_box">
                  <div class="comments">sunmerrr 분위기 ㄷ</div>
                  <div class="comments">aida_shin.y 어디에요?</div>
                </div>
                <div class="new_comments" />
                <div class="comments2">1일 전</div>
              </div>
            </div>
            <div class="inputContainer">
              <div class="type_comment">
                <input
                  class="inputBox"
                  type="text"
                  placeholder="댓글 달기..."
                />
              </div>
              <span>
                <button class="buttonBox" type="summit">
                  게시
                </button>
              </span>
            </div>
          </div>
        </article>

        <aside>
          <div class="feed_right_container">
            <div class="my_profile">
              <div class="profile_none">
                <div class="my_profile_box1">
                  <img
                    src="https://images.unsplash.com/photo-1668530821844-8093d8e53457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="내 프로필"
                  />
                </div>
                <div class="my_profile_id">d_minseo</div>
              </div>
            </div>
            <div class="story_box">
              <div class="stories">스토리</div>
              <div class="comment">모두 보기</div>
            </div>
            <div class="storyfeed">
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p1.jpg" alt="profile1" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">wecode</div>
                    <div class="my_profile_id2">18분 전</div>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p2.jpg" alt="profile2" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id2</div>
                    <div class="my_profile_id2">7시간 전</div>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p3.jpg" alt="profile3" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id3</div>
                    <div class="my_profile_id2">18시간 전</div>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p4.jpg" alt="profile4" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id4</div>
                    <div class="my_profile_id2">20시간 전</div>
                  </div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p5.jpg" alt="profile5" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id5</div>
                    <div class="my_profile_id2">23시간 전</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="recommendation_box">
              <div class="recommendation">회원님을 위한 추천</div>
              <div class="comment">모두 보기</div>
            </div>
            <div class="users">
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p1.jpg" alt="profile1" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">wecode</div>
                    <div class="my_profile_id2">
                      dong_dong님 외 2명이 팔로우합니다
                    </div>
                  </div>
                  <div class="follow">팔로우</div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p2.jpg" alt="profile2" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id2</div>
                    <div class="my_profile_id2">
                      eastaegun님 외 5명이 팔로우합니다
                    </div>
                  </div>
                  <div class="follow">팔로우</div>
                </div>
              </div>
              <div class="user">
                <div class="my_profile_box2">
                  <img src="img/p5.jpg" alt="profile5" />
                </div>
                <div class="my_profile_main_box">
                  <div class="my_profile_id_box">
                    <div class="my_profile_id1">id5</div>
                    <div class="my_profile_id2">
                      gun_woo님 외 7명이 팔로우합니다
                    </div>
                  </div>
                  <div class="follow">팔로우</div>
                </div>
              </div>
            </div>
            <div class="other_box">
              <ul>
                {ASIDE_DATA.map(asideData => {
                  return <li key={asideData.id}>{asideData.menuName}</li>;
                })}
              </ul>
            </div>
            <div class="other_box">
              <span class="span1">© 2022 INSTAGRAM FROM FACEBOOK</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Main;
