import { Link } from "react-router-dom";
import logo from "../../assets/Toy-Hero-Logo.jpeg";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

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
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>All Toys</p>
              </li>
              <li>
                <p>My Toy</p>
              </li>
              <li>
                <p>Add A Toy</p>
              </li>
              <li>
                <p>Blog</p>
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
            <p className="font-bold text-4xl">Toy-Hero</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>All Toys</p>
            </li>
            <li>
              <p>My Toy</p>
            </li>
            <li>
              <p>Add A Toy</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-info">
            <button>Logout</button>
          </Link>
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
