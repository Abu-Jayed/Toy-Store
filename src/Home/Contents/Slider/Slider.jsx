const Slider = () => {
  return (
    <div data-aos="fade-down">
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
    </div>
  );
};

export default Slider;
