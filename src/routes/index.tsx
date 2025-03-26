import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "./Register";
import Forgot from "./Forgot";
import Reset from "./Reset";

import ProtectedRouteLayout from "./ProtectedRouteLayout";
import { Underline } from "lucide-react";
import Layout from "@/layouts/Layout";
let router = createBrowserRouter([
  {
    Component: ProtectedRouteLayout,
    children: [
      {
        path: "/",
        element: <Layout children={undefined} />,
      },
    ],
  },
  // {
  //   //halaman home
  //   path: "/",
  //   element: <Layout children={undefined} />,
  // },

  // {
  //   //halaman Login
  //   path: "/login",
  //   Component: Login,
  // },
  {
    //halaman Register
    path: "/register",
    Component: Register,
  },
  {
    //halaman Forgot
    path: "/forgot",
    Component: Forgot,
  },
  {
    //halaman Forgot
    path: "/reset",
    Component: Reset,
  },
]);
export default router;
