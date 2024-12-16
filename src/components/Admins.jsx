import React from "react";
import BackButton from "./BackButton";

const Admins = ({ data, onDelete }) => {
  const adminItems = data?.map((admin) => (
    <div
      key={admin.id}
      className="w-full sm:w-80 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50 flex flex-col justify-between"
    >
      <div>
        <h1 className="text-xl font-bold text-purple-700 mb-2">
          ID: {admin.id}
        </h1>
        <p className="text-md font-medium text-gray-700 mb-1">
          Name: <span className="text-gray-900">{admin.name}</span>
        </p>
        <p className="text-md font-medium text-gray-700 mb-1">
          Email: <span className="text-gray-900">{admin.email}</span>
        </p>
        <p className="text-md font-medium text-gray-700 mb-1">
          Status:{" "}
          <span
            className={`font-semibold ${
              admin.is_active ? "text-green-600" : "text-red-600"
            }`}
          >
            {admin.is_active ? "Active" : "Not Active"}
          </span>
        </p>
        <p className="text-md font-medium text-gray-700 mb-1">
          Role:{" "}
          <span
            className={`font-semibold ${
              admin.is_creator ? "text-blue-600" : "text-purple-600"
            }`}
          >
            {admin.is_creator ? "Creator" : "Admin"}
          </span>
        </p>
        <p className="text-md font-medium text-gray-700 mb-1">
          Created At:{" "}
          <span className="text-gray-900">
            {new Date(admin.createdAt).toLocaleDateString()}
          </span>
        </p>
        <p className="text-md font-medium text-gray-700">
          Updated At:{" "}
          <span className="text-gray-900">
            {new Date(admin.updatedAt).toLocaleDateString()}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center space-x-4 mt-6">
        <button
          onClick={() => onDelete(admin.id)}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md hover:opacity-90 transition-all focus:outline-none shadow-md hover:shadow-lg"
        >
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto mt-8">
      <BackButton />
      <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
        Admin Management
      </h2>
      <div className="flex gap-6 flex-wrap justify-center">{adminItems}</div>
    </div>
  );
};

export default Admins;
