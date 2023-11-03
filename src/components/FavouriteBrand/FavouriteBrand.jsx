import React from "react";
import Button from "../Button/Button";
import { brandImg } from "./data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FavouriteBrand = () => {
  return (
    <section className="mt-10">
      <div>
        <h1 className="text-[40px] font-medium text-black text-center">
          Favourite Brands
        </h1>
        <Button>Shop All Brands</Button>
      </div>
      {/* slider */}
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <Swiper
          className="mt-2  flex items-center justify-center"
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
          loop
        >
          {brandImg.map((brand) => {
            return (
              <SwiperSlide
                style={{ width: "190px" }}
                className="flex w-[200px]  items-center justify-center"
                key={brand.img}
              >
                <div className=" shadow-black shadow-md  w-52 h-48 rounded-xl flex justify-center mt-3 mb-3">
                  <div className="mt-3">
                    <img
                      className="rounded-xl w-[167px] h-[157]"
                      src={brand.img}
                      alt=""
                    />
                    <p className="text-white font-bold text-2xl text-center my-3"></p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default FavouriteBrand;
