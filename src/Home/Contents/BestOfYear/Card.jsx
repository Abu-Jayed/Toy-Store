import { BsHeart, BsHeartFill } from "react-icons/bs";

const Card = (props) => {
  const toy = props.toy;
  console.log("toy", toy);
  return (
    <>
      <div className="p-[20px] pb-[3px] w-[290px] rounded-[20px] hover:shadow-xl hover:shadow-rose-300 border">
        <div className="absolute">
          {toy.extraInfo && <button className="bg-[#ac9156] py-1 px-2 text-white font-bold rounded-[4px]">
            {toy?.extraInfo}
          </button>}
        </div>
        <div className="mt-2 ml-[6px]">
          <img className="" src={toy.img} alt="" />
        </div>
        <div className="relative -top- ">
          <h1 className="text-[18px] text-black font-bold">{toy.name}</h1>
          <p className="font-medium text-gray-600">{toy.subName}</p>
          <p className="text-3xl mt-2 font-bold">{toy.price}</p>
          {/* Button */}
          <div className="mt-4 mb-3">
            <div className="flex gap-3">
              <div className=" ml-4 cursor-pointer flex">
                <span className=" px-[38px] py-[6px] border-  border-red-600 rounded-xl  bg-[#cf102d] text-white font-semibold text-[] ">
                  Add To Bag
                </span>
              </div>

              <div className="cursor-pointer flex justify-center items-center mt-2 relative">
                <div className="hover:opacity-0">
                  <BsHeart className="w-[30px] h-[30px] fill-red-700 "></BsHeart>
                </div>

                <div className="absolute opacity-5  hover:opacity-100">
                  <BsHeartFill className=" w-[30px] h-[30px] fill-white   hover:fill-red-700 hover:visible "></BsHeartFill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
