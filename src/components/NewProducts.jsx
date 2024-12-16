import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan, FaRegHeart, FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewProducts = ({ data, onEdit, onDelete, isAdmin }) => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Filter products to exclude those created more than 2 days ago
  const filteredData = data?.filter((product) => {
    const createdAtDate = new Date(product.createdAt);
    const differenceInDays =
      (currentDate - createdAtDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    return differenceInDays <= 4; // Include only products created within 2 days
  });

  // Reverse the filtered data to show the latest products first
  const reversedData = filteredData?.slice().reverse();

  // Add to Cart Handler (Placeholder)
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    // Add product to cart logic here (use context or redux)
  };

  // Handle favorite toggle
  const [favorites, setFavorites] = useState({});

  const handleFavoriteToggle = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  // Generate product cards
  const productItems = reversedData?.map((product) => (
    <div
      key={product.id}
      className="relative group min-w-[320px] w-80 p-4 flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-transform bg-white transform hover:scale-105"
    >
      <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded-full">
        NEW
      </div>

      {/* Heart icon for favorites */}
      <div
        className="absolute top-4 right-4 text-red-600 cursor-pointer"
        onClick={() => handleFavoriteToggle(product.id)}
      >
        {favorites[product.id] ? (
          <FaHeart className="text-2xl" />
        ) : (
          <FaRegHeart className="text-2xl" />
        )}
      </div>

      <img
        // onClick={() => navigate(`/product/${product.id}`)}
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain rounded-md mb-4 cursor-pointer"
      />
      <div className="flex flex-col flex-grow">
        <h3
          className="text-xl font-semibold text-gray-800 truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <p className="text-md text-gray-700 mt-2 font-medium">
          {product.price}
          <span className="text-md text-green-600 font-medium ml-1">USD</span>
        </p>
      </div>

      {isAdmin && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onEdit(product.id)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200"
            aria-label={`Edit ${product.name}`}
          >
            <MdOutlineEdit className="mr-1 text-xl" />
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center text-red-600 hover:text-red-800 transition-all duration-200"
            aria-label={`Delete ${product.name}`}
          >
            <FaRegTrashCan className="mr-1 text-xl" />
            Delete
          </button>
        </div>
      )}

      {/* Add to Cart button visible on hover */}
      <button
        onClick={() => handleAddToCart(product)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="w-full overflow-x-scroll flex items-center gap-6 bg-gray-100 p-4 rounded-md shadow-md">
      {productItems?.length ? (
        productItems
      ) : (
        <p className="text-lg text-gray-600">No new products available.</p>
      )}
    </div>
  );
};

export default NewProducts;
    