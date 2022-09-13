import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Auth from '../components/Outlet/Auth';
import Content from '../components/Outlet/Content';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

import Home from '../pages/Content/Home';
import MyBag from '../pages/Content/MyBag';
import DetailProduct from '../pages/Content/DetailProduct';
import Checkout from '../pages/Content/Checkout';
import Profile from '../pages/Content/Profile';

import PageNotFound from '../pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Content />}>
          <Route path="/" element={<Home />} />
          <Route path="/mybag" element={<MyBag />} />
          <Route path="/detail/:productId" element={<DetailProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
