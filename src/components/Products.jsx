import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const Products = ({ data, onEdit, onDelete, isAdmin }) => {
  const reversedData = data?.slice().reverse();

  const productItems = reversedData?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-4 flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white transform hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain rounded-md mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-md text-gray-700 mt-2 font-medium">
          {product.price}{" "}
          <span className="text-md text-green-600 font-medium">USD</span>
        </p>
      </div>

      {isAdmin && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onEdit(product.id)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200"
          >
            <MdOutlineEdit className="mr-1 text-xl" />
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center text-red-600 hover:text-red-800 transition-all duration-200"
          >
            <FaRegTrashCan className="mr-1 text-xl" />
            Delete
          </button>
        </div>
      )}
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {productItems?.length ? (
        productItems
      ) : (
        <p className="text-lg text-gray-600">No products available.</p>
      )}
    </div>
  );
};

export default Products;
