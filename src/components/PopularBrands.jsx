import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularBrands } from "../features/popularBrandsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const PopularBrands = () => {
  const dispatch = useDispatch();
  const { brands, status, error } = useSelector((state) => state.popularBrands);

  useEffect(() => {
    dispatch(fetchPopularBrands());
  }, [dispatch]);

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  if (status === "failed") return <p>خطا: {error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12 relative">
      {/* عنوان دسته بندی */}
      <h3 className="text-xl font-bold text-gray-500 mb-10">
        محبوب ترین برندها
      </h3>

      {status === "succeeded" && (
        <Swiper
          slidesPerView={5}
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
            320: { slidesPerView: 4, spaceBetween: 5 },
            640: { slidesPerView: 5, spaceBetween: 8 },
            1024: { slidesPerView: 6, spaceBetween: 9 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="h-full flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="w-40 h-20 object-contain  rounded-xl shadow-sm transition-transform transform hover:cursor-pointer hover:-translate-y-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* دکمه‌های نویگیشن سفارشی */}
      <div className="custom-swiper-button-next">
        <img
          className="rounded-full w-5 h-5"
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>
      <div className="custom-swiper-button-prev">
        <img
          className="rotate-180 rounded-full w-5 h-5"
          src="src/assets/icon/chevron-r.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PopularBrands;
