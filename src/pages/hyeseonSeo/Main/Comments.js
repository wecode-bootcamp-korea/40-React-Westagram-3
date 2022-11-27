import React from 'react';

const Comment = () => {
  return (
    <li>
      <div className="createComments">
        <ul>
          <b style={{ fontWeight: 'bold' }}>wecode_hyeseon</b>
          <span>comments</span>
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
  );
};

export default Comment;
