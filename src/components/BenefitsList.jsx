import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBenefits } from "../features/benefitsSlice";
import BenefitCard from "./BenefitCard";

const BenefitsList = () => {
  const dispatch = useDispatch();
  const {
    items: benefits = [],
    status,
    error,
  } = useSelector((state) => state.benefits);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBenefits());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <p className="text-center text-lg text-blue-600">در حال بارگذاری...</p>
    );
  }

  if (status === "failed") {
    return <p className="text-center text-red-500">خطا: {error}</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto text-center mt-5 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        چرا دسترسی رو برای خرید انتخاب کنیم؟
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsList;
