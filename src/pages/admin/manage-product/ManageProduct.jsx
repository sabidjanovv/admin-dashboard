import React, { useEffect, useState } from "react";
import Products from "../../../components/Products";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { request } from "../../../api";
import { useSelector } from "react-redux";
import ProductCardSkeleton from "../../../components/ProductCardSkeleton";

const ManageProduct = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetch("/product/get");
  const [product, setProduct] = useState([]);
  const token = useSelector((s) => s.token.value);

  const fetchProducts = () => {
    request
      .get("/product/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProduct(res.data))
      .catch((error) => console.error("Error fetching product:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/create-product/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      request
        .delete(`/product/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Product deleted successfully.");
          fetchProducts();
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };
  return (
    <div className="mt-10">
      {loading && <ProductCardSkeleton />}
      {product.length > 0 ? (
        <Products
          data={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isAdmin={true}
        />
      ) : !loading ? (
        <p className="text-gray-600 text-center">No Products available.</p>
      ):""}
    </div>
  );
};

export default ManageProduct;
