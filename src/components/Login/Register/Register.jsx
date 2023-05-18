import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="text-black md:w-[666px] mx-auto rounded-3xl bg-orange-900 p-10 mb-14 mt-14">
        <h3 className="text-center text-cyan-300 text-3xl font-bold tracking-wide mb-5">
          Register to your account
        </h3>
        <form className="w-96 mx-auto">
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
      </div>
    </>
  );
};

export default Register;
