/* eslint-disable import/no-unresolved */
import React from 'react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../Global/Image';

import tShirt from '../../assets/t-shirt.svg';
import shorts from '../../assets/shorts.svg';
import shoes from '../../assets/shoes.svg';
import heels from '../../assets/highheels.svg';
import formalSuit from '../../assets/formal suit.svg';
import dress from '../../assets/dress.svg';

import 'swiper/css/bundle';

function CategorySlider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      spaceBetween={10}
      slidesPerView={5}
      navigation
    >

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#CC0B04' }}>
        <h4>T-Shirt</h4>
        <Image data={{ image: tShirt, alt: 'image-one' }} />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#1C3391' }}>
        <h4>Shorts</h4>
        <Image data={{ image: shorts, alt: 'image-two' }} />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#F67B02' }}>
        <h4>Shoes</h4>
        <Image data={{ image: shoes, alt: 'image-three' }} />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#5650D8' }}>
        <h4>Heels</h4>
        <Image data={{ image: heels, alt: 'image-four' }} />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#50D8AF' }}>
        <h4>Formal Suit</h4>
        <Image data={{ image: formalSuit, alt: 'image-four' }} />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2" style={{ backgroundColor: '#57CD9E' }}>
        <h4>Dress</h4>
        <Image data={{ image: dress, alt: 'image-four' }} />
      </SwiperSlide>
    </Swiper>
  );
}

export default CategorySlider;
