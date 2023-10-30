import "react-awesome-slider/dist/styles.css";
import out1 from "../../../assets/img/out1.png";
import out2 from "../../../assets/img/out2.png";
import out3 from "../../../assets/img/out3.png";
import out4 from "../../../assets/img/out4.png";
import out5 from "../../../assets/img/out5.png";
import out6 from "../../../assets/img/out6.png";
import out7 from "../../../assets/img/out7.png";
import out8 from "../../../assets/img/out8.png";
import AwesomeSlider from "react-awesome-slider";

const SummerToy = () => {
  return (
    <div className="bg-rose-100 w-[80%] rounded-3xl mx-auto">

    <div className="mx-auto w-[700px]">
      <AwesomeSlider className="">
        <div className=" h-full w-full bg-rose-100 ">
          <div className="flex items-center justify-center gap-5 mt-14">
            <img src={out1} alt="" />
            <img src={out2} alt="" />
          </div>
        </div>
        <div className=" h-full w-full bg-rose-100 ">
          <div className="flex items-center justify-center gap-5 mt-14">
            <img src={out3} alt="" />
            <img src={out4} alt="" />
          </div>
        </div>
        <div className=" h-full w-full bg-rose-100 ">
          <div className="flex items-center justify-center gap-5 mt-14">
            <img src={out5} alt="" />
            <img src={out6} alt="" />
          </div>
        </div>
        <div className=" h-full w-full bg-rose-100 ">
          <div className="flex items-center justify-center gap-5 mt-14">
            <img src={out7} alt="" />
            <img src={out8} alt="" />
          </div>
        </div>
      </AwesomeSlider>
    </div>
    </div>

  );
};

export default SummerToy;
