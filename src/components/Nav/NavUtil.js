import React, { useState, useEffect } from 'react';
import NavDropDown from './NavDropDown';

function NavUtil() {
  const [NavDropDownCtrl, setDropDownCtrl] = useState(false);

  const DropDownOnOff = () => {
    setDropDownCtrl(!NavDropDownCtrl);
  };
  // const [utilOnOff, setUtilOnOff] = useState({ display: 'none' });

  // const utilOnOffFunc = () => {
  //   utilOnOff.display === 'none'
  //     ? setUtilOnOff({ display: 'block' })
  //     : setUtilOnOff({ display: 'none' });
  // };

  // useEffect(() => {
  //   function onOff() {
  //     setUtilOnOff({ display: 'none' });
  //   }
  //   if (utilOnOff.display === 'block') {
  //     window.addEventListener('click', onOff);
  //   } else window.removeEventListener('click', onOff);
  // }, [utilOnOff]);

  return (
    <div className="navIcons">
      <img
        alt="explore"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
      />
      <img
        alt="heart"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
      />
      <img
        alt="myPage"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        onClick={DropDownOnOff}
      />
      {NavDropDownCtrl ? <NavDropDown /> : false}
    </div>
  );
}

export default NavUtil;
