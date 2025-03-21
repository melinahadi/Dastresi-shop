import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../features/footerSlice";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.footer);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFooterData());
    }
  }, [status, dispatch]);

  // ✅ تابع برای بازگشت به بالا
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ✅ اسکرول نرم و انیمیشنی
    });
  };

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  if (status === "failed") return <p>خطا: {error}</p>;

  return (
    <footer className="bg-gray-200 pt-10 pb-2 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data ? (
            <>
              <div>
                <h3 className="text-lg font-bold mb-4">{data.storeTitle}</h3>
                <p className="text-gray-600 leading-8">
                  {data.storeDescription}
                </p>
              </div>

              <FooterLinks title="دسترسی سریع" links={data.quickLinks || []} />

              <div>
                <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
                {data.contactInfo ? (
                  <>
                    <a
                      href="https://www.google.com/maps?rlz=1C1GCEA_enIR1115IR1115&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCggGEAAYChgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg1MzE0ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=se&sa=X&geocode=KZehVe6NAY4_MVhjQIVj76w9&daddr=Tehran+Province,+Tehran,+District+12%D8%8C+%D9%BE%D8%B4%D8%AA+%D8%B4%D9%87%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C%D8%8C+MCPC%2BPM5,+Iran"
                      className="text-gray-600 "
                      target="_blank"
                    >
                      {data.contactInfo.address}
                    </a>
                    <p className="text-gray-600 my-4">
                      تلفن: {data.contactInfo.phone}
                    </p>
                    <a
                      href="mailto:info@dastresi.com"
                      className="text-gray-600"
                      target="_blank"
                    >
                      ایمیل: {data.contactInfo.email}
                    </a>
                    <div className="flex justify-between">
                      <img
                        src={data.contactInfo.image}
                        alt="logo"
                        className="h-20 m-5"
                      />

                      {/* ✅ دکمه بازگشت به بالا */}
                      <button
                        onClick={scrollToTop} // اتصال تابع اسکرول
                        className="px-4 my-auto h-12 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition-all"
                      >
                        بازگشت به بالا ⬆️
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500">در حال دریافت اطلاعات تماس...</p>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-500">در حال دریافت اطلاعات...</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
