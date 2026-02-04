import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
              <Link to="/">Home</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;