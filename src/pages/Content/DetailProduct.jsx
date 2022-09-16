/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from '../../styles/module/DetailProduct.module.css';

import SubPicSection from '../../components/DetailProduct/SubPicSection';
import MainPicSection from '../../components/DetailProduct/MainPicSection';

import Image from '../../components/Global/Image';
import activeStar from '../../assets/star-active.svg';
import DescriptionInformation from '../../components/DetailProduct/DescriptionSectionComponent/DescriptionInformation';
import OrderSection from '../../components/DetailProduct/OrderSection';
import DescriptionCondition from '../../components/DetailProduct/DescriptionSectionComponent/DescriptionCondition';
import NavigationPage from '../../components/DetailProduct/NavigationPage';

import NewItems from '../../components/Home/NewItems';
import StarRatingWithBar from '../../components/DetailProduct/DescriptionSectionComponent/StarRatingWithBar';
import OveralRating from '../../components/DetailProduct/DescriptionSectionComponent/OveralRating';
import EachStarRating from '../../components/DetailProduct/DescriptionSectionComponent/EachStarRating';

function DetailProduct() {
  return (
    <div className={styles.layouts}>
      <div className="container">
        <div className={styles.detailProd__productOrderSection}>
          <NavigationPage />
          <div className={styles.detailProd__productVisual}>
            <div className="row h-100 w-100">
              <div className="col-5 h-100">
                <div className={styles.detailProd__productImage}>
                  <div className="row h-75 tab-content" id="user-feature-tabContent">
                    <MainPicSection />
                  </div>
                  <div className="row mx-0 py-1 h-25 tab-content" id="v-pills-tabContent">
                    <SubPicSection />
                  </div>
                </div>
              </div>
              <div className="col-7">
                <OrderSection />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailProd__productDescriptionSection}>
          <h1>Informasi Produk</h1>
          <DescriptionCondition />
          <DescriptionInformation />
          <div className={styles.detailProd__productReviewSection}>
            <h1 className="mb-1">Product Review</h1>
            <div className={styles.productReviewSection__starRating}>
              <div className="row d-flex align-items-center h-100 m-0">
                <div className="col-xl-2 col-md-4 h-100 d-flex align-items-center">
                  <OveralRating />
                </div>
                <div className="col me-auto h-100 d-flex align-items-center">
                  <EachStarRating />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className={styles.detailProd__suggestionSection}>
          <h1 className="mb-1">You can also like this</h1>
          <h5 className="text-muted">You&apos;ve never seen it before</h5>
          <div className={styles.detailProd__suggestionItems}>
            <div className="row">
              <NewItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
