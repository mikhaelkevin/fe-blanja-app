/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../../styles/module/Checkout.module.css';

import firstItem from '../../assets/item-1.svg';
import secondItem from '../../assets/item-2.svg';

import SummaryBox from '../../components/MyBag/SummaryBox';
import AddressCard from '../../components/Checkout/AddressCard';
import CheckoutItem from '../../components/Checkout/CheckoutItem';
import CheckoutItemsList from '../../components/Checkout/CheckoutItemsList';

function Checkout() {
  return (
    <div className={styles.layouts}>
      <div className="container">
        <h1>Checkout</h1>
        <div className="row">
          <div className="col-md-12 col-xl-8">
            <AddressCard />
            <CheckoutItemsList />
          </div>
          <SummaryBox buttonText="Select payment">
            <div className="row mb-3">
              <div className="col-6 text-muted">Order</div>
              <div className="col-6 text-end">$ 40.0</div>
            </div>
            <div className="row mb-3">
              <div className="col-6 text-muted">Delivery</div>
              <div className="col-6 text-end">$ 5.0</div>
            </div>
            <hr />
            <div className="row mb-5">
              <div className="col-6 text-muted">Total price</div>
              <div className="col-6 text-end">$ 45.0</div>
            </div>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
