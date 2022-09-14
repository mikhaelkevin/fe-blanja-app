/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../../styles/module/Navbar.module.css';

import Image from './Image';
import logo from '../../assets/tuku_logo.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import filterIcon from '../../assets/filter.svg';
import cartIcon from '../../assets/cart.svg';
import avatar from '../../assets/avatar.svg';
import searchIcon from '../../assets/Search.svg';

import NoAuthMenu from '../Navbar/NoAuthMenu';
import WithAuthMenu from '../Navbar/WithAuthMenu';
import MobileSearchModal from '../Navbar/MobileSearchModal';

function Navbar() {
  const token = true;
  const navigate = useNavigate();

  const [mobileShowSearch, setMobileShowSearch] = useState(false);

  return (
    <>
      <div className={styles.nav__desktop}>
        <div className={`container ${styles.navContainer__desktop}`}>
          <div className="row h-100">
            <div className="col-2 h-100 d-flex align-items-center">
              <NavLink to="/">
                <Image data={{ image: logo, alt: 'logo-icon' }} />
              </NavLink>
            </div>
            <div className="col-6 h-100 d-flex align-items-center">
              <form className="row d-flex align-items-center w-100 h-100">
                <div className="col-10">
                  <input type="search" name="search" id="search" className="form-control form-control-lg border border-2 rounded-pill" placeholder="Search" />
                </div>
                <div className="col-2">
                  <button className="btn btn-lg border border-2" type="button">
                    <Image data={{ image: filterIcon, alt: 'filter-icon' }} />
                  </button>
                </div>
              </form>
            </div>
            <div className={`col-3 h-100 d-flex justify-content-evenly align-items-center ${styles.desktop__userMenu}`}>
              <button className="btn border border-0" type="button" onClick={() => navigate('/mybag')}>
                <Image data={{ image: cartIcon, alt: 'cart-icon' }} />
              </button>
              {token ? <WithAuthMenu /> : <NoAuthMenu />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nav__mobile}>
        <div className="row w-100 h-100 py-1">
          <div className="col-3 h-100 d-flex justify-content-center align-items-center">
            <NavLink to="/">
              <Image data={{ image: logoMobile, alt: 'logo-mobile' }} />
            </NavLink>
          </div>
          <div className={`col-3 h-100 d-flex justify-content-center align-items-center ${styles.mobile__search}`}>
            <button className="btn btn-lg" type="button" onClick={() => setMobileShowSearch(true)}>
              <Image data={{ image: searchIcon, alt: 'search-icon' }} />
            </button>
            <MobileSearchModal show={mobileShowSearch} closeModal={() => setMobileShowSearch(false)} modalTitle="Search product">
              <div className="row">
                <div className="col-10">
                  <input type="search" name="mobile_search" id="mobile_search" className="form-control form-control-lg rounded-pill" placeholder="Search" />
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-lg">
                    <Image data={{ image: filterIcon, alt: 'filter-icon' }} />
                  </button>
                </div>
              </div>
            </MobileSearchModal>
          </div>
          <div className={`col-3 h-100 d-flex justify-content-center align-items-center ${styles.mobile__myBag}`}>
            <NavLink to="/mybag">
              <Image data={{ image: cartIcon, alt: 'cart-icon' }} />
            </NavLink>
          </div>
          <div className="col-3 h-100 d-flex justify-content-center align-items-center ">
            <div className={`btn-group ${styles.mobile__avatar}`}>
              <button type="button" className="btn border border-0" data-bs-toggle="dropdown" aria-expanded="false">
                <Image data={{ image: avatar, alt: 'avatar-mobile' }} />
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Notification</li>
                <li className="dropdown-item">Messages</li>
                <NavLink to="/profile"><li className="dropdown-item">Settings</li></NavLink>
                <hr />
                <li className="dropdown-item">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
