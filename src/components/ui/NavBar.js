import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {fish} ) => {
  return (
    <>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/fish" fish={fish} >Fish</Link>
        </li>
    </ul>
    </>
  );
};

export default NavBar;