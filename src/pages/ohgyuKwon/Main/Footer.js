import React from 'react';
import FOOTER_INFO_LIST from './FooterData';

function Footer() {
  return (
    <ul>
      {FOOTER_INFO_LIST.map(i => {
        return (
          <li className="FooterLi" key={i.id}>
            {i.value}
          </li>
        );
      })}
    </ul>
  );
}

export default Footer;
