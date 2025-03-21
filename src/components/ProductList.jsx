import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    items: products = [],
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-semibold text-blue-600">
          در حال بارگذاری...
        </p>
      </div>
    );
  }

  if (status === "failed") {
    return <p className="text-red-500">خطا: {error}</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-200 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-500 mb-4 mr-3 flex items-center">
        <span className="text-red-500 text-4xl">% <br /></span >تخفیف‌های روزانه دسترسی 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
