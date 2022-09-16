import React from 'react';
import StarRatingWithBar from './StarRatingWithBar';
import styles from '../../../styles/module/DetailProduct.module.css';

function EachStarRating() {
  return (
    <div className={`row d-flex align-items-center ${styles.starRating__rightSide}`}>
      <StarRatingWithBar data={{ starValue: 5, userCount: 3, barWidth: 30 }} />
      <StarRatingWithBar data={{ starValue: 4, userCount: 5, barWidth: 50 }} />
      <StarRatingWithBar data={{ starValue: 3, userCount: 0, barWidth: 0 }} />
      <StarRatingWithBar data={{ starValue: 2, userCount: 2, barWidth: 20 }} />
      <StarRatingWithBar data={{ starValue: 1, userCount: 0, barWidth: 0 }} />
    </div>
  );
}

export default EachStarRating;
