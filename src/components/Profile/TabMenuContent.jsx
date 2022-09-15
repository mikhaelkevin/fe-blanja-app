import React from 'react';
import styles from '../../styles/module/Profile.module.css';
import AddressContent from './Address/AddressContent';
import AccountContent from './Account/AccountContent';
import MyOrderContent from './MyOrder/MyOrderContent';
import MyProductContent from './MyProduct/MyProductContent';

function MenuContent() {
  return (
    <div className={`tab-content h-100 d-flex justify-content-center align-items-center ${styles.profile__tabContent}`} id="v-pills-tabContent">
      <div className={`tab-pane fade show active ${styles.profile__menuAccount}`} id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab" tabIndex="0">
        <AccountContent />
      </div>
      <div className="tab-pane fade w-75" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
        <AddressContent />
      </div>
      <div className="tab-pane fade w-100" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab" tabIndex="0">
        <MyOrderContent />
      </div>
      <div className="tab-pane fade w-75" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab" tabIndex="0">
        <MyProductContent />
      </div>
    </div>
  );
}

export default MenuContent;
