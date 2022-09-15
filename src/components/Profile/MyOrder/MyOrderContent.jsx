import React from 'react';
import styles from '../../../styles/module/Profile.module.css';
import Menu from './Menu';
import MenuContent from './MenuContent';

function MyOrderContent() {
  return (
    <div className="card w-100">
      <div className="card-body">
        <h4 className="mb-2">My Order</h4>
        <div className={styles.profile__myOrderTabMenu}>
          <Menu />
        </div>
        <hr className="my-1" />
        <div className={styles.profile__myOrderTabContent}>
          <MenuContent />
        </div>
      </div>
    </div>

  );
}

export default MyOrderContent;
