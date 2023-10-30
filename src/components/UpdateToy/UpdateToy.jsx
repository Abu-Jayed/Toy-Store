import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Shared/hook/useTitle";

const UpdateToy = (props) => {
  useTitle('Update Toy')
    const data = useLoaderData()
    const navigate = useNavigate()
    console.log(data);
    // console.log('id',data[0]._id);
    const id = [...data]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line react/prop-types
  /* update toy start */
  
  
  const onSubmit = (data) => {

    fetch(`https://toy-hero-server.vercel.app/updateToy/${id[0]._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your toy data updated successfully.',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/myToys')
      });
    console.log('data from onsubmit', data);
    console.log('id from onSubmit',id[0]._id);
  };

console.log(data);


  return (
    <div className="text-center mt-32">
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn btn-warning h-20 px-7 text-3xl font-bold text-red-700">
        Click Here To Update Toy
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
              defaultValue={data[0]?.name}
            />

            <input
              {...register("price")}
              type="text"
              defaultValue={data[0]?.price}
              placeholder="price"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("rating")}
              type="text"
              defaultValue={data[0]?.rating}
              placeholder="rating"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              {...register("available_quantity")}
              type="text"
              placeholder="Quantity"
              defaultValue={data[0]?.available_quantity}
              className="input input-bordered input-primary w-full max-w-xs"
            />
<br />
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
<br />
            <input
              className="input"
              {...register("picture")}
              placeholder="image link"
              type="url"
              defaultValue={data[0]?.picture}
            /> 
            <input
              className="input"
              {...register("postedBy")}
            //   placeholder="your email"
              defaultValue={data[0]?.postedBy}
              type="email"
              disabled
            />
            

            <input
              {...register("description")}
              type="text"
              placeholder="Write description here"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input className="btn btn-warning" value="Update" type="submit" />
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn bg-rose-500 hover:bg-rose-600">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
