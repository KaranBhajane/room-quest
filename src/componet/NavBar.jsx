import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { toast } from 'react-hot-toast';
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
        toast.success("Logout Successful");
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear("user");
        closeMenu();
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        toast.error("Logout failed. Please try again.");
      });
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex items-center space-x-3">
          <Link to="/" onClick={handleMenuItemClick}>
            <img src={logo} className="h-8" alt="SafeSpace Logo" />
          </Link>
          <Link to="/" onClick={handleMenuItemClick}>
            <div className="text-white font-bold text-xl">SafeSpace</div>
          </Link>
        </span>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-[3rem] right-0 md:top-0 md:right-auto bg-purple-600 md:bg-transparent w-full md:w-auto text-left md:text-left`}
        >
          <li className="border-t border-purple-400 md:border-0">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <Link
              to="/emergencycontacts"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Emergency Contacts
            </Link>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <Link
              to="/supportresources"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Support Resources
            </Link>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <Link
              to="/reachout"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Reach Out
            </Link>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <Link
              to="/about"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="border-t border-purple-400 md:border-0">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={handleMenuItemClick}
                >
                  Login
                </Link>
              </li>
              <li className="border-t border-purple-400 md:border-0">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={handleMenuItemClick}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="border-t border-purple-400 md:border-0">
              <button
                onClick={logout}
                className="block px-4 py-2 text-white hover:underline"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
