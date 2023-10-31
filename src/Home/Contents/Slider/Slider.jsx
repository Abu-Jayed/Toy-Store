import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/slider/img1.webp"
import img2 from "../../../assets/slider/img2.webp"
import img3 from "../../../assets/slider/img3.webp"
import img4 from "../../../assets/slider/img4.webp"
import img5 from "../../../assets/slider/img5.webp"
import img6 from "../../../assets/slider/img6.webp"

const Slider = () => {
  return (
    <>
      <div className="">
        <div className=" relative">
          <Swiper navigation loop modules={[Navigation]} className="sm:max-w-[1320px] rounded-sm md:mt-10 relative ">
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
                <img
                  src={img1}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            {/* slide4 */}
            <SwiperSlide>
              <div>
                <img
                  src={img2}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={img3}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={img4}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={img5}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={img6}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;

const data = ` <div data-aos="fade-down">
      <div className="carousel w-full md:mt-10 ">
        {/* slider 1 */}
        <div id="slider11" className="carousel-item relative w-full">
          <img
            src="https://www.hamleys.com/media/catalog/category/MicrosoftTeams-image_84_.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider44" className="btn btn-circle">
              ❮
            </a>
            <a href="#slider22" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 2 */}
        <div id="slider22" className="carousel-item relative w-full">
          <img
            src="https://www.hamleys.com/media/wysiwyg/Gift_Finder_Without_gc_banner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider11" className="btn btn-circle">
              ❮
            </a>
            <a href="#slider33" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 3 */}
        <div id="slider33" className="carousel-item relative w-full">
          <img
            src="https://www.hamleys.com/media/catalog/category/MicrosoftTeams-image_75_.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider22" className="btn btn-circle">
              ❮
            </a>
            <a href="#slider44" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 4 */}
        <div id="slider44" className="carousel-item relative w-full">
          <img
            src="https://www.hamleys.com/media/wysiwyg/Gift_Finder_Without_gc_banner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider33" className="btn btn-circle">
              ❮
            </a>
            <a href="#slider11" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
</div>`;
