import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../features/bannersSlice";

// ✅ مسیر صحیح برای import کردن Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../index.css"; // ✅ استایل اصلاح‌شده

const BannerSlider = () => {
  const dispatch = useDispatch();
  const { banners, status, error } = useSelector((state) => state.banners);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBanners());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  if (status === "failed") return <p>خطا: {error}</p>;

  return (
    <div className="relative my-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true ,
          el:".banner-pagination"
        }}
        slidesPerView={1} // ✅ فقط یک اسلاید نمایش داده شود
        className="max-w-screen-lg mx-auto py-8 relative"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <img
              src={banner.image}
              alt={banner.alt}
              className="rounded-lg w-full hover:cursor-pointer "
            />
          </SwiperSlide>
        ))}
        {/* ✅ Pagination داخل `Swiper` قرار گرفت */}
        <div className="swiper-pagination banner-pagination"></div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
