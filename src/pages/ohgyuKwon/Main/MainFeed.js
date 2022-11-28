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
          <div className="feedHeader">
            <img src="/images/ohgyukwon/boy1.png" alt="" width={'40px'} />
            <span>user1</span>
          </div>
        </div>
        <div className="feedImg" />
        <div className="feedNav">
          <input type="checkbox" className="likeCheck" onClick={FeedLikcFunc} />
          <input
            type="checkbox"
            className="commentOpen"
            onClick={CommentBoxCtrl}
          />
        </div>
        <p className="likeCountSection">
          <span id="likeResult">{FeedLikeCount}</span> 명이 좋아합니다
        </p>
        <div className="feedContents">안녕하세요</div>
        <p className="countTime">50분전</p>
        <Comment commentHolder="댓글을 입력하세요" style={CommentBoxDisplay} />
      </article>
    </div>
  );
}

export default FeedSection;
