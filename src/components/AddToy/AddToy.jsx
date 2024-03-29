/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Shared/hook/useTitle";

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // data.skills = selectedOption;

    fetch("https://toy-hero-server.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // toast.success('Toy added successfully')
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your toy added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result);
      });
    console.log(data);
  };
  console.log(user);
  return (
    <div className="">
      <div className="text-center">
        <div className="  ">
          <form className="mt-8 rounded-lg px-20 py-5 shadow-inner shadow-red-600 grid grid-cols-2 gap-2 w-[70%] md:mx-auto" onSubmit={handleSubmit(onSubmit)}>

            {/* copy code of input start */}
            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Name
                </span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Toy name here"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            {/* copy code of input end */}

            {/* quantity start */}
            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Quantity
                </span>
              </label>
              <input
                {...register("available_quantity")}
                type="text"
                placeholder="Quantity"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            {/* quantity end */}
            {/* price code start */}
            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Price
                </span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            {/* price code end */}

            {/* rating code start */}
            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Rating
                </span>
              </label>
              <input
                {...register("rating")}
                type="text"
                placeholder="Rating"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            {/* rating code end */}

            {/* Category code start */}

            <div className="form-control w-28">
              <select
                className="input input-bordered input-accent"
                {...register("category")}
              >
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="Harry Potter">Harry Potter</option>
              </select>
            </div>

            <div className="form-control w-28">
              <select
                className="input input-bordered input-accent"
                {...register("subCategory")}
              >
                <option value="Hero">Hero</option>
                <option value="Heroin">Heroin</option>
                <option value="Villain">Villain</option>
              </select>
            </div>
            {/* Category code end */}


            {/* picture start */}

            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Image URL
                </span>
              </label>
              <input
                {...register("picture")}
                placeholder="image link"
                type="url"
                defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            {/* picture end */}

            {/* email start */}

            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Email
                </span>
              </label>
              <input
                value={user?.email}
                {...register("postedBy")}
                placeholder="your email"
                type="email"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Seller name
                </span>
              </label>
              <input
                value={user?.displayName}
                {...register("sellerName")}
                placeholder="your email"
                type="email"

                className="block input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            {/* email end */}
            
            {/* description start */}

            <div className="form-control col-span-2">
              <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  Description
                </span>
              </label>
              <input
                {...register("description")}
                type="text"
                placeholder="Description"
                className="input input-bordered input-primary w-full h-20"
                required
              />
            </div>

            {/* description end */}
            
            <input
              className="mt-2 btn btn-warning text-gray-100 font-bold text-2xl hover:bg-rose-600 bg-rose-500"
              value="Add Toy"
              type="submit"
            />
          </form>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default AddToy;
