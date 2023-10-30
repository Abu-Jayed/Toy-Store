import brand1 from '../../../assets/img/brand1.jpg'
import brand2 from '../../../assets/img/brand2.jpg'
import brand3 from '../../../assets/img/brand3.jpg'
import brand4 from '../../../assets/img/brand4.jpg'
import brand5 from '../../../assets/img/brand5.jpg'
import brand6 from '../../../assets/img/brand6.jpg'
import brand7 from '../../../assets/img/brand7.jpg'
import brand8 from '../../../assets/img/brand8.jpg'
import brand9 from '../../../assets/img/brand9.jpg'
import brand10 from '../../../assets/img/brand10.jpg'


import { useState } from "react";

const ByBrand = () => {
    const [show,setShow] = useState(false)

  return (
    <div data-aos="fade-up">
      <div className={ `  border-4 rounded-[30px] md:mt-20 mt-8 md:relative`}>
        <p className="text-3xl font-bold md:absolute md:left-32 -top-5 bg-white px-3 italic">
          shop by brand
        </p>
        {/* 1st floor start */}
        <div className={`absolute md:left-[52px] ${show?'visible':'invisible'} py-10 rounded-3xl ml-32 md:ml-0 md:flex md:gap-5 justify-center `}>
          <div className=" shadow-black shadow-md  w-48 h-48 rounded-xl flex justify-center ">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand1} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="- shadow-black shadow-md  w-48 h-48 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand2} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="- shadow-black shadow-md  w-48 h-48 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand3} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="- shadow-black shadow-md  w-48 h-48 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand4} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                8
              </p>
            </div>
          </div>
          <div className="- shadow-black shadow-md  w-48 h-48 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={brand5} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
        </div>

        {/* 2nd floor start */}
        <div className={`${show?'invisible':'visible'} ml-32 md:ml-0  top-6 md:top-9 relative `}>
          <div className=" py-1 rounded-3xl  md:flex md:gap-5 justify-center">
            <div className="  border  mb- shadow-black shadow-md w-48  5 h-48 unded-xl flex justify-center ">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand6}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className=" border  mb-6 w-48  rounded-xl flex justify-center mt- shadow-black shadow-md 5 h-48 :mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand7}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className=" border  mb-6 w-48  rounded-xl flex justify-center mt- shadow-black shadow-md 5 h-48 :mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand8}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className=" border  mb-6 w-48  rounded-xl flex justify-center mt- shadow-black shadow-md 5 h-48 :mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand9}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  8
                </p>
              </div>
            </div>
            <div className=" border  mb-6 w-48  rounded-xl flex justify-center mt- shadow-black shadow-md 5 h-48 :mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={brand10}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd floor end */}

        <div className=" px-10 mb-2 mt-8 flex items-center justify-between">
          <button
            onClick={() => setShow(!show)}
            className="rounded-full bg-rose-500 px-3 py-1 text-3xl text-white font-bold"
          >
            &lt;
          </button>
          <button onClick={() => setShow(!show)} className="rounded-full bg-rose-500 px-3 py-1 text-3xl text-white font-bold">
            &gt;
          </button>
        </div>
 
      </div>
    </div>
  );
};

export default ByBrand;
