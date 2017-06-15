import React from 'react';
import './Navbar.css';

const Navbar = ({handleLogout}) => {
  const handleClick = () => handleLogout();
  return (
    <nav className="pt-navbar pt-dark navigation">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading pt-icon-banl-account pig-icon"></div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        <button className="pt-button pt-minimal pt-icon-home">Home</button>
        <button onClick={handleClick} className="pt-button pt-minimal pt-icon-document">Logout</button>
        <span className="pt-navbar-divider"></span>
        <button className="pt-button pt-minimal pt-icon-user"></button>
        <button className="pt-button pt-minimal pt-icon-notifications"></button>
        <button className="pt-button pt-minimal pt-icon-cog"></button>
      </div>
    </nav>
  )
}

export default Navbar;
