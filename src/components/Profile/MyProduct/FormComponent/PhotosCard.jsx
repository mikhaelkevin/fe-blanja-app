import React from 'react';
import styles from '../../../../styles/module/Profile.module.css';

import FormCard from '../FormCard';
import Image from '../../../Global/Image';

import goodsIcon from '../../../../assets/image-box.svg';

function PhotosCard() {
  return (
    <FormCard title="Photos of goods">
      <div className={`card ${styles.profile__productGoodsPic}`}>
        <div className="row d-flex justify-content-evenly align-items-center h-100 px-3">
          <div className={`col-md-7 col-xl-3 m-md-1 rounded p-5 ${styles.profile__goodsItemPic}`}>
            <Image data={{ image: goodsIcon, alt: 'main-goods' }} />
          </div>
          <div className={`col-md-3 col-xl-2 m-md-2 m-lg-0 rounded p-5 p-md-3 ${styles.profile__goodsItemPic}`}>
            <Image data={{ image: goodsIcon, alt: 'main-goods' }} />
          </div>
          <div className={`col-md-3 col-xl-2 m-md-2 m-lg-0 rounded p-5 p-md-3 ${styles.profile__goodsItemPic}`}>
            <Image data={{ image: goodsIcon, alt: 'main-goods' }} />
          </div>
          <div className={`col-md-3 col-xl-2 m-md-2 m-lg-0 rounded p-5 p-md-3 ${styles.profile__goodsItemPic}`}>
            <Image data={{ image: goodsIcon, alt: 'main-goods' }} />
          </div>
          <div className={`col-md-3 col-xl-2 m-md-2 m-lg-0 rounded p-5 p-md-3 ${styles.profile__goodsItemPic}`}>
            <Image data={{ image: goodsIcon, alt: 'main-goods' }} />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-secondary btn-lg rounded-pill">Upload photo</button>
        </div>
      </div>
    </FormCard>
  );
}

export default PhotosCard;
