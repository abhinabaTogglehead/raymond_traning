import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

function SectionThree() {
  const year = [2017, 2011, 2014, 2016, 2016, 2016, 2016, 2017, 2017, 2011];
  const content = [
    "A new office was established in New York, USA.",
    "Raymond is the first textile company in the world to produce the Super 250s fabric and the first in India to produce innovative fabrics from bamboo fibre, stain-resistant and UV-resistant fabrics and many such innovations.",
    "Opened the first EBO for Raymond Ready to Wear.",
    "Launched Technosmart- Smartest fabric in the World.",
    "Setting up a new regional office in Dubai, Middle East.",
    "Laid the Foundation Stone for setting up a greenfield Textile Manufacturing Plant in Amravati.",
    "Construction begins for a greenfield manufacturing/garments facility in Ethiopia.",
    "Garmenting Plant commissioned at Hawassa in Ethiopia.",
    "A new office was established in New York, USA.",
    "Raymond is the first textile company in the world to produce the Super 250s fabric and the first in India to produce innovative fabrics from bamboo fibre, stain-resistant and UV-resistant fabrics and many such innovations.",
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      // freeMode={true}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {year.map((year, index) => (
        <SwiperSlide className="year-container">
          <h3>{year}</h3>
          <p>{content[index]}</p>
        </SwiperSlide>
      ))}
      <div className="button-container">
        <button className="swiper-button-prev-custom">PREV</button>
        <button className="swiper-button-next-custom">NEXT</button>
      </div>
    </Swiper>
  );
}

export default SectionThree;
