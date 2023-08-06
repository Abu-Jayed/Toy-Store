import { useEffect } from "react"
import fav_cat_1 from "../../../../assets/img/Fav_Cat/Fav_Cat_1.webp"
import fav_cat_2 from "../../../../assets/img/Fav_Cat/Fav_Cat_2.webp"
import fav_cat_3 from "../../../../assets/img/Fav_Cat/Fav_Cat_3.webp"
import fav_cat_4 from "../../../../assets/img/Fav_Cat/Fav_Cat_4.webp"
import fav_cat_5 from "../../../../assets/img/Fav_Cat/Fav_Cat_5.webp"
import fav_cat_6 from "../../../../assets/img/Fav_Cat/Fav_Cat_6.webp"
import fav_cat_7 from "../../../../assets/img/Fav_Cat/Fav_Cat_7.webp"
import fav_cat_8 from "../../../../assets/img/Fav_Cat/Fav_Cat_8.webp"
import { useState } from "react"


const FavouriteCategory = () => {

  const data = [
    {
      img: fav_cat_1,
      category: "Outdoor Toys"
    },
    {
      img: fav_cat_2,
      category: "Construction"
    },
    {
      img: fav_cat_3,
      category: "Soft Toys"
    },
    {
      img: fav_cat_4,
      category: "PreSchool"
    },
    {
      img: fav_cat_5,
      category: "Games & Puzzles"
    },
    {
      img: fav_cat_6,
      category: "Dolls"
    },
    {
      img: fav_cat_7,
      category: "Action Toy"
    },
    {
      img: fav_cat_8,
      category: "Arts & Crafts"
    },
  ]

  return (
    <div>

    <div className="grid md:grid-cols-4 grid-cols-1 mt-24 gap-4">
      {
        data.map((data,i)=>{
          return <div key={i}>
            <img src={data.img} alt="not found" />
            <h1 className="text-center font-bold text-3xl text-black">{data.category}</h1>
            <div className="mb-4 mt-4 text-center cursor-pointer">
            <span className="text-center px-[30px] py-[8px] border-2  border-red-600 rounded-3xl hover:bg-red-600 hover:text-white font-semibold text-[] ">Shop Now</span>
            </div>
          </div>
        })
      }
    </div>
      </div>
  );
};

export default FavouriteCategory;