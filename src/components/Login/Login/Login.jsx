import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app)

const Login = () => {


  const { loginUser,user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/' ;

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()


    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        toast.success("user logged in successfully");
        console.log(user);


        setTimeout(()=>{
          if(from){
              navigate(from)
              // console.log(user);
          }
          else{
              navigate('/')
              // console.log(user);
              console.log("inside navigate home",from);
          }
      },2000)
      
        // navigate(from,{replace:true})
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  };

  /* login with google */
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("sign in with google successfully");
        // console.log(result.user);
        setError("");
        // console.log(from);
        // console.log(user);
        navigate(from)
        // redirect(from)

      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  };



  return (
    <>
      <div className="text-black md:w-[666px] mx-auto rounded-3xl bg-orange-900 p-10 mb-14 mt-14">
        <h3 className="text-center text-cyan-300 text-3xl font-bold tracking-wide mb-5">
          Login to your account
        </h3>
        <div className="flex justify-around gap-1">
          <button onClick={handleGoogleLogin} className=" btn btn-outline btn-success">
            <FaGoogle className="w-10 h-10"></FaGoogle>Login with google
          </button>
        </div>
        <form onSubmit={handleLogin} className="w-96 mx-auto">
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
                <div>
                  <Link className="underline">Forgot password?</Link>
                </div>
                <div className="flex">
                  <p className="mr-1">New user?</p>
                  <Link className="underline" to="/register">
                    {" "}
                    Register
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
            <button className="btn btn-warning">Login</button>
          </div>
        </form>
        {
          error
        }
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default Login;
