import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

let router = createBrowserRouter([
  {
    //halaman home
    path: "/",
    Component: Home,
  },
  {
    //halaman home
    path: "/about",
    Component: About,
  },
]);
export default router;
