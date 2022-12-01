import React from 'react';
import DROP_DOWN_DATA from './DropDownData';

function NavDropDown() {
  const dropDownLoop = DROP_DOWN_DATA.map(dropdownitem => {
    return (
      <li className="dropDownLi" key={dropdownitem.id}>
        <img src={dropdownitem.logo} alt="" />
        {dropdownitem.value}
      </li>
    );
  });
  return (
    <div className="dropDown">
      <ul className="dropDownUl">{dropDownLoop}</ul>
    </div>
  );
}

export default NavDropDown;
