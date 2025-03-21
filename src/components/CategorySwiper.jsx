import React, { useEffect } from "react";
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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12 relative">
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
        <Swiper
          slidesPerView={6}
          spaceBetween={5} // کاهش فاصله بین آیتم‌ها
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          loop={true} // ✅ فعال کردن حالت حلقه‌ای
          autoplay={{ delay: 2000, disableOnInteraction: false }} // حرکت خودکار هر ۲ ثانیه
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          dir="rtl" // حرکت از راست به چپ
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 }, // موبایل (۲ آیتم با فاصله کم)
            640: { slidesPerView: 3, spaceBetween: 8 }, // تبلت (۳ آیتم با فاصله کمتر)
            1024: { slidesPerView: 6, spaceBetween: 9 }, // دسکتاپ (۶ آیتم)
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

      {/* دکمه‌های نویگیشن سفارشی */}

      <div className="custom-swiper-button-prev">
        <img
          className="rounded-full rotate-180 w-5 h-5"
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>

      <div className="custom-swiper-button-next">
        <img
          className=" rounded-full w-5 h-5"
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategorySwiper;
