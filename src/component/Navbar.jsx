import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Dashboard</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/orders">Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
