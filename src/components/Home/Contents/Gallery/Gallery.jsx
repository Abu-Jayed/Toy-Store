import {  BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";

const Gallery = () => {
    const handleOrderConfirm = () =>{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Order confirm successfully",
            showConfirmButton: false,
            timer: 1400,
          });
    }
    return (
        <div>
            <h1 className=" text-5xl font-bold hover:bg-rose-600 rounded-2xl mx-auto py-4 w-[500px] hover:text-white hover:rotate-2 ease-in duration-300 text-center mt-28 text-black">Toy Gallery
      
      </h1>
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/22528380_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Gund P Lushes April Flore Plus</a>
                <p className="font-bold text-xl px-5 pt-2">$15.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>   
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
                <p>4.6 <span className="text-violet-500"> (64)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500 ">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/22470285_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Ridly Jones | collectively Pluse-Ridly</a>
                <p className="font-bold text-xl px-5 pt-2">$8.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>   
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
                <p>4.7 <span className="text-violet-500"> (84)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/21920267_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Disney Pride Minnie Large Plush</a>
                <p className="font-bold text-xl px-5 pt-2">$13.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <p>5.0 <span className="text-violet-500"> (15)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/22528385_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Gund® P' Lushes Alaska Howell Plush</a>
                <p className="font-bold text-xl px-5 pt-2">$23.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <p>5.0 <span className="text-violet-500"> (35)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/23900520_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Geoffreys Toy Box 10" Tasties Egg </a>
                <p className="font-bold text-xl px-5 pt-2">$12.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
                <p>4.8 <span className="text-violet-500"> (52)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/24087607_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Geoffreys Toy Box 10" Avocado Bunny </a>
                <p className="font-bold text-xl px-5 pt-2">$17.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
                <p>4.7 <span className="text-violet-500"> (71)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/14524987_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">CLOSEOUT! Gund Sesame Street Bird</a>
                <p className="font-bold text-xl px-5 pt-2">$35.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <p>5.0 <span className="text-violet-500"> (19)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/24087616_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">Geoffrey's Toy Box 10" Donut Bunny</a>
                <p className="font-bold text-xl px-5 pt-2">$41.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
                <p>4.5 <span className="text-violet-500"> (56)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/22806950_fpx.tif" alt="" />
                <a href="" className="p-5 text-blue-400 font-bold">V-Friend Collectible Peacock Pluse</a>
                <p className="font-bold text-xl px-5 pt-2">$37.99</p>
                <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <p>5.0 <span className="text-violet-500"> (67)</span></p>
                <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500">Buy Now</button>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Gallery;