import React from 'react';
import styles from '../../../styles/module/DetailProduct.module.css';

function DescriptionCondition() {
  return (
    <div className={styles.prodDescription__condition}>
      <h3>Condition</h3>
      <h4 className="text-danger">New</h4>
    </div>
  );
}

export default DescriptionCondition;
