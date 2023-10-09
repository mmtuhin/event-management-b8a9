import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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