/* eslint-disable import/no-unresolved */
import React from 'react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../Global/Image';
import swiperOne from '../../assets/swiper-1.jpg';
import swiperTwo from '../../assets/swiper-2.jpg';
import swiperThree from '../../assets/swiper-3.jpg';
import swiperFour from '../../assets/swiper-4.jpg';

import 'swiper/css/bundle';

function SuggestionSlider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      autoplay={{ delay: 2000 }}
      spaceBetween={40}
      slidesPerView={2}
      navigation
    >
      <SwiperSlide>
        <h2>Yellow Edition</h2>
        <Image data={{ image: swiperOne, alt: 'image-one' }} />
      </SwiperSlide>
      <SwiperSlide>
        <h2>Best Deal Accessory</h2>
        <Image data={{ image: swiperTwo, alt: 'image-two' }} />
      </SwiperSlide>
      <SwiperSlide>
        <h2>Trending Men Fashion</h2>
        <Image data={{ image: swiperThree, alt: 'image-three' }} />
      </SwiperSlide>
      <SwiperSlide>
        <h2>Hot Streetwear Fashion</h2>
        <Image data={{ image: swiperFour, alt: 'image-four' }} />
      </SwiperSlide>
    </Swiper>
  );
}

export default SuggestionSlider;
