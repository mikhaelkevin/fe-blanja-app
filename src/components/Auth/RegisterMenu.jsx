import React from 'react';
import SellerRegisterForm from './SellerRegisterForm';
import CustRegisterForm from './CustRegisterForm';

function RegisterMenu() {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab" tabIndex="0">
        <CustRegisterForm />
      </div>
      <div className="tab-pane fade" id="pills-seller" role="tabpanel" aria-labelledby="pills-seller-tab" tabIndex="0">
        <SellerRegisterForm />
      </div>
    </div>
  );
}

export default RegisterMenu;
