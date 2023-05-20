/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Shared/hook/useTitle";

const AddToy = () => {
  useTitle('Add Toy')
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("https://toy-hero-server.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
  // const options = [
  //   { value: "JavaScript", label: "JavaScript" },
  //   { value: "C++", label: "C++" },
  //   { value: "HTML", label: "HTML" },
  //   { value: "CSS", label: "CSS" },
  //   { value: "React", label: "React" },
  //   { value: "Node", label: "Node" },
  //   { value: "MongoDB", label: "MongoDB" },
  //   { value: "Redux", label: "Redux" },
  // ];
  //   console.log(user);
  return (
    <div className="border-4 border-red-600">
      <div className="">
        <div className="grid grid-cols-2 border-4 border-pink-600 w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              {...register("name")}
              type="text"
              placeholder="Type name here"
              className="input input-bordered input-primary w-full max-w-xs"
            />


            <input
              {...register("price")}
              type="text"
              placeholder="Price"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("rating")}
              type="text"
              placeholder="rating"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("available_quantity")}
              type="text"
              placeholder="Quantity"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            
            <select className="input" {...register("category")}>
              <option value="Marvel">Marvel</option>
              <option value="DC">DC</option>
              <option value="Harry Potter">Harry Potter</option>
            </select>
            <select className="input" {...register("subCategory")}>
              <option value="Hero">Hero</option>
              <option value="Heroin">Heroin</option>
              <option value="Villain">Villain</option>
            </select>

            <input
              className="input"
              {...register("picture")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <input
              className="input"
              value={user?.email}
              {...register("postedBy")}
              placeholder="your email"
              type="email"
            />
            {/* <CreatableSelect
              className="w-60"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            /> */}

            <input
              {...register("description")}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input className="btn btn-warning" value="Post Job" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
