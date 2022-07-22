import React from "react";

const Header = ({ onClickLogo, onClick }) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <a className="logo" href="/">
          news<span className="red">find</span>r
        </a>

        <span className="material-symbols-sharp menu-btn" onClick={onClick}>
          menu
        </span>
      </div>
    </header>
  );
};

export default Header;
