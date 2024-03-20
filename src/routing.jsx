import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Nopage } from "../src/Components/Nopage/Nopage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "*",
        element: <Nopage />,
      },
    ],
  },
]);
