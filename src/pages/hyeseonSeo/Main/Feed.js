import React, { useState } from 'react';
import Comments from './Comments';

const Feed = props => {
  const feeds = props.feeds;
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
    <div className="feedsLeft" key={feeds.id}>
      <article className="profileBox">
        <div className="wrapperProfile">
          <img
            alt="profileImage"
            className="profileImage"
            src={feeds.profile}
          />
          <ul>
            <li>{feeds.userId}</li>
            <li>{feeds.location}</li>
          </ul>
        </div>
        <img alt="more" className="more" src="./images/hyeseonSeo/more.png" />
      </article>
      <article className="contents">
        <img src={feeds.contents} alt="contentsImg" />
      </article>
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
              <strong>{feeds.userId}</strong>님 외{' '}
              <strong>{feeds.likePeople}명</strong>이 좋아합니다
            </p>
          </div>
          <div className="commentWrite">
            <span>
              <strong>{feeds.userId}</strong>
              &nbsp;&nbsp; {feeds.feedComments}{' '}
            </span>
          </div>
        </div>
        <ul className="commentsSample">
          <li>
            <div className="createComments">
              <ul>
                <strong>{feeds.userId}</strong>
                <span>{feeds.sampleComments} </span>
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
          <button className="commentsBtn" type="button" onClick={uploadComment}>
            게시
          </button>
        </div>
      </article>
    </div>
  );
};

export default Feed;

const NICKNAME = 'seonday';
