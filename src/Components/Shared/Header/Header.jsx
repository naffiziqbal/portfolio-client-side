import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "./Header.css";
import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        icon: "success",
        text: "Log Out Successfull",
      });
    });
  };
  // console.log(user);
  const menuItems = {
    menuites: (
      <>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <Link to={"/allworks"}>All works</Link>
        </li>
        <li>
          <Link to={"/addworks"}>Add Works</Link>
        </li>
        <li>
          <Link to={"/posts"}>Posts</Link>
        </li>
        <li>
          {user ? (
            <Link to={"/admin"}>Admin</Link>
          ) : (
            <Link to={"/login"}>
              <p>
                Welcome
                <span className="text-blue-500"> Visitor</span>
              </p>
            </Link>
          )}
        </li>
        {user ? (
          <li>
            <ArrowRightOnRectangleIcon
              className="w-16 text-blue-400"
              onClick={handleLogOut}
            />
          </li>
        ) : (
          ""
        )}
      </>
    ),
  };
  return (
    <div className="bg">
      <div className="navbar bg-base-100 ">
        <div className="container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems.menuites}
              </ul>
            </div>
            <Link className=" normal-case  text-xl hover:text-primary duration-300" to={'/'}>
              <span className="text-primary">&lt;</span> Nafiz Iqbal  <span className="text-primary">/&gt;</span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems.menuites}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
