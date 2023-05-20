import cat1 from "../../../../assets/img/cat1.png";
import cat2 from "../../../../assets/img/cat2.png";
import cat3 from "../../../../assets/img/cat3.png";
import cat4 from "../../../../assets/img/cat4.png";
import cat5 from "../../../../assets/img/cat5.png";
import cat6 from "../../../../assets/img/cat6.png";
import cat7 from "../../../../assets/img/cat7.png";
import cat8 from "../../../../assets/img/cat8.png";
import cat9 from "../../../../assets/img/cat9.png";
import cat10 from "../../../../assets/img/cat10.png";
import { useState } from "react";

const ByCategory = () => {
    const [show,setShow] = useState(false)

  return (
    <div data-aos="fade-right">
      <div className={ `  border-4 rounded-[30px] md:mt-32 mt-8 md:relative`}>
        <p className="text-3xl font-bold md:absolute md:left-32 -top-5 bg-white px-3 italic">
          shop by category
        </p>
        {/* 1st floor start */}
        <div className={`absolute left-14 ${show?'md:visible':'md:invisible'} py-10 rounded-3xl  md:flex md:gap-5 justify-center `}>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center ">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cat1} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                0-2 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cat2} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                3-4 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cat3} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                5-7 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cat4} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                8-10 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cat5} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                10+ years
              </p>
            </div>
          </div>
        </div>

        {/* 2nd floor start */}
        <div className={`${show?'md:invisible':'md:visible'} top-9 relative `}>
          <div className=" py-1 rounded-3xl  md:flex md:gap-5 justify-center">
            <div className=" bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center ">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cat6}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  0-2 years
                </p>
              </div>
            </div>
            <div className="bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cat7}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  3-4 years
                </p>
              </div>
            </div>
            <div className="bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cat8}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  5-7 years
                </p>
              </div>
            </div>
            <div className="bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cat9}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  8-10 years
                </p>
              </div>
            </div>
            <div className="bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cat10}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  10+ years
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd floor end */}

        <button onClick={() => setShow(true)} className="mt-10 btn btn-warning">Left</button>
        <button onClick={() => setShow(false)} className="btn btn-warning">Right</button>
 
      </div>
    </div>
  );
};

export default ByCategory;
