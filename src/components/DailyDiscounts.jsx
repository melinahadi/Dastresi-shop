import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyDiscounts } from "../features/dailyDiscountsSlice";

const DailyDiscounts = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.dailyDiscounts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDailyDiscounts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  if (status === "failed") return <p>خطا: {error}</p>;

  return (
    <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-sm min-h-screen max-w-screen-lg mx-auto mt-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 mr-3 flex items-center">
        <span className="text-red-500 text-3xl sm:text-4xl">
          % <br />
        </span>
        تخفیف‌های روزانه دسترسی
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ✅ ستون اول */}
        {items[0] && (
          <div className="border p-4 bg-white rounded-lg hover:shadow-xl hover:cursor-pointer transition flex flex-col h-full">
            <img
              src={items[0].image}
              alt={items[0].title}
              className="w-full h-48 sm:h-64 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-gray-500 text-base sm:text-lg font-bold">
              {items[0].title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{items[0].model}</p>
            <div className="mt-auto">
              <div className="flex justify-between mb-3 mt-4">
                <p className="text-red-400 font-bold text-sm sm:text-base">
                  {items[0].discount} تومان <br /> تخفیف
                </p>
                <p className="text-gray-400 line-through text-sm sm:text-base">
                  {items[0].oldPrice} تومان
                </p>
              </div>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">
                {items[0].newPrice} تومان
              </p>
            </div>
          </div>
        )}

        {/* ✅ ستون دوم */}
        {items[1] && (
          <div className="border p-4 bg-white rounded-lg hover:shadow-xl hover:cursor-pointer transition flex flex-col h-full">
            <img
              src={items[1].image}
              alt={items[1].title}
              className="w-full h-48 sm:h-64 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-gray-500 text-base sm:text-lg font-bold">
              {items[1].title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{items[1].model}</p>
            <div className="mt-auto">
              <div className="flex justify-between mb-3 mt-4">
                <p className="text-red-400 font-bold text-sm sm:text-base">
                  {items[1].discount} تومان <br /> تخفیف
                </p>
                <p className="text-gray-400 line-through text-sm sm:text-base">
                  {items[1].oldPrice} تومان
                </p>
              </div>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">
                {items[1].newPrice} تومان
              </p>
            </div>
          </div>
        )}

        {/* ✅ ستون سوم - کارت‌های افقی حتی در موبایل */}
        <div className="flex flex-col gap-4">
          {items.slice(2, 5).map((item) => (
            <div
              key={item.id}
              className="border p-4 bg-white rounded-lg hover:shadow-lg transition flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 sm:h-32 sm:w-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-gray-500 text-sm font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.model}</p>
                <div className="mt-2">
                  <div className="flex justify-between mb-2 text-xs">
                    <p className="text-red-400 font-bold">
                      {item.discount} تومان <br /> تخفیف
                    </p>
                    <p className="text-gray-400 line-through">
                      {item.oldPrice}
                    </p>
                  </div>
                  <p className="text-blue-600 text-sm font-bold">
                    {item.newPrice} تومان
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyDiscounts;
