"use client";
import { useCart } from "../context/cartContext";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center px-4 md:px-10 py-3 relative">
        {/* Logo */}
        <div className="text-lg md:text-2xl font-bold text-blue-600">
          BlueBox <span className="text-gray-800">Perfumerie</span>
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden md:block flex-1 mx-6">
          <input
            className="w-full max-w-xs border border-gray-300 rounded-full pl-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
            type="text"
            placeholder="Search scents..."
          />
        </div>

        {/* Nav Links (Desktop only) */}
        <div className="hidden md:flex gap-8 items-center text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Product
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            FAQ
          </a>
        </div>

        {/* Cart */}
      
        <div className="relative ml-4">
          <a
            href="/cart"
            className="text-gray-700 hover:text-blue-600 transition relative"
          >
            <FiShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount ?? 0}
            </span>
          </a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-700 focus:outline-none ml-4"
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-8 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-3xl text-blue-600 focus:outline-none"
          >
            <FiX />
          </button>

          {/* Mobile Nav Links */}
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 transition"
          >
            Product
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 transition"
          >
            FAQ
          </a>

          {/* Search (Mobile view inside menu) */}
          <input
            className="w-3/4 border border-gray-300 rounded-full pl-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
            type="text"
            placeholder="Search scents..."
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
