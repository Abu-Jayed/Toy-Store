import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import AllToy from "../AllToy/AllToy";
import Details from "../Details/Details";
import AddJob from "../addJob/addJob";

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
            path: '/alltoy/:limit',
            element: <AllToy></AllToy>,
            loader: ({params})=> fetch(`http://localhost:5000/allToy/${params.limit}`),
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path: 'addJob',
            element: <AddJob></AddJob>
        }
    ]
  },
]);

export default router;
