import React from 'react';

function TabMenu() {
  return (
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button className="nav-link active rounded-pill mb-3" id="v-pills-account-tab" data-bs-toggle="pill" data-bs-target="#v-pills-account" type="button" role="tab" aria-controls="v-pills-account" aria-selected="true">
        <h5>
          My account
        </h5>
      </button>
      <button className="nav-link rounded-pill mb-3" id="v-pills-address-tab" data-bs-toggle="pill" data-bs-target="#v-pills-address" type="button" role="tab" aria-controls="v-pills-address" aria-selected="false">
        <h5>
          Address
        </h5>
      </button>
      <button className="nav-link rounded-pill mb-3" id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="false">
        <h5>
          My Order
        </h5>
      </button>
      <button className="nav-link rounded-pill mb-3" id="v-pills-products-tab" data-bs-toggle="pill" data-bs-target="#v-pills-products" type="button" role="tab" aria-controls="v-pills-products" aria-selected="false">
        <h5>
          My Product
        </h5>
      </button>
    </div>
  );
}

export default TabMenu;
