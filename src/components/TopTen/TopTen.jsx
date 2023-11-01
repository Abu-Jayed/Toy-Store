import img1 from "../../assets/img/TopTen/img1.webp";
import img2 from "../../assets/img/TopTen/img2.webp";
import img3 from "../../assets/img/TopTen/img3.webp";
import img4 from "../../assets/img/TopTen/img4.webp";
import img5 from "../../assets/img/TopTen/img5.webp";
import img6 from "../../assets/img/TopTen/img6.webp";
import img7 from "../../assets/img/TopTen/img7.webp";
import img8 from "../../assets/img/TopTen/img8.webp";
import img9 from "../../assets/img/TopTen/img9.webp";
import img10 from "../../assets/img/TopTen/img10.webp";
import img11 from "../../assets/img/TopTen/img11.webp";

import { topTenToy } from "./data";
import Card from "./Card";
import { Navigation } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";

const TopTen = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-[40px] text-center mt-8 font-bold">
        ToyTopia Top 10 Toys 2023
      </h1>
      <div className="flex gap-2">
        <Swiper className="mt-2 "
        breakpoints={{
          '500':{
            slidesPerView: 2,
          },
          '700':{
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        >
        {topTenToy.map((toy) => {
          return (
            <SwiperSlide className="mt-3 mb-3" key={toy.img}>
            <Card toy={toy}></Card>
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
    </section>
  );
};

export default TopTen;
