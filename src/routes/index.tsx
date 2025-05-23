import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import Reset from "./Reset";
import Profile from "./Profile";
import Follow from "./Follow";
import Search from "./Search";

import ProtectedRouteLayout from "./ProtectedRouteLayout";

let router = createBrowserRouter([
  {
    Component: ProtectedRouteLayout,
    children: [
      {
        path: "/",
        Component: Home,
        // element: <Layout children={undefined} />,
      },
      {
        path: "/search",
        Component: Search,
      },

      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/follow",
        Component: Follow,
      },
    ],
  },

  {
    //halaman Register
    path: "/login",
    Component: Login,
  },
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
