import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/module/Auth.module.css';

import logo from '../../assets/tuku_logo.svg';
import Image from '../../components/Global/Image';
import RoleSwitcher from '../../components/Auth/RoleSwitcher';
import RoleMenu from '../../components/Auth/LoginMenu';

function Login() {
  return (
    <div className={styles.container}>
      <NavLink to="/">
        <Image data={{ image: logo, alt: 'logo' }} />
      </NavLink>
      <h4 className="mb-5 text-center">Please login with your account</h4>
      <RoleSwitcher />
      <RoleMenu />
    </div>
  );
}

export default Login;
