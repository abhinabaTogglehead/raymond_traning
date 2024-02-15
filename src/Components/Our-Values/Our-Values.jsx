import "./Our-Values.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
function OurValues() {
  return (
    <div className="our-values">
      <h2>Our Values</h2>
      <div className="swiper-container">
        <Swiper
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          mousewheel={true}
          spaceBetween={20}
          keyboard={true}
          slidesPerView={3}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
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
        >
          <SwiperSlide>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUP9cyS5eajlO_WE5RPRItKzb9vw_B3J16UcKskI-NIZZrGbQK"
              alt="first image"
            />
            <article>
              The trust bestowed on Raymond by its stakeholders has enabled it
              to be a market leader. We believe that conducting business in a
              fair, transparent and ethical manner is pivotal to building strong
              relationships.
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjI8tU-E6DAGfNwYWchs-TU3gDCha30xzDlKxK06kx8w4WwDli"
              alt=""
            />
            <article>
              An iconic brand that has been at the helm of innovation, Raymond
              has always been recognised for its high-quality product offerings
              across price points. The testimony to Raymond's success is its
              loyal consumer base spanning domestic and international markets.
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6jk32hQynwOProqi9OlkXcYWIYELalYRDAGAhGI86ulIWkUX5"
              alt="thred image"
            />
            <article>
              At Raymond, we believe in achieving excellence in all we do. Be it
              crafting world-class offerings, implementing industry best
              practices or delivering a delightful service experience.
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-button-container">
        <button className="swiper-button-prev-custom">
          <FaLongArrowAltLeft />
          PREVIOUS
        </button>
        <button className="swiper-button-next-custom">
          NEXT
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default OurValues;
