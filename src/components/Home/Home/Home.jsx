import { Toaster } from "react-hot-toast";
import Category from "../Contents/Category/Category";
import Discount from "../Contents/Discount.jsx/Discount";
import Gallery from "../Contents/Gallery/Gallery";
import Slider from "../Contents/Slider/Slider";
import ByAge from "../Contents/ByAge/ByAge";
import ByCategory from "../Contents/ByCategory/ByCategory";

const Home = () => {
    return (
        <div>
            <Toaster />
            <Discount></Discount>
            <Slider></Slider>
            <Gallery></Gallery>
            <Category></Category>
            <ByAge></ByAge>
            <ByCategory></ByCategory>
        </div>
    );
};

export default Home;