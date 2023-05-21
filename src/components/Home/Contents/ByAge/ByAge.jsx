import img1 from "../../../../assets/img/img1.png";
import img2 from "../../../../assets/img/img2.png";
import img3 from "../../../../assets/img/img3.png";
import img4 from "../../../../assets/img/img4.png";
import img5 from "../../../../assets/img/img5.png";
import toy1 from "../../../../assets/img/toy1.png";
import toy2 from "../../../../assets/img/toy2.png";
import toy3 from "../../../../assets/img/toy3.png";
import toy4 from "../../../../assets/img/toy4.png";
import toy6 from "../../../../assets/img/toy6.png";

const ByAge = () => {
  return (
    <div
      data-aos="fade-down"
      className="border-4 rounded-[30px] md:mt-32 mt-8 md:relative relative"
    >
      <p className="text-3xl font-bold md:absolute md:left-32 -top-5 bg-white px-3 italic">
        shop by age
      </p>



    {/* 2nd floor start */}
    <div className="ml-32 md:ml-0 mt-9 py-1 rounded-3xl  md:flex md:gap-5 justify-center">
        <div className=" bg-rose-400 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center ">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={toy1} alt="" />
            <p className="text-gray-900 font-bold text-2xl text-center my-3">
              0-2 years
            </p>
          </div>
        </div>
        <div className="bg-rose-400 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0 ">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={toy2} alt="" />
            <p className="text-gray-900 font-bold text-2xl text-center my-3">
              3-4 years
            </p>
          </div>
        </div>
        <div className="bg-rose-400 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={toy3} alt="" />
            <p className="text-gray-900 font-bold text-2xl text-center my-3">
              5-7 years
            </p>
          </div>
        </div>
        <div className="bg-rose-400 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={toy4} alt="" />
            <p className="text-gray-900 font-bold text-2xl text-center my-3">
              8-10 years
            </p>
          </div>
        </div>
        <div className="bg-rose-400 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={toy6} alt="" />
            <p className="text-gray-900 font-bold text-2xl text-center my-3">
              10+ years
            </p>
          </div>
        </div>
      </div>
      {/* 2nd floor end */}



      {/* 1st floor start */}
      <div className=" ml-32 md:ml-0 md:absolute md:top-0 md:left-[50px] md:py-10 md:rounded-3xl  md:flex md:gap-5 md:justify-center absolute top-[85px]">
        <div className="hover:opacity-0 duration-500  bg-rose-600  w-48 h-60 rounded-xl flex justify-center ">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={img1} alt="" />
            <p className="text-white font-bold text-2xl text-center my-3">
              0-2 years
            </p>
          </div>
        </div>
        <div className="bg-rose-600 hover:opacity-0 duration-500  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={img2} alt="" />
            <p className="text-white font-bold text-2xl text-center my-3">
              3-4 years
            </p>
          </div>
        </div>
        <div className="hover:opacity-0 duration-500 bg-rose-600  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={img3} alt="" />
            <p className="text-white font-bold text-2xl text-center my-3">
              5-7 years
            </p>
          </div>
        </div>
        <div className="hover:opacity-0 duration-500 bg-rose-600  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={img4} alt="" />
            <p className="text-white font-bold text-2xl text-center my-3">
              8-10 years
            </p>
          </div>
        </div>
        <div className="hover:opacity-0 duration-500 bg-rose-600  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
          <div className="mt-3">
            <img className="rounded-xl w-[167px] h-[157]" src={img5} alt="" />
            <p className="text-white font-bold text-2xl text-center my-3">
              10+ years
            </p>
          </div>
        </div>
      </div>
      {/* 1st floor end */}

      
    </div>
  );
};

export default ByAge;
