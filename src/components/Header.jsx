const Header = () => {
  return (
    <header className="bg-white fixed z-50 w-full shadow">
      {/* Desktop Header */}
      <div className="container hidden lg:flex px-16">
        <div className="flex justify-between items-center w-full py-4 gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10" src="src/assets/icon/logo.png" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="hidden xl:flex flex-grow justify-center">
            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                className="w-full bg-gray-100 rounded-xl py-2 pr-10 text-sm"
                placeholder="جستجو محصولات"
              />
              <img
                className="w-5 h-5 absolute right-3 top-3"
                src="src/assets/icon/search.svg"
                alt="Search"
              />
            </div>
          </div>

          {/* About us navigation */}
          <nav className="flex-shrink-0">
            <ul className="flex gap-5 text-gray-500 text-sm items-center">
              <li className="hover:text-black">
                <a href="#">باشگاه مشتریان</a>
              </li>
              <li className="hover:text-black">
                <a href="#">بلاگ</a>
              </li>
              <li className="hover:text-black">
                <a href="#">ارتباط با ما</a>
              </li>
              <li className="hover:text-black">
                <a href="#">درباره ما</a>
              </li>
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Cart */}
            <button className="relative h-10">
              <img
                src="src/assets/icon/basket-red.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "src/assets/icon/basket-blue.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "src/assets/icon/basket-red.svg")
                }
                className="w-6 h-6 transition duration-300"
                alt="سبد خرید"
              />
            </button>

            {/* Login/Register */}
            <button className="bg-blue-700 hover:bg-blue-900 text-white h-10 px-4 py-2 rounded-xl text-sm whitespace-nowrap">
              ورود و ثبت‌نام
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-100 hidden lg:block w-full border-t">
        <div className="container px-[120px]">
          <ul className="flex justify-between text-gray-700 text-xs">
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">خانه</a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                لوازم جانبی موبایل و کامپیوتر <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                کابل - مبدل - رابط <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                لوازم تولید محتوا <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                لوازم شبکه <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                کنسول بازی و لوازم جانبی <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                لوازم خانگی و شخصی <span>&#9662;</span>
              </a>
            </li>
            <li className="hover:text-red-500 py-3 border-b-2 border-transparent hover:border-red-400">
              <a href="#">
                برندها <span>&#9662;</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-100 flex justify-between items-center px-3 py-4 shadow fixed w-full z-50">
        <div className="flex items-center">
          <img
            className="w-6 h-6 cursor-pointer ml-3"
            src="src/assets/icon/hamburger-menu-icon-svg-17.jpg"
            alt=""
          />
          <img className="h-8 cursor-pointer" src="src/assets/icon/logo.png" alt="Logo" />
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-6 h-6 cursor-pointer"
            src="src/assets/icon/search-icon-png-5.png"
            alt="جستجو"
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="src/assets/icon/grocery-basket-icon-1.png"
            alt="سبد خرید"
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="src/assets/icon/account.png"
            alt="سبد خرید"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;