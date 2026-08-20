import { useState } from "react";
import {
  FiSearch,
  FiMail,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Featured",
    "Bags & Luggage",
    "Travel",
    "Wallets",
    "Tech",
    "Accessories",
    "About Us",
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* ================= DESKTOP NAVBAR ================= */}
        <span className="text-[10px] font-medium flex justify-end">
              Worldwide shipping IN
            </span>
      <div className="hidden lg:block">
        <div className="flex flex-row flex-nowrap items-center justify-between px-8 py-7 gap-6">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <span className="text-[34px] font-bold tracking-[-2px] text-[#292929]">
              bellroy
            </span>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 flex justify-center min-w-0" >
            <ul className="flex flex-row flex-nowrap items-center gap-10 whitespace-nowrap">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] font-medium text-[#333333] transition-colors hover:text-gray-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - single row, everything aligned together */}
          <div className="flex flex-row flex-nowrap items-center gap-6 shrink-0">
            
            <a
              href="#"
              className="text-[13px] text-gray-500 hover:text-black whitespace-nowrap"
            >
              Need help?
            </a>

            <a
              href="#"
              className="text-[13px] text-gray-500 hover:text-black whitespace-nowrap"
            >
              Stores & Stockists
            </a>

            <FiMail size={22} strokeWidth={1.5} className="text-gray-500" />

            <FiShoppingCart
              size={23}
              strokeWidth={1.5}
              className="text-gray-500"
            />
          </div>
        </div>

        {/* Search */}
        <div className="px-8 pb-4">
          <div className="mx-auto flex h-10 max-w-200 items-center border border-[#666666] opacity-80 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-full flex-1 px-3 text-[13px] text-gray-700 outline-none placeholder:text-gray-500"
            />

            <FiSearch
              size={21}
              strokeWidth={1.5}
              className="mr-2 text-gray-500"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="lg:hidden">
        <div className="flex h-18 items-center justify-between px-5">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#222]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={25} strokeWidth={1.5} />
            ) : (
              <FiMenu size={25} strokeWidth={1.5} />
            )}
          </button>

          {/* Logo */}
          <div>
            <span className="text-[29px] font-bold tracking-[-2px] text-[#292929]">
              bellroy
            </span>
          </div>

          {/* Cart */}
          <button type="button" aria-label="Shopping cart">
            <FiShoppingCart
              size={24}
              strokeWidth={1.5}
              className="text-gray-600"
            />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-5 pb-4">
           <div className="flex h-10 items-center rounded-sm">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-full flex-1 px-3 text-[13px] outline-none placeholder:text-gray-500"
            />

            <FiSearch
              size={20}
              strokeWidth={1.5}
              className="mr-2 text-gray-500"
            />
          </div> 
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white px-5 py-5">
            <nav>
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link} className="border-b border-gray-100">
                    <a
                      href="#"
                      className="flex items-center justify-between py-4 text-[15px] font-medium"
                    >
                      {link}
                      <FiChevronDown size={17} className="text-gray-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5 flex flex-col gap-4 text-[14px] text-[#7f7f7f]">
              <a href="#">Need help?</a>
              <a href="#">Stores & Stockists</a>
              <a href="#">Worldwide shipping IN</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;