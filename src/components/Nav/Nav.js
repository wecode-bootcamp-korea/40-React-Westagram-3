import React, { useState } from 'react';
import NavSearch from './NavSearch';
import NavUtil from './NavUtil';
import '../Nav/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navBox">
        <div className="logoBox">
          <img
            alt="logoImage"
            className="logoImage"
            src="./images/hyeseonSeo/instagram_logo.png"
          />
        </div>
        <h1 className="logoTitle">Westagram</h1>
      </div>
      <NavSearch />
      <NavUtil />
    </div>
  );
};

export default Nav;
