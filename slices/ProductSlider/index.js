import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlider = ({ slice }) => (
  <>
    <Swiper
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
    </Swiper>
  </>
)

export default ProductSlider