import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../../styles/module/Navbar.module.css';

import Image from './Image';
import logo from '../../assets/tuku_logo.svg';
import filterIcon from '../../assets/filter.svg';
import cartIcon from '../../assets/cart.svg';

import NoAuthMenu from './NavbarComponent/NoAuthMenu';
import WithAuthMenu from './NavbarComponent/WithAuthMenu';

function Navbar() {
  const token = true;
  const navigate = useNavigate();

  return (
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
  );
}

export default Navbar;
