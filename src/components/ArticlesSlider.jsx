import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../features/articlesSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // 🟢 اضافه کردن Autoplay
import "../index.css";

const ArticlesSlider = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  if (status === "failed") return <p>خطا: {error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12 relative">
      {/* عنوان بخش */}
      <div className="flex w-full justify-between py-3 pb-2 px-4">
        <h3 className="text-xl font-bold text-gray-500 mb-6">آخرین مقالات</h3>
        <div>
          <a href="#" className="flex text-base items-center gap-2">
            <span className="text-sm hidden md:block"> ورود به بلاگ</span>
            <img
              className="rounded-full w-6 h-6"
              src="src/assets/icon/r3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      {status === "succeeded" && (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop={true}
          autoplay={{
            delay: 3000, // 🟢 حرکت خودکار هر ۲ ثانیه
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]} // 🟢 اضافه کردن Autoplay
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 8 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="bg-white rounded-lg shadow-md hover:cursor-pointer overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-sm text-center text-gray-700">
                    {article.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Pagination سفارشی */}
      <div className="custom-pagination mt-8"></div>
    </div>
  );
};

export default ArticlesSlider;
