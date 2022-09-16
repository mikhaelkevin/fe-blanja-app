import React from 'react';
import styles from '../../styles/module/DetailProduct.module.css';

function NavigationPage() {
  return (
    <div className={styles.detailProd__navBread}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/category">Category</a></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">T-Shirt</li>
        </ol>
      </nav>
    </div>
  );
}

export default NavigationPage;
