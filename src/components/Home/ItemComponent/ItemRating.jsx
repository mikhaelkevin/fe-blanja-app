import React from 'react';
import styles from '../../../styles/module/Home.module.css';

import Image from '../../Global/Image';
import activeStar from '../../../assets/star-active.svg';

function ItemRating() {
  return (
    <div className={`row ${styles.home__itemStar}`}>
      <Image data={{ image: activeStar, alt: 'active-star' }} />
      <Image data={{ image: activeStar, alt: 'active-star' }} />
      <Image data={{ image: activeStar, alt: 'active-star' }} />
      <Image data={{ image: activeStar, alt: 'active-star' }} />
      <Image data={{ image: activeStar, alt: 'active-star' }} />
      <span className="w-50 ps-1">(10)</span>
    </div>
  );
}

export default ItemRating;
