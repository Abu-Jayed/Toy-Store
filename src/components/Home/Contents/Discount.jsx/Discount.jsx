import { GrDeliver, GrFacebook } from "react-icons/gr";
import { CgShoppingCart } from "react-icons/cg";

const Discount = () => {
  return (
    <div>
      {/* discount offer carousel start */}
      <div className="carousel w-full">
        {/* slider 1 start */}
        <div id="slide1" className="carousel-item relative bg-red-200  w-full">
          {/* <img
            src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="flex gap-20 items-center  mx-3 md:px-0 px-12 h-20 md:mx-auto">
            <div>
              <div className=" w-96 flex gap-5 items-center">
              <h2><span className="text-lg md:font-bold">Find any toy</span> <br /> <span className="md:font-bold text-red-700 text-2xl">SHOP NOW</span> </h2>
                <CgShoppingCart className="text-red-700 w-10 h-10"></CgShoppingCart>
                
              </div>
            </div>
            <div>
              <div className=" md:gap-10 flex items-center">
                
                <h2 className="md:font-bold text-xl">Free standard delievery on order <br /> <span className="md:ml-32 md:text-4xl text-orange-500">$43</span> </h2>
                <GrDeliver className="text-red-700 w-10 h-10"></GrDeliver>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 1 end */}

        {/* slider 2 start */}

        <div id="slide2" className="carousel-item relative bg-red-200 w-full">
          <div className="flex gap-20 items-center h-20 md:px-0 px-10 md:mx-auto">
            
            <div>
              <div className=" md:gap-10 flex items-center">
                
                <h2 className="md:font-bold text-xl">Free standard delievery on order <br /> <span className="md:ml-32 md:text-4xl text-orange-500">$43</span> </h2>
                <GrDeliver className="text-red-700 w-10 h-10"></GrDeliver>
              </div>
            </div>
            <div>
              <div className=" md:gap-10 flex items-center md:w-0 w-60">
                <div className="text-center">

                <h2 className=" md:font-bold md:text-lg">Recive your delievery from <br /> more than 1500 store<br /> <span className=" md:text-xl text-orange-500 ">Shop Now</span> </h2>
                </div>

                <GrDeliver className="text-red-700 w-10 h-10"></GrDeliver>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 2 end */}

        {/* slider 3 start */}

        <div id="slide3" className="carousel-item relative bg-red-200 w-full">
          {/* <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          /> */}
          <div className="flex gap-20 items-center h-20 mx-auto">
            
            
            <div>
              <div className=" md:gap-10 flex items-center">
                <div className="text-center">

                <h2 className=" md:font-bold text-lg">Recive your delievery from <br /> more than 1500 store<br /> <span className=" md:text-xl text-orange-500 ">Shop Now</span> </h2>
                </div>
                <CgShoppingCart className="text-red-700 w-10 h-10"></CgShoppingCart>
              </div>
            </div>
            <div>
              <div className=" md:gap-10 flex items-center">
                <div className="text-center">

                <h2 className=" md:font-bold text-lg">Need help finding any toy?  Explore our<br /> <span className=" md:text-xl text-orange-500 ">Facebook Group</span> </h2>
                </div>
                <GrFacebook className="text-orange-700 w-10 h-10"></GrFacebook>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 3 end */}

        {/* slider 4 start */}

        
        {/* slider 4 end */}
      </div>
      {/* discount offer carousel end */}
    </div>
  );
};

export default Discount;
