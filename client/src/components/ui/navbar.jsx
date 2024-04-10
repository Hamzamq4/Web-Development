import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFolder,
  AiFillHome,
  AiFillMail,
  AiFillLike,
} from "react-icons/ai";

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
    { id: 2, text: "Projects", href: "/projects", icon: <AiFillFolder /> },
    {
      id: 3,
      text: "Testimonals",
      href: "/testimonials",
      icon: <AiFillLike />,
    },
    { id: 4, text: "Contact", href: "/contact", icon: <AiFillMail /> },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 min-w-screen mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/">Hamza and Simon</Link>
      </h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
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
            ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Hamza and Simon
        </h1>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
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
  );
};

export default Navbar;
