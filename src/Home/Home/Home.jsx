import owener from "../../assets/img/owener.jpg";
import './Home.css'
import { Toaster } from "react-hot-toast";
import Category from "../Contents/Category/Category";
import Discount from "../Contents/Discount.jsx/Discount";
import Gallery from "../Contents/Gallery/Gallery";
import Slider from "../Contents/Slider/Slider";
import ByAge from "../Contents/ByAge/ByAge";
import ByCategory from "../Contents/ByCategory/ByCharecters";
import useTitle from "../../Shared/hook/useTitle";
import ByBrand from "../Contents/ByBrand/ByBrand";
import ByBestSelling from "../Contents/ByCharacter/ByBestSelling";
import FavouriteCategory from "../Contents/FaveriteCategory/FavouriteCategory";
import BestOfYear from "../Contents/BestOfYear/BestOfYear";
import SummerToy from "../Contents/SummerToy/SummerToy";
import HeroHeading from "../../components/HeroHeading/HeroHeading";
import LegoSection from "../../components/LegoSection/LegoSection";
import TopTen from "../../components/TopTen/TopTen";
import FavouriteBrand from "../../components/FavouriteBrand/FavouriteBrand";
import LegoStore from "../../components/LegoStore/LegoStore";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Toaster />
      <Discount></Discount>
      <Slider></Slider>
      <HeroHeading></HeroHeading>
      <LegoSection></LegoSection>
      <ByAge></ByAge>
      <Gallery></Gallery>
      <Category></Category>
      <ByCategory></ByCategory>
      {/* <ByBrand></ByBrand> */}
      <FavouriteCategory></FavouriteCategory>
      <TopTen></TopTen>
      <FavouriteBrand></FavouriteBrand>
      <LegoStore></LegoStore>
      <BestOfYear></BestOfYear>
      <div className="divBg">
        <div>
          <ByBestSelling></ByBestSelling>
        </div>
      </div>
      <SummerToy></SummerToy>
      <div className='grid md:grid-cols-2 mt-20'>
        <div className=' mx-auto'>
            <img className='' src={owener} alt="" />
        </div>
        <div className=''>
            <h1 className='font-bold text-center text-3xl'>Delivering The Finest Toys Since 1760</h1>
            <p className='mt-5 text-center'>The toys may have changed, but if he were here today, we're sure William Hamley would recognise the same delighted faces as he guided you round the shop he dreamt of as a boy.</p>
            <div className='flex justify-center gap-4 mt-8' >

            <button className='btn btn-outline hover:bg-rose-700 rounded-2xl'>Find a store</button> <br />
            <button className='btn btn-outline  hover:bg-rose-700 rounded-2xl'>What's in store</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
