import React from "react";
import { Outlet } from "react-router-dom";
import { Mainheader } from "../Header/Mainheader";
import { Mainfooter } from "../Footer/Mainfooter";

export const Home = () => {
  return (
    <div>
      <Mainheader></Mainheader>
      <Outlet></Outlet>
      <Mainfooter />
    </div>
  );
};
