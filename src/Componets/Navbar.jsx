import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImBlogger } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const auth = localStorage.getItem("user");

  const loginuser = JSON.parse(localStorage.getItem("user"));

  const [nav, setnav] = useState(false);

  const settingNav = () => {
    setnav(!nav);
  };

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-full top-0 sticky z-10">
      <div className="bg-blue-400 text-white flex justify-between p-3 m-2 ">
        <Link to={"/blogs"}>
          <span className="flex items-center font-bold text-yellow-300">
            <ImBlogger size={30} className="text-yellow-300" />
            <h1>logger</h1>
          </span>
        </Link>
        {auth ? (
          <div className="justify-between flex items-center">
            <div className="md:flex hidden">
              <NavLink to={"/blogs"}>
                {" "}
                <h1 className="px-3 cursor-pointer font-bold ">Blogs</h1>
              </NavLink>
              <NavLink to={"/userblogs"}>
                {" "}
                <h1 className="px-3 cursor-pointer font-bold">My Blogs</h1>{" "}
              </NavLink>
              <NavLink to={"/addblog"}>
                {" "}
                <h1 className="px-3 cursor-pointer font-bold">
                  + Add Blog
                </h1>{" "}
              </NavLink>
              <h1 onClick={logOut} className="px-3 cursor-pointer font-bold">
                Logout
              </h1>
            </div>

            <div onClick={settingNav} className="md:hidden">
              {!nav ? <FaBars /> : <AiOutlineClose />}
            </div>

            <div
              className={
                nav ? "fixed top-0 left-2 duration-500" : " fixed top-[-100%]"
              }
            >
              <div className="flex flex-col bg-yellow-400 h-[300px] p-3 gap-5 mt-20 z-1 w-[200px]">
                <NavLink to={"/blogs"}>
                  {" "}
                  <h1 className="p-2 cursor-pointer font-bold ">Blogs</h1>
                </NavLink>
                <NavLink to={"/userblogs"}>
                  {" "}
                  <h1 className="p-2 cursor-pointer font-bold">
                    My Blogs
                  </h1>{" "}
                </NavLink>
                <NavLink to={"/addblog"}>
                  {" "}
                  <h1 className="p-2 cursor-pointer font-bold">
                     Add Blog
                  </h1>{" "}
                </NavLink>
                <h1 onClick={logOut} className="p-2 cursor-pointer font-bold">
                  Logout
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <ul className="flex items-center gap-6">
            <NavLink to={"/"}>
              <h1 className="px-3 cursor-pointer font-bold">Login</h1>
            </NavLink>
            <NavLink to={"/register"}>
              <h1 className="px-3 cursor-pointer font-bold">Register</h1>
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};
