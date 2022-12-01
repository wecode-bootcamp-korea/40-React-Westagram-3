import React from 'react';
import { useState } from 'react';
import CommentEle from './CommentLi.js';

function CommentActive(props) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  // const [commentListLi, setcommetListLi] = useState(commentList);

  // const [commentLike, setcommentLike] = useState(0);

  // const commentDelete = e => {
  //   const commentEle = e.target.parentElement;
  //   commentEle.remove();
  // };

  // const commentLikeCount = (e, props) => {
  //   e.target.checked
  //     ? setcommentLike(commentLike + 1)
  //     : setcommentLike(commentLike - 1);
  // };

  const commentShow = commentList.map((e, i) => {
    // <CommentEle key={i} value={e}></CommentEle>;
    return (
      <CommentEle
        key={i}
        commentList={e}
        // likeFunc={commentLikeCount}
        // deleteFunc={commentDelete}
      />
      // <li key={i}>
      //   {/* 로그인 사용자 명 */}
      //   {e}
      //   {/* <button onClick={deleteBtn}>삭제</button> */}
      //   {/* span value값은 데이터 받아서 */}
      //   <input type="checkbox" onClick={commentLikeCount} />
      //   {/* 서버에 저장한 */}
      //   <span key={i}>{commentLike}</span>
      //   <span> 좋아요</span>
      //   <button onClick={commentDelete}>삭제</button>
      // </li>
    );
  });

  //댓글입력
  const inputComment = e => {
    setComment(e.target.value);
    // console.log(comment);
  };

  const addComment = () => {
    setCommentList(commentList.concat(comment));
    setComment('');
  };

  return (
    <div className="commentSection" style={props.style}>
      <ul className="commentList">{commentShow}</ul>

      <span id="commentUserInfo">{/* 서버에서 가져온 로그인 유저 이름 */}</span>
      <input
        id="commentInput"
        type="text"
        placeholder={props.commentHolder}
        onChange={inputComment}
        value={comment}
      />
      <button id="commentBtn" onClick={addComment}>
        게시
      </button>
    </div>
  );
}

export default CommentActive;
