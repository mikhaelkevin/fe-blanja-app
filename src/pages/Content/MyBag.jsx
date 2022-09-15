import React from 'react';
import CheckAllBox from '../../components/MyBag/CheckAllBox';
import styles from '../../styles/module/MyBag.module.css';

import SummaryBox from '../../components/MyBag/SummaryBox';
import ItemsList from '../../components/MyBag/ItemsList';

function MyBag() {
  return (
    <div className={styles.layouts}>
      <div className="container">
        <h1>My Cart</h1>
        <div className={`row ${styles.myBag__content}`}>
          <div className="col-md-12 col-xl-8 mb-4">
            <CheckAllBox />
            <ItemsList />
          </div>
          <SummaryBox buttonText="Submit">
            <div className="row mb-5">
              <div className="col-6 text-muted">Total price</div>
              <div className="col-6 text-end">$ 40.0</div>
            </div>
          </SummaryBox>
        </div>
      </div>
    </div>
  );
}

export default MyBag;
