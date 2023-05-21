import { Link } from "react-router-dom";
import logo from "../../assets/Toy-Hero-Logo.jpeg";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavigationBar = () => {
  const [error, setError] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return toast.success("User logout successfully");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
  console.log(error);
  return (
    <div>
      {/* navbar code from daisyui start */}
      <div className="navbar bg-rose-600 text-white font-bold p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-600 text-white rounded-box w-52"
            >
              <li>
              <Link to='/'>
              <p className="text-4xl">Toy Hero</p>
              </Link>
            </li>
              <li>
              <Link to='/'>
              <p>Home</p>
              </Link>
            </li>
            <li>
            <Link to='/alltoy/20'>
              <p>All Toys</p>
            </Link>
            </li>
            <li>
              <Link to='/myToys'>
              <p>My Toy</p>
              </Link>
            </li>
            <li>
              <Link to='/addToy'>
              <p>Add A Toy</p>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
              <p>Blog</p>
              </Link>
            </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn bg-white border-none hover:bg-white normal-case text-xl"
          >
            <img src={logo} className="w-12 h-12" alt="" />
          </Link>
          <Link to="/">
            <p className="font-bold opacity-0 md:opacity-100 md:text-4xl ml-1">Toy-Hero</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>
              <p className="">Home</p>
              </Link>
            </li>
            <li>
            <Link to='/alltoy/20'>
              <p>All Toys</p>
            </Link>
            </li>
            <li>
              <Link to='/myToys'>
              <p>My Toy</p>
              </Link>
            </li>
            <li>
              <Link to='/addToy'>
              <p>Add A Toy</p>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
              <p>Blog</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <img title={user?.displayName} className="w-14 rounded-full" src={user?.photoURL} alt="" /> : ''
          }
          {user ? (
            <>
            &nbsp;
            <Link onClick={handleLogOut} className="btn btn-warning  text-white w-[73px] md:w-auto font-serif md:text-xl">
            <button className="">Logout</button>
          </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          )}
        </div>
      </div>
      {/* navbar code from daisyui end */}
    </div>
  );
};

export default NavigationBar;
