import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  const activeClass = "text-blue-500 border-b-2 border-blue-500";

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="w-full max-w-screen-xl h-[60px] px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold">
          <NavLink to="/" className="hover:text-blue-500">
            MyApp
          </NavLink>
        </h1>
        <div className="flex space-x-4 sm:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? activeClass : ""}`
            }
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? activeClass : ""}`
            }
          >
            Register
          </NavLink>

          {token ? (
            <NavLink
              to={"/admin/manage-product"}
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? activeClass : ""}`
              }
            >
              Admin
            </NavLink>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? activeClass : ""}`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
