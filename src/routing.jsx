import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Nopage } from "../src/Components/Nopage/Nopage";
import { Cards } from "./Components/Body/Card/Cards";
import { UserDetails } from "./Components/Body/UserDetaisl/UserDetails";
import { Posts } from "./Components/Body/Posts/Posts";
import { Postdetails } from "./Components/Body/Posts/Postdetails";
import { Services } from "./Components/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "*",
        element: <Nopage />,
      },
      {
        path: "/",
        element: <Cards />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/posts/:postdetails",
        element: <Postdetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postdetails}`
          ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
    ],
  },
]);
