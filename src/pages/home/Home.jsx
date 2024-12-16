import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Products from "../../components/Products";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import SliderSection from "../../components/SliderSection";
import Brands from "../../components/Brands";
import NewProducts from "../../components/NewProducts";

const Home = () => {
  const { data, loading } = useFetch("/product/get");

  // Separate new products (if needed, filter logic can be moved here)
  const newProducts = data?.filter((product) => {
    const currentDate = new Date();
    const createdAtDate = new Date(product.createdAt);
    const differenceInDays =
      (currentDate - createdAtDate) / (1000 * 60 * 60 * 24);
    return differenceInDays <= 2; // Show products created within the last 2 days
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Slider Section */}
      <SliderSection />

      {/* Brands Section */}
      <Brands />

      {/* Main Content */}
      <div className="w-full max-w-screen-xl bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        {/* Just In (New Products Section) */}
        <h2 className="text-3xl font-semibold mb-5 text-start text-gray-900">
          Just In
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : newProducts?.length ? (
          <NewProducts data={newProducts} />
        ) : (
          <p className="text-lg text-gray-500">No new products available.</p>
        )}

        {/* All Products Section */}
        <h2 className="text-3xl font-semibold mt-10 mb-5 text-start text-gray-900">
          All Products
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <Products data={data} />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 w-full bg-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
