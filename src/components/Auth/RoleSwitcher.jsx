import React from 'react';

function RoleSwitcher() {
  return (
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
  );
}

export default RoleSwitcher;
