
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import top_img1 from "../../../../assets/img/top_of_year/top_1.webp"
import top_img2 from "../../../../assets/img/top_of_year/top_2.webp"
import top_img3 from "../../../../assets/img/top_of_year/top_3.webp"
import top_img4 from "../../../../assets/img/top_of_year/top_4.webp"
import top_img5 from "../../../../assets/img/top_of_year/top_5.webp"
import top_img6 from "../../../../assets/img/top_of_year/top_6.webp"
import top_img7 from "../../../../assets/img/top_of_year/top_7.webp"
import top_img8 from "../../../../assets/img/top_of_year/top_8.webp"




const toy = [
  {
    img: top_img1,
    name: "London Bus",
    subName: "Toytopia Creator, London Bus v29",
    price: "26.00",
    priceWas: "",
    extraInfo: "EXCLUSIVE ONLY RETAILER"
  },
  {
    img: top_img2,
    name: "Paddington Bear",
    subName: "Toytopia Exclusive Paddington Bear",
    price: "31.00",
    priceWas: "",
    extraInfo: "Exclusive"
  },
  {
    img: top_img3,
    name: "Playmobil",
    subName: "Playmobil 70v8 Creator Toytopia",
    price: "13.89",
    priceWas: " ",
    extraInfo: "Boy Choice"
  },
  {
    img: top_img4,
    name: "Wall Art",
    subName: "LEGO 31d4 ART Hokusai -- The Gre...",
    price: "87.00",
    priceWas: "",
    extraInfo: " "
  },
  {
    img: top_img5,
    name: "Beanie Bear",
    subName: "TY Bear || Cyan",
    priceWas: "",
    price: "9.00",
    extraInfo: "Cheapest"
  },
  {
    img: top_img6,
    name: "Traxxas E-Revo",
    subName: "Traxxas E-Revo || Classic 2WD RTR RC",
    price: "76.00",
    priceWas: "",
    extraInfo: false
  },
  {
    img: top_img7,
    name: "Teddy Bunney",
    subName: "Toytopia Creator || Teddy Bunney",
    price: "28.00",
    priceWas: "",
    extraInfo: "All Time Best Sell"
  },
  {
    img: top_img8,
    name: "War Car 3ca2",
    subName: "Multiverse Warrior 3 in 1 RC",
    price: "130.9",
    priceWas: "was 154",
    extraInfo: "15% off"
  },
]


const BestOfYear = () => {
  return (
    <div className='flex items-center justify-center mx-auto '>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 4,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >


        {
          toy.map((toy,i)=>{
            return <div key={i} className=' w-[240px] '>
              <div className='border-2 border-amber-500 '>
                <div className='h-20  border-4 border-red-600'>
                  <div className='py-5  text-center'>
            <span className={`uppercase  px-4  py-2 rounded-lg bg-none text-white ${toy.extraInfo == false ? "opacity-0":"bg-[#ac9156]"} ${toy.extraInfo === "All Time Best Sell" ? "bg-red-600":""} ${toy.extraInfo === "EXCLUSIVE ONLY RETAILER" ? "bg-red-600":""}`}>{toy.extraInfo}</span>
                  </div>
                </div>
                <div className=''>
              <img className='text-center border-4' src={toy.img} alt="" />
                </div>
                <div className='h-40 border-4 border-green-700'>

                </div>
              </div>
              </div>
          })
        }
      
      </Carousel>




    </div>

  );
};

export default BestOfYear;