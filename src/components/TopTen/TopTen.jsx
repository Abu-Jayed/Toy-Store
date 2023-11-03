
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { topTenToy } from "./data";

const TopTen = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-[40px] text-center mt-8 font-bold">
        ToyTopia Top 10 Toys 2023
      </h1>
      <div className="flex gap-2">
        <Swiper
          className="mt-2 "
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            700: {
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
