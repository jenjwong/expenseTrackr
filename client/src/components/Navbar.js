import React from 'react';
import { Link } from 'react-router-dom';
import ProtectedLink from './ProtectedLink';

import './Navbar.css';

const Navbar = (props) => {
  const { handleLogout } = props;
  const handleClick = () => handleLogout();
  return (
    <nav className="pt-navbar pt-dark navigation">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading pt-icon-banl-account pig-icon" />
      </div>
      <div className="pt-navbar-group pt-align-right">
        <div className="pt-button pt-minimal">
          <ProtectedLink protectedPath="/admin" />
        </div>
        <div className="pt-button pt-minimal pt-icon-home">
          <Link to="/dashboard">Home</Link>
        </div>
        <span className="pt-navbar-divider" />
        <button onClick={handleClick} className="pt-button pt-minimal pt-icon-cog">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
