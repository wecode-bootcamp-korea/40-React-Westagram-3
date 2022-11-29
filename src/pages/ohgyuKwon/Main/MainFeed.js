import React, { useState, useEffect } from 'react';
import './Main.scss';
import Comment from './Comment';

function FeedSection(props) {
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
    <article className="feed">
      <div className="feedUserInfo">
        <div className="feedHeaderEle">
          {/* userProfile mockData */}
          <img src={props.userprofile} alt="" width="40px" />
          {/* userName mockData */}
          <span>{props.userid}</span>
        </div>
        <img className="moreView" src="/images/ohgyukwon/moreview.png" alt="" />
      </div>
      <div>
        {/* feedImg mockData */}
        <img className="feedImg" src="/images/ohgyukwon/FeedbgImg.jpg" alt="" />
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

      {/* Feed Content mockData */}
      <div className="feedContents">{props.feedCommend}</div>
      <p className="countTime">50분전</p>
      <Comment commentHolder="댓글입력" style={CommentBoxDisplay} />
    </article>
  );
}

export default FeedSection;
