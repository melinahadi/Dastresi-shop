import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "../index.css"; // ✅ ایمپورت استایل‌های عمومی

const CategorySwiper = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }

    // چک کردن سایز صفحه برای فعال یا غیرفعال کردن Swiper
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true); // برای موبایل (یا تبلت‌های کوچک)
      } else {
        setIsMobile(false); // برای سایزهای بزرگتر
      }
    };

    // اجرا برای بار اول و هر بار که سایز صفحه تغییر کند
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [status, dispatch]);

  return (
    <div className="max-w-screen-lg mx-auto px-10 sm:px-6 py-12 relative">
      {/* عنوان دسته بندی */}
      <h3 className="text-center text-2xl font-bold mb-6">
        دسته‌بندی‌های منتخب
      </h3>

      {status === "loading" && (
        <p className="text-center">در حال بارگذاری...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-500">خطا در دریافت داده‌ها</p>
      )}

      {status === "succeeded" && (
        <>
          {isMobile ? (
            // در موبایل نمایش به صورت گرید
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-28 h-28 object-cover rounded-xl shadow-md transition-transform transform hover:cursor-pointer hover:-translate-y-2"
                  />
                </div>
              ))}
            </div>
          ) : (
            // در سایزهای بزرگتر نمایش به صورت Swiper
            <Swiper
              slidesPerView={6}
              spaceBetween={5}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              dir="rtl"
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 4 },
                640: { slidesPerView: 5, spaceBetween: 5 },
                1024: { slidesPerView: 6, spaceBetween: 9 },
              }}
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <div className="flex flex-col items-center">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-28 h-28 object-cover rounded-xl shadow-md transition-transform transform hover:cursor-pointer hover:-translate-y-2"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}

      {/* دکمه‌های نویگیشن سفارشی */}
      <div className="custom-swiper-button-prev hidden sm:flex ">
        <img
          className="rounded-full rotate-180 w-5 h-5 hidden sm:flex "
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>

      <div className="custom-swiper-button-next hidden sm:flex">
        <img
          className="rounded-full w-5 h-5 hidden sm:flex"
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategorySwiper;
