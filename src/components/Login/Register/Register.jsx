import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {



  const {createUser,updateUser} = useContext(AuthContext)
  const [error,setError] = useState('')
  const navagate = useNavigate();
  // console.log(user);
  const handleRegister = event =>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,imgUrl,email,password);

    if(password.length < 6){
      toast.error("password must have 6 charectar")
      return setError('password must have 6 charectar')
    }

    createUser(email,password)
    .then(result =>{
      toast.success('user created successfully.')
      const createdUser = result.user;
      console.log(createdUser);
      setError('')
    form.reset()
      setTimeout(() => navagate('/'), 2000)

      updateUser(name,imgUrl)
    })
    .catch(err => {
      // setError(err.message)
      console.log(err.message);
      toast.error(err.message)
    })
  };





  return (
    <>
      <div className="text-black md:w-[666px] mx-auto rounded-3xl bg-orange-900 p-10 mb-14 mt-14">
        <h3 className="text-center text-cyan-300 text-3xl font-bold tracking-wide mb-5">
          Register to your account
        </h3>
        <form onSubmit={handleRegister} className="w-96 mx-auto" >
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Image Url
              </span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="Image Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <div className="text-gray-100 tracking-wide  flex gap-12">
                <div className="flex">
                  <p className="mr-1">Have an account?</p>
                  <Link className="underline" to="/login">
                    {" "}
                    Login
                  </Link>
                </div>
              </div>
            </label>
          </div>
          <div className="form-control">
            <label className="flex gap-4 cursor-pointer mt-4">
              <input
                type="checkbox"
                className="border-2 border-white checkbox"
              />
              <span className="text-white">Remember me</span>
            </label>
          </div>
          <div className="form-control mt-6 mb-3">
            <button className="btn btn-warning">Register</button>
          </div>
        </form>
        <h1 className="text-3xl text-center font-semibold uppercase text-red-600">

        {
          error
        }
        </h1>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
