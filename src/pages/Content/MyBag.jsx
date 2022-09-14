/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CheckAllBox from '../../components/MyBag/CheckAllBox';
import styles from '../../styles/module/MyBag.module.css';
import firstItem from '../../assets/item-1.svg';
import secondItem from '../../assets/item-2.svg';
import ItemBox from '../../components/MyBag/ItemBox';
import SummaryBox from '../../components/MyBag/SummaryBox';

function MyBag() {
  return (
    <div className="container">
      <div className={styles.layouts}>
        <h1>My Cart</h1>
        <div className={`row ${styles.myBag__content}`}>
          <div className="col-md-12 col-xxl-8 mb-4">
            <CheckAllBox />
            <ItemBox data={{ image: firstItem, title: "Men's formal suit - Black", brand: 'Zalora Cloth' }} />
            <ItemBox data={{ image: secondItem, title: "Men's jacket Jeans", brand: 'Zalora Cloth' }} />
          </div>
          <SummaryBox />
        </div>
      </div>
    </div>
  );
}

export default MyBag;
