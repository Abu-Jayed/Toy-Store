import cha1 from '../../../assets/img/cha1.jpg'
import cha2 from '../../../assets/img/cha2.jpg'
import cha3 from '../../../assets/img/cha3.jpg'
import cha4 from '../../../assets/img/cha4.jpg'
import cha5 from '../../../assets/img/cha5.jpg'
import cha6 from '../../../assets/img/cha6.jpg'
import cha7 from '../../../assets/img/cha7.jpg'
import cha8 from '../../../assets/img/cha8.jpg'
import cha9 from '../../../assets/img/cha9.jpg'
import cha10 from '../../../assets/img/cha10.jpg'


import { useState } from "react";

const ByBestSelling = () => {
    const [show,setShow] = useState(false)

  return (
    <div data-aos="fade-up">
      <div className={ `  md:mt-32 mt-8 md:relative`}>
        <p className="rounded-lg text-3xl font-bold md:absolute md:left-32 -top-5 bg-white px-3 italic">
          Most selling character
        </p>
        {/* 1st floor start */}
        <div className={`ml-32 md:ml-0 absolute md:left-[52px] ${show?'visible':'invisible'} py-10 rounded-3xl  md:flex md:gap-5 justify-center `}>
          <div className="bg-blue-400  w-48 h-60 rounded-xl flex justify-center ">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cha1} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="bg-blue-400  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cha2} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="bg-blue-400  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cha3} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="bg-blue-400  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cha4} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
                
              </p>
            </div>
          </div>
          <div className="bg-blue-400  w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
            <div className="mt-3">
              <img className="rounded-xl w-[167px] h-[157]" src={cha5} alt="" />
              <p className="text-white font-bold text-2xl text-center my-3">
            
              </p>
            </div>
          </div>
        </div>

        {/* 2nd floor start */}
        <div className={`${show?'invisible':'visible'}  ml-32 md:ml-0 top-6 md:top-9 relative `}>
          <div className=" py-1 rounded-3xl  md:flex md:gap-5 justify-center">
            <div className="   bg-blue-400 shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center ">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cha6}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className="  bg-blue-400 shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cha7}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className="  bg-blue-400 shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cha8}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className="  bg-blue-400 shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cha9}
                  alt=""
                />
                <p className="text-white font-bold text-2xl text-center my-3">
                  
                </p>
              </div>
            </div>
            <div className="  bg-blue-400 shadow-lg mb-6 w-48 h-60 rounded-xl flex justify-center mt-4 md:mt-0">
              <div className="mt-3">
                <img
                  className="rounded-xl w-[167px] h-[157]"
                  src={cha10}
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
            className="rounded-full bg-cyan-800 px-3 py-1 text-3xl text-white font-bold"
          >
            &lt;
          </button>
          <button onClick={() => setShow(!show)} className="rounded-full bg-cyan-800 px-3 py-1 text-3xl text-white font-bold">
            &gt;
          </button>
        </div>
 
      </div>
    </div>
  );
};

export default ByBestSelling;
