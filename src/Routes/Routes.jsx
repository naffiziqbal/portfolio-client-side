import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import AllWorks from "../Components/Pages/AllWorks/AllWorks";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import NewPost from "../Components/Pages/Posts/NewPost";
import PostDetails from "../Components/Pages/Posts/PostDetails";
import Posts from "../Components/Pages/Posts/Posts";
import Login from "../Components/UserCredintial/Login";
import SignUp from "../Components/UserCredintial/SignUp";
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
        path: "/post/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://portfolio-server-side-steel.vercel.app/post/${params.id}`),
      },
      {
        path: "/newpost",
        element: <NewPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default route;
