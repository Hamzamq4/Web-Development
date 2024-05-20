import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFolder,
  AiFillHome,
  AiFillMail,
} from "react-icons/ai";
import { RiGroup2Fill } from "react-icons/ri";
import logo from "/Logo.svg";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", href: "/", icon: <AiFillHome /> },
    {
      id: 2,
      text: "About",
      href: "/about",
      icon: <RiGroup2Fill />,
    },
    { id: 3, text: "Projects", href: "/projects", icon: <AiFillFolder /> },
    { id: 4, text: "Contact", href: "/contact", icon: <AiFillMail /> },
  ];

  return (
    <div className="pt-4 pb-4 align-middle items-center">
      <div className="bg-foreground shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] flex justify-between items-center mx-auto max-w-[1355px] text-white rounded-3xl p-4 lg:pr-4 lg:pl-4 lg:pt-1 lg:pb-1">
        {/* Logo */}
        <h1 className="w-full text-xl font-bold">
          <Link to="/">Hamza and Simon</Link>
        </h1>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-background rounded-xl m-2 cursor-pointer duration-300 hover:text-white"
            >
              <Link
                to={item.href}
                onClick={handleNav}
                className="flex items-center"
              >
                {item.icon} <span className="ml-2">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r  bg-foreground ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-white m-4">
            Hamza and Simon
          </h1>
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 mt-10 border-b rounded-xl hover: hover:text-white cursor-pointer  text-xl"
            >
              <Link
                to={item.href}
                onClick={handleNav}
                className="flex items-center"
              >
                {item.icon} <span className="ml-2">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
