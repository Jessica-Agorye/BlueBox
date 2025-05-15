"use client";
import { useCart } from "../context/cartContext";

const Navbar = () => {
  const { cartCount } = useCart();
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
    </section>
  );
};

export default Navbar;
