import React from 'react';
import menu from '../media/menu.svg';

const TopMenu = ({ setToggleMenu, toggleMenu }) => {
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div className='header-wrap'>
        <a className='logo' href='/'>
          news<span className='red'>find</span>r
        </a>

        <div onClick={handleMenu}>
          <img
            src={menu}
            style={{
              width: '80%',
              display: 'block',
              margin: '0 auto',
              marginRight: '-.25rem',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
