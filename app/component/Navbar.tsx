"use client";
import { useCart } from "../context/cartContext";
import { useState } from "react";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="flex justify-evenly mt-10 mb-10">
      <div>
        <p className=" text-sm md:text-3xl font-semibold">BlueBox Perfumerie</p>
      </div>

      <div>
        <input
          className="border rounded-3xl pl-2 mt-1 "
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <div className="">
          <button onClick={toggleMenu} className="md:hidden">
            {" "}
            {isMenuOpen ? "x" : "-"}
          </button>
          <ul className="hidden md:gap-4 md:flex">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Faq</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <a className="cart" href="/cart">
          Cart:{cartCount}
        </a>
      </div>

      {/* Collpasable nav */}
      {isMenuOpen && (
        <div>
          <ul className="  md:hidden md:gap-4">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Faq</a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
