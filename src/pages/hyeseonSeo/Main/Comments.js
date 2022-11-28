import React from 'react';

const Comments = props => {
  return (
    <li style={{ paddingTop: '10px' }}>
      <div className="createComments">
        <ul>
          <b style={{ fontWeight: 'bold' }}>{props.user}</b>
          <span>{props.list}</span>
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

export default Comments;
