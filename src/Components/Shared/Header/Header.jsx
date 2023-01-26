import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch(`https://portfolio-server-side-steel.vercel.app/user`)
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
  console.log(user);
  const menuItems = {
    menuites: (
      <>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="/home/#contact">Contact</a>
        </li>
        <li>
          <Link to={"/allworks"}>All works</Link>
        </li>
        <li>
          <Link to={"/posts"}>Posts</Link>
        </li>
        <li>
          <a
            target={"_blank"}
            href="https://drive.google.com/file/d/13iYznwmR6BoSOJJDa-Z8EDsH7SJpOpbC/view?usp=share_link"
            className="text-primary"
          >
            Download Resume
          </a>
        </li>
        <li>
          {" "}
          <p>
            Welcome{" "}
            <p className="text-blue-500">
              {user.user === "Nafiz Iqbal" ? user.user : "Visitor"}
            </p>{" "}
          </p>
        </li>
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
            <Link className="btn btn-ghost normal-case text-xl">
              Nafiz Iqbal
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
