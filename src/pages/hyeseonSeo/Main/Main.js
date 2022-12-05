import React, { useEffect, useState } from 'react';

import { ASIDE_LIST } from './AsideData';
import Feed from './Feed';
import Story from './Story';
import Recommend from './Recommend';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/hyeseonSeo/feedData.json')
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <div className="Main">
      <div className="alignFeeds">
        <div className="wrapperFeeds">
          <section className="feeds">
            {feedList.map(feeds => {
              return <Feed feeds={feeds} key={feeds.id} />;
            })}
          </section>
        </div>
        <article className="mainRight">
          <div className="profileBox">
            <img
              alt="profileImageSizeMedium"
              className="profileImageRight"
              src="./images/hyeseonSeo/camping2.jpg"
            />
            <ul>
              <li>wecode_hyeseon</li>
              <li>선릉 Seonlleung</li>
            </ul>
          </div>
          <div className="story">
            <div className=" rightHeader">
              <span>스토리</span>
              <span>모두보기</span>
            </div>
            <Story />
          </div>
          <div className="recommend">
            <div className="rightHeader">
              <span>회원님을 위한 추천</span>
              <span>모두보기</span>
            </div>
            <Recommend />
          </div>
          <aside className="aside">
            {ASIDE_LIST.map(menu => {
              return <span key={menu.id}>{menu.asideMenu} &#183; </span>;
            })}
          </aside>
          <p className="copyRight">ⓒ 2022 WESTAGRAM</p>
        </article>
      </div>
    </div>
  );
};

export default Main;
