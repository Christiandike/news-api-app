import React from "react";

const Header = ({ onClick }) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">NEWS</div>

        <span className="material-symbols-sharp size-48" onClick={onClick}>
          menu
        </span>
      </div>
    </header>
  );
};

export default Header;
