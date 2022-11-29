import React, { useState } from 'react';
import './Main.scss';
import Comment from './Comment';

function FeedSection() {
  const [FeedLikeCount, setFeedLikeCount] = useState(0);
  const [CommentBoxDisplay, setCommetBoxDisplay] = useState({
    display: 'block',
  });
  const FeedLikcFunc = e => {
    e.target.checked
      ? setFeedLikeCount(FeedLikeCount + 1)
      : setFeedLikeCount(FeedLikeCount - 1);
  };

  const CommentBoxCtrl = e => {
    e.target.checked
      ? setCommetBoxDisplay({ display: 'none' })
      : setCommetBoxDisplay({ display: 'block' });
  };
  return (
    <div className="feedSection">
      <article className="feed">
        <div className="feedUserInfo">
          <div className="feedHeaderEle">
            <img src="/images/ohgyukwon/boy1.png" alt="" width={'40px'} />
            <span>user1</span>
          </div>
          <img
            className="moreView"
            src="/images/ohgyukwon/moreview.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="feedImg"
            src="/images/ohgyukwon/FeedbgImg.jpg"
            alt=""
          />
        </div>
        <div className="feedNav">
          <div className="feedNavUtil">
            <input
              type="checkbox"
              className="likeCheckIcon"
              onClick={FeedLikcFunc}
            />
            <input
              type="checkbox"
              className="commentCheckIcon"
              onClick={CommentBoxCtrl}
            />
            <img
              className="shareIcon"
              src="/images/ohgyukwon/shareIcon.png"
              alt=""
            />
          </div>
          <img
            className="bookMarkIcon"
            src="/images/ohgyukwon/bookmark.png"
            alt=""
          />
        </div>
        <p className="likeCountSection">
          <span id="likeResult">{FeedLikeCount}</span> 명이 좋아합니다
        </p>
        <div className="feedContents">안녕하세요</div>
        <p className="countTime">50분전</p>
        <Comment commentHolder="댓글입력" style={CommentBoxDisplay} />
      </article>
    </div>
  );
}

export default FeedSection;
