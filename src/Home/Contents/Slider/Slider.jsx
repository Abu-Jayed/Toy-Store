import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/slider/img1.webp";
import img2 from "../../../assets/slider/img2.webp";
import img3 from "../../../assets/slider/img3.webp";
import img4 from "../../../assets/slider/img4.webp";
import img5 from "../../../assets/slider/img5.webp";
import img6 from "../../../assets/slider/img6.webp";

const Slider = () => {
  return (
    <>
      <div className="">
        <div className=" relative">
          <Swiper
            navigation
            loop
            modules={[Navigation]}
            className="sm:max-w-[1320px] cursor-grab rounded-sm md:mt-10 relative "
          >
            <SwiperSlide>
              <div>
                <img
                  src="https://www.hamleys.com/media/wysiwyg/Gift_Finder_Without_gc_banner.jpg"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img1} className="w-full" />
              </div>
            </SwiperSlide>
            {/* slide4 */}
            <SwiperSlide>
              <div>
                <img src={img2} className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img3} className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img4} className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img5} className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img6} className="w-full" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
