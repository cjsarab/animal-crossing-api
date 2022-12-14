import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {fish} ) => {
  return (
    <>
    <ul className="nav-bar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/fish">Fish</Link>
        </li>
    </ul>
    </>
  );
};

export default NavBar;