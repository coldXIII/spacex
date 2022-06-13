import React from 'react';
import Tabs from '../Tabs/Tabs';
import ParallaxSlide from '../ParallaxSlide/ParallaxSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';
import './InfoSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InfoSlider = (props) => {
  return (
    <Swiper
      className="InfoSlider"
      modules={[Pagination, Scrollbar, A11y, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
    >
      <SwiperSlide>
        <ParallaxSlide data={props.parallaxslide} />
      </SwiperSlide>
      <SwiperSlide>
        <Tabs
          data={props.tabsslide}
          title={props.title}
          subtitle={props.subtitle}
        />
      </SwiperSlide>
      {React.Children.toArray(
        props.slides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className="InfoSlider__slide"
              style={{
                background: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="InfoSlider__slide-info">
                <h2>{slide.subtitle}</h2>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <ul>
                  {React.Children.toArray(
                    slide.info.map((item, index) => {
                      return (
                        <li key={index}>
                          <span>{item.characteristic}</span>
                          <span>{item.value}</span>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            </SwiperSlide>
          );
        })
      )}

      <div className="prev">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </Swiper>
  );
};

export default InfoSlider;
