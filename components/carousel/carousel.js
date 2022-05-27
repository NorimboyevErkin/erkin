import React, { useRef, useState } from "react";
import styles from "../../styles/about-style/aboutBox-style.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import myImg from '../../public/picture-2.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination , Autoplay]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <Image
            className={styles.img}
            layout="responsive"
            src={myImg}
            placeholder="blur"
          />

        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.img}
            layout="responsive"
            src={myImg}
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.img}
            layout="responsive"
            src={myImg}
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.img}
            layout="responsive"
            src={myImg}
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.img}
            layout="responsive"
            src={myImg}
            placeholder="blur"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
