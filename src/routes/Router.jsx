import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Career from "../pages/Career/Career";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('/services.json')
        },
        {
          path: '/service/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: () => fetch('/services.json')
        },
        {
          path: '/career',
          element: <PrivateRoute><Career></Career></PrivateRoute>,
          loader: () => fetch('/jobs.json')
        },
        {
          path: '/blogs',
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
          loader: () => fetch('/blogs.json')
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signup",
            element: <Signup></Signup>,
        }
      ]
    },
  ]);

export default router;