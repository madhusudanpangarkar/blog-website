import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    // { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  const navigate = useNavigate();

  const handleCreateBlog = () => {
    navigate("/create-blog")
  }
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const authToken = localStorage.getItem("authToken");
  const isLoggedIn = authToken !== null;

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('authToken');
    navigate('/');
    // You can also perform additional logout-related actions if needed
    // For example, redirecting to the login page or updating state in your app
  };
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="logo" className="h-16" />
        </a>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-white lg:flex gap-4 items-center hidden">
          
          {isLoggedIn ? (
            <>
            <Link onClick={handleCreateBlog} className="font-bold hover:text-orange-500">Create Blog</Link>
            <Link
                onClick={handleLogout}
                className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in"
              >
                Logout
              </Link>
             
            </>
          ) : (
            <>
            <a href="/" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaDribbble />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaTwitter />
            </a>
              <Link
                onClick={handleLogin}
                className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in"
              >
                Log in
              </Link>
              <Link
                onClick={handleRegister}
                className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
