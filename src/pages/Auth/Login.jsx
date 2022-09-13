import React from 'react';
import styles from '../../styles/module/Auth.module.css';

import logo from '../../assets/tuku_logo.svg';
import Image from '../../components/Global/Image';
import LoginForm from '../../components/Auth/LoginForm';

function Login() {
  return (
    <div className={styles.container}>
      <Image data={{ image: logo, alt: 'logo' }} />
      <h4 className="mb-5 text-center">Please login with your account</h4>
      <ul className="nav nav-pills mb-4 red border" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active role-customer w-100" id="pills-customer-tab" data-bs-toggle="pill" data-bs-target="#pills-customer" type="button" role="tab" aria-controls="pills-customer" aria-selected="true">
            <h5>
              Customer
            </h5>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link role-seller w-100" id="pills-seller-tab" data-bs-toggle="pill" data-bs-target="#pills-seller" type="button" role="tab" aria-controls="pills-seller" aria-selected="false">
            <h5>
              Seller
            </h5>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab" tabIndex="0">
          <LoginForm />
        </div>
        <div className="tab-pane fade" id="pills-seller" role="tabpanel" aria-labelledby="pills-seller-tab" tabIndex="0">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
