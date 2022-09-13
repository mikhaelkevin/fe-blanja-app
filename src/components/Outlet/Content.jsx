import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Global/Navbar';

function Content() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Content;
