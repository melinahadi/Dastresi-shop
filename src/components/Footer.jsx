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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {data ? (
            <>
              {/* ستون ۱: عنوان و توضیحات فروشگاه */}
              <div className="min-w-0">
                <h3 className="text-lg font-bold mb-4">{data.storeTitle}</h3>
                <p className="text-gray-600 leading-8">
                  {data.storeDescription}
                </p>
              </div>

              {/* ستون ۲: دسترسی سریع */}
              <div className="min-w-0">
                <FooterLinks
                  title="دسترسی سریع"
                  links={data.quickLinks || []}
                />
              </div>

              {/* ستون ۳: اطلاعات تماس */}
              <div className="min-w-0">
                <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
                {data.contactInfo ? (
                  <>
                    <a
                      href="https://www.google.com/maps?...your-address..."
                      className="text-gray-600 break-words"
                      target="_blank"
                    >
                      {data.contactInfo.address}
                    </a>

                    <p className="text-gray-600 my-4 break-words">
                      تلفن: {data.contactInfo.phone}
                    </p>

                    <a
                      href="mailto:info@dastresi.com"
                      className="text-gray-600 break-words"
                      target="_blank"
                    >
                      ایمیل: {data.contactInfo.email}
                    </a>

                    <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
                      <img
                        src={data.contactInfo.image}
                        alt="logo"
                        className="h-20 m-2 flex-shrink-0"
                      />

                      <button
                        onClick={scrollToTop}
                        className="px-4 h-12 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition-all flex-shrink-0 whitespace-nowrap"
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
