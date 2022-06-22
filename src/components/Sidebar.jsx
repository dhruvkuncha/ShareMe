import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";
import { categories } from "../utils/data";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  const isNotActiveStyle =
    "flex items-center px-5 text-grey-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center px-5 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";



  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 item-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full mt-5" />
        </Link>
        <div className="flex flex-col gap-5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <div className="mr-5">
              <img src={category.image} alt="category-image"
              className="w-8 h-8 rounded-full shadow-sm" />
              </div>
              {category.name}
            </NavLink>
          ))}
        </div>
        
      </div>
      {user && (
        <Link to={`user-profile/${user._id}`} className="flex my-5 mb-5 gap-2 p-2 items-center bg-gray-300 rounded-lg shadow-lg mx-3"
        onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
