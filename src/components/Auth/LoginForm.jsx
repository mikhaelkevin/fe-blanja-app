import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/module/Auth.module.css';

function LoginForm() {
  return (
    <>
      <form className={styles.login__form}>
        <div className="mb-3">
          <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" />
        </div>
        <p className="text-end">
          <NavLink to="/#">
            Forgot password?
          </NavLink>
        </p>
        <button type="submit" className="btn btn-lg w-100">Login</button>
      </form>
      <p className="text-center">
        {'Don\'t have an account?'}
        {' '}
        <NavLink to="/register">
          Register
        </NavLink>
      </p>
    </>
  );
}

export default LoginForm;
