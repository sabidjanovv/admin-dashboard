import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admins from "../../../components/Admins";
import { request } from "../../../api";

const ManageAdmin = () => {
  const [admin, setAdmin] = useState([]);
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();

  const fetchCategories = () => {
    request
      .get("/admin/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAdmin(res.data))
      .catch((error) => console.error("Error fetching admin list:", error));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      request
        .delete(`/admin/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Admin deleted successfully.");
          fetchCategories();
        })
        .catch((error) => console.error("Error deleting admin:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            Manage Admins
          </h1>
          {/* <button
            onClick={() => navigate("/admin/create-admin")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Add Admin
          </button> */}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          {admin.length > 0 ? (
            <Admins data={admin} onDelete={handleDelete} />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No admins available. Click "Add Admin" to create one.
              </p>
              <img
                src="https://via.placeholder.com/400x300?text=No+Data"
                alt="No Data"
                className="mx-auto mt-6 opacity-60"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
