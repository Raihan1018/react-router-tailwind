import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <ul className="flex justify-center items-center gap-7">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 text-3xl underline"
                : "text-white text-3xl"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 text-3xl underline"
                : "text-white text-3xl"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 text-3xl underline"
                : "text-white text-3xl"
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 text-3xl underline"
                : "text-white text-3xl"
            }
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
