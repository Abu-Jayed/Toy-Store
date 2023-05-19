import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateToy = (props) => {
    const data = useLoaderData()
    console.log(data);
    // console.log('id',data[0]._id);
    const id = [...data]

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line react/prop-types
  /* update toy start */
  
  
  const onSubmit = (data) => {

    fetch(`http://localhost:5000/updateJob/${id[0]._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log('data from onsubmit', data);
    console.log('id from onSubmit',id[0]._id);
  };



//   const handleJobUpdate = (data) => {
//     console.log(data);
//     fetch(`http://localhost:5000/updateJob/${data}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       })}
      /* update toy end */

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">update</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              {...register("name")}
              type="text"
              placeholder="Type name here"
              className="input input-bordered input-primary w-full max-w-xs"
              defaultValue={data.name}
            />

            <input
              {...register("price")}
              type="text"
              defaultValue={data[0]?.price}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("rating")}
              type="text"
              placeholder="rating"
              defaultValue={props?.job?.rating}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("available_quantity")}
              type="text"
              placeholder="Quantity"
              defaultValue={props?.job?.available_quantity}
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
              {...register("postedBy")}
            //   placeholder="your email"
              defaultValue={props?.job?.postedBy}
              type="email"
            />
            

            <input
              {...register("description")}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input className="btn btn-warning" value="Update" type="submit" />
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
