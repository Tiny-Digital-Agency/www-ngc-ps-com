import React, { useEffect, useRef } from 'react'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function ProductSlider({ slice }) {

  const splideRef = React.useRef(null);
  const main = useRef(null);
  const thumbs = useRef(null);

  useEffect(() => {
    if (thumbs.current?.splide) {
      main.current?.sync(thumbs.current?.splide);
    }
  }, [main, thumbs]);

  return (
    <>
      <Splide
        id="main-carousel"
        ref={(slider) => (main.current = slider)}
        onArrowsMounted={(splide) => (splideRef.current = splide)}
        options={{
          type: 'fade',
          rewind: true,
          pagination: false,
          arrows: true,
        }}
      >
        {slice?.items?.map((item, i) =>
          <SplideSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SplideSlide>
        )}
      </Splide>

      <Splide
        id="thumbnail-carousel"
        ref={(slider) => (thumbs.current = slider)}
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
        {slice?.items?.map((item, i) =>
          <SplideSlide>
            <img src={item.product_image.url} alt={item.product_image.alt} />
          </SplideSlide>
        )}
      </Splide>
    </>
  );
}

export default ProductSlider