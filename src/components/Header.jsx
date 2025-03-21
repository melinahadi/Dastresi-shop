const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-20">
        <div className="flex justify-between py-4">
          {/* Logo */}
          <div>
            <img className="h-10" src="src/assets/icon/logo.png" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="flex">
            <div className="search-box flex mx-4">
              <div className="relative w-[500px] ">
                <input
                  id="search"
                  type="text"
                  className="w-full bg-gray-100 rounded-xl py-2  pr-10"
                  placeholder="جستجو محصولات"
                />
                <img
                  className="w-5 h-5 absolute right-3 top-3 "
                  src="src/assets/icon/search.svg"
                  alt="Search"
                />
                <span className="absolute right-3 top-2 max-h-full max-w-full bg-gray-100">
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>

          {/* About us */}
          <nav className="about flex">
            <div className="flex ">
              <ul className="flex gap-4 text-gray-500 py-2 text-xs">
                <li className="hover:text-black">
                  <a href="#">باشگاه مشتریان</a>
                </li>
                <li className="hover:text-black">
                  <a href="#">بلاگ</a>
                </li>
                <li className="hover:text-black">
                  <a href="#">ارتباط با ما</a>
                </li>
                <li className="hover:text-black mr-0">
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-8">
            <button className="relative h-10 px-1">
              <img
                src="src/assets/icon/basket-red.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "src/assets/icon/basket-blue.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "src/assets/icon/basket-red.svg")
                }
                className="w-6 h-6 hover:delay-150 transition duration-300"
                alt="سبد خرید"
              />
            </button>
            <button className="bg-blue-700 hover:bg-blue-900 hover:delay-150 text-white h-10 px-4 py-2 rounded-xl text-sm">
              ورود و ثبت‌نام
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 border-t">
        <div className="container items-center mx-auto px-[125px]">
          <ul className="flex space-x-14  text-gray-700 text-sm">
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a className="" href="#">
                خانه
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                لوازم جانبی موبایل و کامپیوتر <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                کابل - مبدل - رابط <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                لوازم تولید محتوا <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                لوازم شبکه <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                کنسول بازی و لوازم جانبی <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                لوازم خانگی و شخصی <span className="">&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 ml-10  transform transition-transform bottom-[-8px]  border-b-2 py-3  border-transparent hover:border-red-400 ">
              <a href="#">
                برندها <span className="">&#9662;</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
