import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';

function NavSearch() {
  const [searchInput, setsearchInput] = useState('');
  const [userData, setuserData] = useState([]);

  const searchValue = e => {
    setsearchInput(e.target.value);
  };
  console.log(typeof searchInput);
  console.log(userData);
  const SearchResultLi = userData.map(userdata => {
    return searchInput.length > 0 && userdata.username.includes(searchInput) ? (
      <SearchResult
        key={userdata.id}
        userprofile={userdata.userprofile}
        username={userdata.username}
      />
    ) : (
      false
    );
  });

  useEffect(() => {
    fetch('/data/searchdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setuserData(data);
      });
  }, []);

  return (
    <div className="searchDiv">
      <input
        className="navInput"
        type="text"
        placeholder="검색"
        value={searchInput}
        onChange={searchValue}
      />
      <ul className="searchResult">{SearchResultLi}</ul>
    </div>
  );
}

export default NavSearch;
