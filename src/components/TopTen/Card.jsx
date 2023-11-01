import Button from "../Button/Button";

const Card = (props) => {
  const toy = props.toy;
  console.log("toy", toy);
  return (
    <>
      <div className="border p-[20px] pb-[3px] w-[290px] rounded-[20px] hover:shadow-xl hover:shadow-rose-300">
        <div className="absolute">
          <button className="bg-[#ac9156] py-1 px-2 text-white font-bold rounded-[4px]">
            Top 10 Toy
          </button>
        </div>
        <div className="mt-2 ml-[6px]">
          <img src={toy.img} alt="" />
        </div>
        <div className="relative -top-6 ">
          <h1 className="text-[18px] text-black font-bold">{toy.bName}</h1>
          <p className="font-medium text-gray-600">{toy.toyName}</p>
          <p className="text-3xl mt-2 font-bold">{toy.price}</p>
          {/* Button */}
          <div className="mt-4">
            <button className=" w-[205px] text-[15px] text-center py-[4px] border-2  border-red-600 rounded-[9px] bg-red-600 text-white  ">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
