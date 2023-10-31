import fav_cat_1 from "../../../assets/img/Fav_Cat/Fav_Cat_n-1.webp"
import fav_cat_2 from "../../../assets/img/Fav_Cat/Fav_Cat_n-2.webp"
import fav_cat_3 from "../../../assets/img/Fav_Cat/Fav_Cat_n-3.webp"
import fav_cat_4 from "../../../assets/img/Fav_Cat/Fav_Cat_n-4.webp"
import fav_cat_5 from "../../../assets/img/Fav_Cat/Fav_Cat_n-5.webp"
import fav_cat_6 from "../../../assets/img/Fav_Cat/Fav_Cat_n-6.webp"
import fav_cat_7 from "../../../assets/img/Fav_Cat/Fav_Cat_n-7.webp"
import fav_cat_8 from "../../../assets/img/Fav_Cat/Fav_Cat_n-8.webp"
import Button from "../../../components/Button/Button"



const FavouriteCategory = () => {

  const data = [
    {
      img: fav_cat_1,
      category: "Construction"
    },
    {
      img: fav_cat_2,
      category: "Soft Toys"
    },
    {
      img: fav_cat_3,
      category: "PreSchool"
    },
    {
      img: fav_cat_4,
      category: "Vehicles"
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
      category: "Arts & Crafts"
    },
    {
      img: fav_cat_8,
      category: "Sports & Leisure"
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
<h1 className="text-[40px] font-bold text-black text-center mt-10 mb-5">Favourite Categories</h1>
    <div className="grid md:grid-cols-4 grid-cols-1  gap-4">
      {
        data.map((data,i)=>{
          return <div key={i}>
            <img src={data.img} alt="not found" />
            <h1 className="text-center font-bold text-3xl text-black">{data.category}</h1>
            {/* <div className="mb-4 mt-4 text-center cursor-pointer">
            <span className="text-center px-[30px] py-[8px] border-2  border-red-600 rounded-3xl hover:bg-red-600 hover:text-white font-semibold text-[] ">Shop Now</span>
            </div> */}
            <Button>Shop Now</Button>
          </div>
        })
      }
    </div>
      </div>
  );
};

export default FavouriteCategory;