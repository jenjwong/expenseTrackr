import React from 'react';
import './Navbar.css';
import ProtectedLink from './ProtectedLink';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const {handleLogout, isAdmin, history} = props;
  const handleClick = () => handleLogout();
  return (
    <nav className="pt-navbar pt-dark navigation">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading pt-icon-banl-account pig-icon"></div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        <button className="pt-button pt-minimal pt-icon-document">
          <ProtectedLink protectedPath="/admin" />
        </button>
         <button className="pt-button pt-minimal pt-icon-home"><Link to="/dashboard">Home</Link></button>
         <span className="pt-navbar-divider"></span>
        <button onClick={handleClick} className="pt-button pt-minimal pt-icon-cog">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar;
