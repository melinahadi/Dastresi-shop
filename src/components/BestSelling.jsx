import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling } from "../features/sellingSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestSellingSwiper = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.bestselling);

  // رفرنس برای دکمه‌های ناوبری
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBestSelling());
  }, [dispatch]);

  if (status === "loading")
    return <p className="text-center">در حال بارگذاری...</p>;
  if (status === "failed")
    return <p className="text-red-500 text-center">خطا: {error}</p>;

  return (
    <div className="relative bg-gray-200 max-w-screen-lg  p-4 mx-auto md:px-12 md:pb-1 bg-gray-e2 xl:rounded-xl mb-8 xl:mx-4">
      <div className="flex w-full justify-between py-3 pb-4 px-4">
        <h2 className="text-2xl font-semibold text-gray-500">پرفروش ترین محصولات</h2>
        <div>
          <a href="#" className="flex text-base items-center gap-2">
            <span className="text-sm hidden md:block"> مشاهده همه محصولات</span>
            <img
              className="rounded-full w-6 h-6"
              src="src/assets/icon/r3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* دکمه‌های ناوبری سمت چپ و راست */}
      <button
        ref={nextRef}
        className="absolute  left-0 top-1/2 transform -translate-y-1/2 z-10  text-white p-2 rounded-full"
      >
        <img
          className="rounded-full rotate-180 w-6 h-6"
          src="src/assets/icon/chevron-r.jpg"
          alt="prev"
        />
      </button>
      <button
        ref={prevRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  text-white p-2 rounded-full"
      >
        <img
          className="rounded-full w-6 h-6"
          src="src/assets/icon/chevron-r.jpg"
          alt="next"
        />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5} // کاهش فاصله بین عکس‌ها
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => {
          // مقداردهی دکمه‌های ناوبری بعد از لود شدن Swiper
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {items.map((product) => (
          <SwiperSlide key={product.id} className="p-2">
            <div className="border rounded-lg shadow-sm hover:cursor-pointer hover:scale-105 transition-transform transform hover:shadow-md hover:rounded-lg bg-white p-2 text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-md mb-1"
              />
              <h3 className="text-md font-bold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              {product.discount ? (
                <p className="text-red-600 font-bold text-sm">
                  {product.discountedPrice} تومان{" "}
                  <span className="line-through text-gray-400 text-xs">
                    {product.originalPrice}
                  </span>
                </p>
              ) : (
                <p className="text-gray-800 font-bold text-sm">
                  {product.originalPrice} تومان
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellingSwiper;
