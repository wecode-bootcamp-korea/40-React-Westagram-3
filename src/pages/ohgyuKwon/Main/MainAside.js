import React from 'react';
import StoryUserInfo from './StoryUserInfo';
import RecommendUser from './RecommendUser';
import './Main.scss';

function Mainright() {
  return (
    <div className="mainRight">
      <div className="userSection">
        <div className="userInfo" />
      </div>
      <div>
        <div className="storyHeader">스토리</div>
        <div className="mainRightTop">
          <div className="storyListSection">
            <StoryUserInfo />
          </div>
        </div>
      </div>
      <div>
        <div className="recommendHeader">회원님을 위한 추천</div>
        <div className="mainRightBottom">
          <RecommendUser />
        </div>
      </div>
    </div>
  );
}

export default Mainright;
