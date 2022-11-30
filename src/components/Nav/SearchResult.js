import React from 'react';

function SearchResult(props) {
  return (
    <li className="searchResultcss">
      <img src={props.userprofile} alt="" width={'50px'} />
      {props.username}
    </li>
  );
}

export default SearchResult;
