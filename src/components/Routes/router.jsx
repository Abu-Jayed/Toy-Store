import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import AllToy from "../AllToy/AllToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:  'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '/alltoy',
            element: <AllToy></AllToy>
        }
    ]
  },
]);

export default router;
