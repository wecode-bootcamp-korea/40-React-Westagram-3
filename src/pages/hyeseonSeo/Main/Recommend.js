import React, { useEffect, useState } from 'react';

const Recommend = () => {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    fetch('/data/hyeseonSeo/recommendData.json')
      .then(res => res.json())
      .then(data => setRecommendList(data));
  }, []);

  return (
    <div>
      {recommendList.map(recommendFeeds => {
        return (
          <div className="rightBox" key={recommendFeeds.id}>
            <img
              className="profileImageSizeMedium"
              src={recommendFeeds.image}
              alt="recommendProfile"
            />
            <ul>
              <li>
                {recommendFeeds.user}
                <span>{recommendFeeds.follow}</span>
              </li>
              <p className="short">{recommendFeeds.likeMsg}</p>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Recommend;
