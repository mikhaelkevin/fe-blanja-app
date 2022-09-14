import React from 'react';
import LoginForm from './LoginForm';

function RoleMenu() {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab" tabIndex="0">
        <LoginForm />
      </div>
      <div className="tab-pane fade" id="pills-seller" role="tabpanel" aria-labelledby="pills-seller-tab" tabIndex="0">
        <LoginForm />
      </div>
    </div>
  );
}

export default RoleMenu;
