import brand1 from '../../../../assets/img/brand1.jpg'
import brand2 from '../../../../assets/img/brand2.jpg'
import brand3 from '../../../../assets/img/brand3.jpg'
import brand4 from '../../../../assets/img/brand4.jpg'
import brand5 from '../../../../assets/img/brand5.jpg'
import brand6 from '../../../../assets/img/brand6.jpg'
import brand7 from '../../../../assets/img/brand7.jpg'
import brand8 from '../../../../assets/img/brand8.jpg'
import brand9 from '../../../../assets/img/brand9.jpg'
import brand10 from '../../../../assets/img/brand10.jpg'


import { useState } from "react";

const ByBrand = () => {
    const [show,setShow] = useState(false)

  return (
    <div data-aos="fade-up">
      <div className={ `  border-4 rounded-[30px] md:mt-32 mt-8 md:relative`}>
        <p className="text-3xl font-bold md:absolute md:left-32 -top-5 bg-white px-3 italic">
          shop by brand
        </p>
        {/* 1st floor start */}
        <div className={`absolute md:left-[52px] ${show?'visible':'invisible'} py-10 rounded-3xl  md:flex md:gap-5 justify-center `}>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center ">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand1} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                0-2 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand2} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                3-4 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand3} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                5-7 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand4} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                8-10 years
              </p>
            </div>
          </div>
          <div className="bg-pink-300  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand5} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                10+ years
              </p>
            </div>
          </div>
        </div>

        {/* 2nd floor start */}
        <div className={`${show?'invisible':'visible'}  top-6 md:top-9 relative `}>
          <div className=" py-1 rounded-3xl  md:flex md:gap-5 justify-center">
            <div className=" bg-green-700 border shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center ">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand6}
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
                  src={brand7}
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
                  src={brand8}
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
                  src={brand9}
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
                  src={brand10}
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

        <button onClick={() => setShow(!show)} className="mt-10 btn btn-warning">Left</button>
        <button onClick={() => setShow(!show)} className="btn btn-warning">Right</button>
 
      </div>
    </div>
  );
};

export default ByBrand;
