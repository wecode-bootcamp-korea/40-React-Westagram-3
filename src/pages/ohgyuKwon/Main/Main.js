import React, { useState, useEffect } from 'react';
import './Main.scss';
import Aside from './MainAside.js';
import Feed from './MainFeed.js';
import Nav from './MainNav.js';

function Main() {
  const [feedList, setFeedList] = useState([]);

  const feedListMap = feedList.map(feedItem => {
    return (
      <Feed
        key={feedItem.id}
        userid={feedItem.username}
        userprofile={feedItem.userprofile}
        feedimg={feedItem.feedImg}
      />
    );
  });

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <div className="main">
        <div className="feedSection">{feedListMap}</div>
        <Aside />
      </div>
    </>
  );
}
export default Main;
