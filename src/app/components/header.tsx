"use client";

import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../app/components/cart-context"; // Import the useCart hook to manage cart state


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle the search dropdown

  // Get the cart item count from useCart
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <nav className="w-full h-[4.75rem] flex justify-between items-center px-4 md:px-8 lg:px-16 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="logo"
            className="object-contain"
            width={56}
            height={56}
          />
          <h1 className="text-white text-2xl font-bold pl-4 md:text-3xl lg:text-4xl">
            Furniro
          </h1>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Links (directly using Link without ul/li) */}
        <div
          className={`md:flex items-center space-x-8 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "flex flex-col space-y-4 absolute top-16 left-0 right-0 md:space-y-0 md:flex-row md:static"
              : "hidden md:flex"
          }`}
        >
          <Link href="/" className="text-red hover:text-blue-500">
            Home
          </Link>
          <Link href="/shop" className="text-red hover:text-blue-500">
            Press & Media
          </Link>
          <Link href="/about" className="text-red hover:text-blue-500">
            Blog
          </Link>
          <Link href="/contact" className="text-red hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <div className="relative">
            <FiSearch className="cursor-pointer text-red text-xl" onClick={toggleSearch} />
            <div
              className={`absolute right-0 bg-red shadow-md mt-2 w-40 ${
                isSearchOpen ? "block" : "hidden"
              }`}
            >
              <input type="text" placeholder="Search..." className="p-2" />
            </div>
          </div>

          <FiHeart className="cursor-pointer text-red text-xl" />

          <Link href="/cart" className="relative">
  <FiShoppingCart className="cursor-pointer text-red text-xl" />
  {getTotalItems() > 0 && (
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
      {getTotalItems()}
    </span>
  )}
</Link>

          </div>
        
      </nav>
    </header>
  );
}

export default Header;







{/*"use client"; good one 

import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle the search dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <nav className="w-full h-[4.75rem] bg-zinc-50 flex justify-between items-center px-4 md:px-8 lg:px-16 relative">
        {/* Logo *
        <div className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="logo"
            className="object-contain"
            width={56}
            height={56}
          />
          <h1 className="text-zinc-950 text-2xl font-bold pl-4 md:text-3xl lg:text-4xl">
            Furniro
          </h1>
        </div>

        {/* Hamburger Icon (for mobile) *
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Links (directly using Link without ul/li) *
        <div className={`md:flex items-center space-x-8 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex flex-col space-y-4 absolute top-16 left-0 right-0 bg-white md:space-y-0 md:flex-row md:static' : 'hidden md:flex'}`}>
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/about" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Icons *
        <div className="flex items-center space-x-4 md:space-x-7">
          <div className="relative">
            <FiSearch className="cursor-pointer text-xl" onClick={toggleSearch} />
            <div className={`absolute right-0 bg-white shadow-md mt-2 w-40 ${isSearchOpen ? 'block' : 'hidden'}`}>
              <input type="text" placeholder="Search..." className="p-2" />
            </div>
          </div>

          <FiHeart className="cursor-pointer text-xl" />
          <div className="relative">
            <FiShoppingCart className="cursor-pointer text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">3</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;*/}
