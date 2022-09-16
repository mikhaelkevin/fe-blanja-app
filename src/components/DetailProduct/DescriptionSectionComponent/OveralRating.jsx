import React from 'react';
import styles from '../../../styles/module/DetailProduct.module.css';
import Image from '../../Global/Image';
import activeStar from '../../../assets/star-active.svg';

function OveralRating() {
  return (
    <div className={styles.starRating__leftSide}>
      <div className="row">
        <h1>
          5.0
          <span className="text-muted">/10</span>
        </h1>
        <div className="col-2 p-0">
          <Image data={{ image: activeStar, alt: 'active-star' }} />
        </div>
        <div className="col-2 p-0">
          <Image data={{ image: activeStar, alt: 'active-star' }} />
        </div>
        <div className="col-2 p-0">
          <Image data={{ image: activeStar, alt: 'active-star' }} />
        </div>
        <div className="col-2 p-0">
          <Image data={{ image: activeStar, alt: 'active-star' }} />
        </div>
        <div className="col-2 me-auto p-0">
          <Image data={{ image: activeStar, alt: 'active-star' }} />
        </div>
      </div>
    </div>
  );
}

export default OveralRating;
