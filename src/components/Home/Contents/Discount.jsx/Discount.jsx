const Discount = () => {
  return (
    <div>
      {/* discount offer carousel start */}
      <div className="carousel w-full">
        {/* slider 1 start */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="flex ">
            <div>
                <p className="border-orange-300 border-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, delectus consequatur debitis quae fugit officiis deserunt explicabo enim alias aspernatur itaque vel accusamus minus similique pariatur asperiores optio harum eius.</p>
            </div>
            <div>
                <p className=" border-red-800 border-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet tenetur quidem possimus enim eaque sequi numquam, mollitia beatae, et placeat similique tempore in odio. Id libero sequi enim aliquid.</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 1 end */}
        
        {/* slider 2 start */}

        <div id="slide2" className="carousel-item relative w-full">
          {/* <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          /> */}
          <div className="flex ">
            <div>
                <p className="border-orange-300 border-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, delectus consequatur debitis quae fugit officiis deserunt explicabo enim alias aspernatur itaque vel accusamus minus similique pariatur asperiores optio harum eius.</p>
            </div>
            <div>
                <p className=" border-red-800 border-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet tenetur quidem possimus enim eaque sequi numquam, mollitia beatae, et placeat similique tempore in odio. Id libero sequi enim aliquid.</p>
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

        <div id="slide3" className="carousel-item relative w-full">
          {/* <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          /> */}
          <div className="flex ">
            <div>
                <p className="border-orange-300 border-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, delectus consequatur debitis quae fugit officiis deserunt explicabo enim alias aspernatur itaque vel accusamus minus similique pariatur asperiores optio harum eius.</p>
            </div>
            <div>
                <p className=" border-red-800 border-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet tenetur quidem possimus enim eaque sequi numquam, mollitia beatae, et placeat similique tempore in odio. Id libero sequi enim aliquid.</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 3 end */}

        {/* slider 4 start */}

        <div id="slide4" className="carousel-item relative w-full">
          {/* <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          /> */}
          <div className="flex ">
            <div>
                <p className="border-orange-300 border-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, delectus consequatur debitis quae fugit officiis deserunt explicabo enim alias aspernatur itaque vel accusamus minus similique pariatur asperiores optio harum eius.</p>
            </div>
            <div>
                <p className=" border-red-800 border-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet tenetur quidem possimus enim eaque sequi numquam, mollitia beatae, et placeat similique tempore in odio. Id libero sequi enim aliquid.</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slider 4 end */}

      </div>
      {/* discount offer carousel end */}
    </div>
  );
};

export default Discount;
