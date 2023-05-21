import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import AllToy from "../AllToy/AllToy";
import Details from "../Details/Details";
import MyToys from "../MyToys/MyToys";
import UpdateToy from "../UpdateToy/UpdateToy";
import Blog from "../Blog/Blog";
import ErrorPage from "../Shared/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import AddToy from "../AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
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
            loader: ({params})=> fetch(`https://toy-hero-server.vercel.app/allToy/${params.limit}`),
        },
        {
            path: '/details/:id',
            element: <PrivetRoute><Details></Details></PrivetRoute> ,
            loader: ({params}) => fetch(`https://toy-hero-server.vercel.app/details/${params.id}`)
        },
        {
            path: 'addToy',
            element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
        {
            path: 'myToys',
            element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
        },
        {
            path: '/update/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://toy-hero-server.vercel.app/details/${params.id}`)
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        }
    ]
  },
]);

export default router;
