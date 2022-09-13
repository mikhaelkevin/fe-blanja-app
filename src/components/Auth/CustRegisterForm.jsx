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
          <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" />
        </div>
        <div className="mb-5">
          <input type="password" className="form-control form-control-lg" name="repeat_password" id="repeat_password" placeholder="Repeat password" />
        </div>
        <button type="submit" className="btn btn-lg w-100">Register</button>
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
