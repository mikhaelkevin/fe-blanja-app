/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';

import SuggestionSlider from '../../components/Home/SuggestionSlider';
import CategorySlider from '../../components/Home/CategorySlider';
import Image from '../../components/Global/Image';

import styles from '../../styles/module/Home.module.css';
import 'swiper/css/bundle';
import NewItems from '../../components/Home/NewItems';
import PopularItems from '../../components/Home/PopularItems';

function Home() {
  return (
    <div className={styles.layouts}>
      <div className="container h-100">
        <div className={styles.home__suggestion}>
          <SuggestionSlider />
        </div>
        <div className={styles.home__category}>
          <div>
            <h1>Category</h1>
            <p className="text-muted">What are you currently looking for</p>
          </div>
          <div className={styles.home__categoryContent}>
            <CategorySlider />
          </div>
        </div>
        <div className={styles.home__newItem}>
          <div>
            <h1>New</h1>
            <p className="text-muted mb-1">{'You\'ve never see it before!'}</p>
          </div>
          <div className={styles.home__newItemList}>
            <div className="row">
              <NewItems />
            </div>
          </div>
        </div>
        <div className={styles.home__popularItem}>
          <div>
            <h1>Popular</h1>
            <p className="text-muted mb-1">Find clothes that are trending recently</p>
          </div>
          <div className={styles.home__popularItemList}>
            <div className="row">
              <PopularItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
