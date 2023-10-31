import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import klarna from "../../../assets/KLarna_logo.webp";
import car from "../../../assets/discount/Webp.net-resizeimage_1_.webp"
import whaticon from "../../../assets/discount/what-icon.webp"

const Discount = () => {
  return (
    <>
      <Swiper
        className="mt-2 "
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        loop
      >
        <SwiperSlide className="hover:cursor-pointer bg-[#f3f3f3]  py-2  text-center font-medium">
          <div className="flex justify-center">
            <div className="flex h-[55px] items-center justify-around w-[340px]  ">
              <div>
                <img className="w-16" src={klarna} alt="Klarna logo" />
              </div>
              <div className="font-bold text-[18px]">
                <h1>Play with Klarna</h1>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:cursor-pointer bg-[#f3f3f3]  py-2 text-center font-medium">
          <div className="flex justify-center">
            <div className="flex h-[55px] items-center justify-around w-[350px]  ">
              <div>
                <img className="w-16" src={car} alt="Klarna logo" />
              </div>
              <div className="font-bold text-[18px]">
                <h1>Free Standard Delivery On Orders</h1>
                <p>Over $20</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:cursor-pointer bg-[#f3f3f3]  py-2 text-center font-medium">
          <div className="flex justify-center">
            <div className="flex h-[55px] items-center justify-around w-[350px]  ">
              <div>
                <img className="w-16" src={car} alt="Klarna logo" />
              </div>
              <div className="font-bold text-[18px]">
                <h1>Recive your delivery in more than</h1>
                <p>2000 Parcel shop Location</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide className="hover:cursor-pointer bg-[#f3f3f3]  py-2 text-center font-medium">
          <div className="flex justify-center">
            <div className="flex h-[55px] items-center justify-around w-[350px]  ">
              <div>
                <img className="w-16" src={whaticon} alt="Klarna logo" />
              </div>
              <div className="font-bold text-[18px]">
                <h1>Need help finding our toy? Explore our</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Discount;
