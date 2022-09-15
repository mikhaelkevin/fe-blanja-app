/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../../styles/module/Auth.module.css';

import logo from '../../assets/tuku_logo.svg';
import Image from '../../components/Global/Image';
import RoleSwitcher from '../../components/Auth/RoleSwitcher';
import RegisterMenu from '../../components/Auth/RegisterMenu';

function Register(props) {
  return (
    <div className={styles.container}>
      <Image data={{ image: logo, alt: 'logo' }} />
      <h4 className="mb-5 text-center">Please input your information</h4>
      <RoleSwitcher />
      <RegisterMenu />
    </div>
  );
}

Register.propTypes = {};

export default Register;
