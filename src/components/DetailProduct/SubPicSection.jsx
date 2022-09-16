import React from 'react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SelectionImage from './ProductVisual/SelectionImage';
import Image from '../Global/Image';

import detailProdOne from '../../assets/detail-1.svg';
import detailProdTwo from '../../assets/detail-2.svg';
import detailProdThree from '../../assets/detail-3.svg';
import detailProdFour from '../../assets/detail-4.svg';
import detailProdFive from '../../assets/detail-5.svg';

function SubPicSection() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      pagination={{ clickable: true }}
      className="nav nav-pills detail__product"
      id="user-feature-tab"
      role="tablist"
    >
      <SwiperSlide>
        <button
          className="nav-link active p-0 h-100 w-100"
          id="firstItem-tab"
          data-bs-toggle="pill"
          data-bs-target="#firstItem"
          type="button"
          role="tab"
          aria-controls="firstItem"
          aria-selected="true"
        >
          <Image data={{ image: detailProdOne, alt: 'image-one' }} />
        </button>
      </SwiperSlide>

      <SwiperSlide>
        <SelectionImage data={{ image: detailProdTwo, selectionName: 'secondItem' }} />
      </SwiperSlide>

      <SwiperSlide>
        <SelectionImage data={{ image: detailProdThree, selectionName: 'thirdItem' }} />
      </SwiperSlide>

      <SwiperSlide>
        <SelectionImage data={{ image: detailProdFour, selectionName: 'fourthItem' }} />
      </SwiperSlide>

      <SwiperSlide>
        <SelectionImage data={{ image: detailProdFive, selectionName: 'fifthItem' }} />
      </SwiperSlide>

    </Swiper>
  );
}

export default SubPicSection;
