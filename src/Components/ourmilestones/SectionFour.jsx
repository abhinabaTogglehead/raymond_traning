import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

function SectionFour() {
  const year = [2020, 2018, 2018, 2019, 2019, 2019, 2020, 2018];
  const content = [
    "Launched Virasafe – a high-performance anti-viral fabric in India. During the COVID 19 pandemic Raymond repurposed its garment factories to craft PPE offerings.",
    "Launch of Raymond Custom Tailoring to create a strong ecosystem of one lakh tailors by 2020.",
    "Raymond crossed the landmark of 900 stores across 500+ towns and cities in India, making this the fastest ever retail expansion by any brand.",

    "Raymond’s foray into the real estate sector with its maiden venture of building a 3000(approx.)-unit Aspirational Housing in Thane.",
    "Consolidation of Consumer Care businesses into Raymond Consumer Care.",
    "Inauguration of Smt. Sunitidevi Singhania School, Thane to carry forward the legacy of high-quality education.",
    "Launched Virasafe – a high-performance anti-viral fabric in India. During the COVID 19 pandemic Raymond repurposed its garment factories to craft PPE offerings.",
    "Launch of Raymond Custom Tailoring to create a strong ecosystem of one lakh tailors by 2020.",
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      // freeMode={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

export default SectionFour;
