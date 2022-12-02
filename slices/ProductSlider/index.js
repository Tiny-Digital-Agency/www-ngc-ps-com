import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { FreeMode, Navigation, Thumbs } from "swiper";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ProductSlider = ({ slice }) => (
  <>
    {/* <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "#000",
        "--swiper-pagination-size": "10px",
        "padding-top": "20px",
        "background-color": "#e5e1dd",
      }}
      spaceBetween={10}
      navigation={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mainSwiper"
    >
      {
        slice?.items?.map((item, i) =>
          <SwiperSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SwiperSlide>
        )
      }
    </Swiper>
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        "padding": "5px",
        "background-color": "#242424",
      }}
      spaceBetween={10}
      freeMode={true}
      navigation={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="thumbnailSwiper"
    >
      {
        slice?.items?.map((item, i) =>
          <SwiperSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SwiperSlide>
        )
      }
    </Swiper> */}

    {/* <Splide aria-label="My Favorite Images">
      {
        slice?.items?.map((item, i) =>
          <SplideSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SplideSlide>
        )
      }
    </Splide> */}

    <Splide
      id="main-carousel"
      class="splide"
      options={{
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: true,
      }}
    >
      {
        slice?.items?.map((item, i) =>
          <SplideSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SplideSlide>
        )
      }
    </Splide>

    <Splide
      id="thumbnail-carousel"
      class="splide"
      options={{
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
          600: {
            fixedWidth: 60,
            fixedHeight: 44,
          },
        },
      }}
    >
      {
        slice?.items?.map((item, i) =>
          <SplideSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SplideSlide>
        )
      }
    </Splide>
  </>
)

export default ProductSlider