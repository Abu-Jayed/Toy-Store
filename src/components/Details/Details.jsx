import { toast } from "react-hot-toast";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Shared/hook/useTitle";

const Details = () => {
    useTitle('Toy Details')
  const data = useLoaderData();
  const {
    picture,
    price,
    rating,
    subCategory,
    name,
    description,
    available_quantity,
  } = data[0];
  console.log(name);
  console.log(data);
  return (
    <div>
        <h1 className="text-4xl text-warning font-bold text-center">Click View details to see details</h1>
      {/* modal start here */}
      <div className="text-center">

      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <img src={picture} alt="" />
          <p className="text-5xl font-bold text-orange-400 py-4">
            {
                name
            }
          </p>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">{price}</p>
                        <p>{rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <p>now available {available_quantity}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
      </div>

      {/* modal end here */}
    </div>
  );
};

export default Details;
