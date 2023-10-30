import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import AllToy from "../components/AllToy/AllToy";
import Details from "../components/Details/Details";
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/UpdateToy/UpdateToy";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../Shared/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import AddToy from "../components/AddToy/AddToy";

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
