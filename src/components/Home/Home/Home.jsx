import { Toaster } from "react-hot-toast";
import Category from "../Contents/Category/Category";
import Discount from "../Contents/Discount.jsx/Discount";
import Gallery from "../Contents/Gallery/Gallery";
import Slider from "../Contents/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Toaster />
            <Discount></Discount>
            <Slider></Slider>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;