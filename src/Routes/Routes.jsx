import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import AllWorks from "../Components/Pages/AllWorks/AllWorks";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import NewPost from "../Components/Pages/Posts/NewPost";
import Posts from "../Components/Pages/Posts/Posts";
import Main from "../Layout/Main";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/allworks",
        element: <AllWorks />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/newpost",
        element: <NewPost />,
      },
    ],
  },
]);

export default route;
