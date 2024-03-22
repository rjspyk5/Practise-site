import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Menubar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <div className=" flex justify-between w-11/12 mx-auto">
        <div>
          <NavLink to="/">Logo</NavLink>
        </div>
        <ul className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-black" : " "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-black" : " "
            }
          >
            User
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-black" : " "
            }
          >
            Posts
          </NavLink>

          <NavLink
            to="/services"
            className={(el) => (el.isActive ? "text-green-500 font-black" : "")}
          >
            Services
          </NavLink>
        </ul>
      </div>
    </>
  );
};
