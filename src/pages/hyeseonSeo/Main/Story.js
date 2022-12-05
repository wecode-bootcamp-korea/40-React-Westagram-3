import React, { useEffect, useState } from 'react';

const Story = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('/data/hyeseonSeo/storyData.json')
      .then(res => res.json())
      .then(data => setStoryList(data));
  }, []);

  return (
    <div>
      {storyList.map(storyFeeds => {
        return (
          <div className="rightBox" key={storyFeeds.id}>
            <img
              className="profileImageSizeMedium"
              src={storyFeeds.image}
              alt="storyProfile"
            />
            <ul>
              <li>{storyFeeds.user}</li>
              <p>{storyFeeds.time}</p>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
