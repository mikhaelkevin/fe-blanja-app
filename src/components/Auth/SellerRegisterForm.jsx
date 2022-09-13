import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/module/Auth.module.css';

function CustRegisterForm() {
  return (
    <>
      <form className={styles.login__form}>
        <div className="mb-3">
          <input type="text" className="form-control form-control-lg" id="text" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control form-control-lg" id="phone_number" placeholder="Phone number" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control form-control-lg" id="store_name" placeholder="Store name" />
        </div>
        <div className="mb-5">
          <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-lg w-100">Login</button>
      </form>
      <p className="text-center">
        Already have an account?
        {' '}
        <NavLink to="/login">
          Login
        </NavLink>
      </p>
    </>
  );
}

export default CustRegisterForm;
