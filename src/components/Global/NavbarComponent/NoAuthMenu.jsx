import React from 'react';
import { NavLink } from 'react-router-dom';

function NoAuthMenu() {
  return (
    <>
      <NavLink to="/login">
        <button className="btn btn-lg border rounded-pill" type="button">Login</button>
      </NavLink>
      <NavLink to="/register">
        <button className="btn btn-lg border rounded-pill" type="button">Signup</button>
      </NavLink>
    </>
  );
}

export default NoAuthMenu;
