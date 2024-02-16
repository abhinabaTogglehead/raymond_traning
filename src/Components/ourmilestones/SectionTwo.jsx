import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function SectionTwo() {
  const year = [2008, 2002, 2003, 2005, 2006, 2006, 2008, 2002];
  const content = [
    "The launch of Readymade garments under the Raymond brand name now known as Raymond Ready to Wear.",
    "This year witnessed the acquisition of ColorPlus.",
    "Silver Spark Apparel Limited was set up for manufacturing suits and formal trousers catering largely to export markets.",
    "Raymond achieved a rare feat and a historical milestone with the creation of the world's finest worsted-suiting fabrics from the finest wool ever produced in the world- The Super 230s made up of 11.8 microns of wool.",
    "A Greenfield unit was set up in Kolhapur to produce high-value cotton shirting.",
    "World’s largest integrated composite Textile mill was set up in Vapi to produce the finest quality worsted fabric.",
    "The launch of Readymade garments under the Raymond brand name now known as Raymond Ready to Wear.",
    "This year witnessed the acquisition of ColorPlus.",
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={100}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
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
    </Swiper>
  );
}

export default SectionTwo;
