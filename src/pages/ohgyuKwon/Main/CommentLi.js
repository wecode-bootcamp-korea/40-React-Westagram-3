import React, { useState } from 'react';

function CommentElement(props) {
  const { commentList } = props;

  const [commentLike, setcommentLike] = useState(0);

  const commentLikeCount = e => {
    e.target.checked
      ? setcommentLike(commentLike + 1)
      : setcommentLike(commentLike - 1);
  };

  const commentDelete = e => {
    const commentEle = e.target.parentElement.parentElement;
    commentEle.remove();
  };

  return (
    <li className="comment">
      {/* 로그인 사용자 명 -  */}
      {commentList}
      {/* <button onClick={deleteBtn}>삭제</button> */}
      {/* span value값은 데이터 받아서 */}
      <div className="commentUtil">
        <input
          className="CommentLikeIcon"
          type="checkbox"
          onClick={commentLikeCount}
        />
        {/* 서버에 저장한 */}
        <span>{commentLike}</span>
        <span> 좋아요</span>
        <button className="commentDeleteIcon" onClick={commentDelete} />
      </div>
    </li>
  );
}

export default CommentElement;
