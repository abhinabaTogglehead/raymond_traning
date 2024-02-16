import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
function SectionOne() {
  const year = [
    1999, 1925, 1944, 1950, 1952, 1958, 1958, 1960, 1967, 1968, 1979, 1980,
    1984, 1986, 1990, 1990, 1991, 1995, 1996,
  ];
  const content = [
    "Parx a premium casual wear brand was launched to offer customers a range of semi-formal and casual clothes.",
    "A small woollen mill named Raymond Woolen Mill was set up in Thane.",
    "Lala Kailashpat Singhania purchased Raymond. The mill was producing coarse woollen blankets and small quantities of low-cost woollen garments. Soon after, Raymond began a steady process of adopting new technological advancements, which resulted in the manufacturing of superior quality fabrics.",
    "In the post-independence desire for self-sufficiency, production began at the company's new manufacturing unit JK Files. The unit created native engineering files.",
    "Gopalkrishna Singhania arrived to assist his uncle Lala Kailashpat Singhania at the Raymond Mills in Mumbai.",
    "Raymond became the first company to blend polyester with wool and introduced Terool — a runaway success that was the forerunner in the series of superfine fabric blends that was launched later.",
    "Raymond forayed into the retail sector by opening the first exclusive retail showroom in King’s Corner – Ballard Estate in Mumbai.",
    "1960s earmarked total replacement of machinery with sophisticated machinery and since then modernization has become a way of life at Raymond. Raymond was the first in the country to import the most modern machinery which was ever available in the world at that time.",
    "The company launched Trovine — a first-of-its-kind cool and comfortable fabric ideal for Indian summers.",
    "Set up a readymade garments plant in Thane.",
    "A new manufacturing facility was set up at Jalgaon to meet the increasing demand for worsted woollen fabrics.",
    "Dr Vijaypat Singhania, the son of Lala Kailashpat Singhania took over the reins as the Chairman of Raymond. An AMP Alumnus from Harvard and a high flier in spirit and deed, it was under his leadership that the group forayed into several new areas such as polyester filament yarn, indigo denim, cold-rolled steel, prophylactics and charter air services.",
    "A new plant was set up that enabled Raymond to upgrade the quality of its traditional product line of woollen blankets and produce a superior variety of shawls and blankets. Raymond was the pioneer in the development of machine washable wool and wool blended suiting with a plethora of finishes to offer total easy-care and stain-proof fabric.",
    "Park Avenue was launched to provide stylish and innovative wardrobe solutions to well-dressed gentlemen. As India's premium lifestyle brand, its designs embody the latest in international fabric, styling, colour and fashion trends.",
    "Mr Gautam Singhania was appointed Chairman and Managing Director of Raymond Limited.",
    "Raymond's first overseas showroom in Oman.",
    "The company launched KamaSutra, India’s premium condom brand. Within a year of the launch, KamaSutra became the second-largest condom-selling brand in India.",
    "The company introduced a range of superfine pure wool collections under the lineage line (Super 100S to Super 140S).",
    "The group forayed into the aviation sector with the launch of Raymond Aviation. Raymond Aviation provides air charter services to corporate travellers in India.",
    "The company also forayed into manufacturing Denim, focusing on quality, innovation and the creation of exclusive products &amp; designs that have always caught the eye of some of the world's leading jeanswear brands as well as making it amongst the top producers of speciality ring denim in India with a 60% market share.",
    "",
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

export default SectionOne;
