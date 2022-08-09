import React from 'react';

const SideMenu = ({ toggleMenu }) => {
  if (!toggleMenu) {
    return;
  }

  return (
    <div className='modal-menu'>
      <a href='#id'>How To Use</a>
      <a href='#id'>About</a>
      <a href='#id'>Support</a>
      <a href='#id'>Contact</a>
      <a href='#id'>Donate</a>
    </div>
  );
};

export default SideMenu;
