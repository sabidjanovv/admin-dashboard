import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate()
  return (
    <div id="admin" className="flex">
      <div className="w-80 h-screen bg-gray-800 p-6 text-white sticky top-0 left-0">
        <NavLink to={"/"}>
          <p className="text-2xl font-bold mb-6">Admin Dashboard</p>
        </NavLink>
        <ul className="space-y-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-3 rounded-md transition-colors duration-200 text-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
              to={"create-product"}
            >
              Create Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-3 rounded-md transition-colors duration-200 text-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
              to={"manage-product"}
            >
              Manage Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-3 rounded-md transition-colors duration-200 text-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
              to={"create-category"}
            >
              Create Category
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block p-3 rounded-md transition-colors duration-200 text-lg ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-500"
                }`
              }
              to={"manage-category"}
            >
              Manage Category
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
