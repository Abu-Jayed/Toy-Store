import img1 from "../../assets/LegoSection/img1.webp";
import img2 from "../../assets/LegoSection/img2.webp";
import img3 from "../../assets/LegoSection/img3.webp";
import simg1 from "../../assets/LegoSection/simg1.webp"
import simg2 from "../../assets/LegoSection/simg2.webp"
import simg3 from "../../assets/LegoSection/simg3.webp"
import simg4 from "../../assets/LegoSection/simg4.webp"
import Button from "../Button/Button";

const LegoSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      {/* section 1 start */}
      <div className="md:flex gap-5">
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={img1} alt="" />
          <Button>Shop Now</Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={img2} alt="" />
          <Button>Shop Now</Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={img3} alt="" />
          <Button>Shop Now</Button>
        </div>
      </div>
      {/* section 2 start */}
      <div className="md:flex gap-5 mt-10">
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={simg1} alt="" />
          <Button>Shop Now</Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={simg2} alt="" />
          <Button>Shop Now</Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={simg3} alt="" />
          <Button>Shop Now</Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="" src={simg4} alt="" />
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default LegoSection;
