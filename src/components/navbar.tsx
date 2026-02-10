"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out
     ${
       pathname === path
         ? "bg-yellow-400 text-black shadow-lg"
         : "text-white hover:bg-yellow-300 hover:text-black"
     }`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          Islamic <span className="text-yellow-400">Store</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-base md:text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className={linkClass(item.path)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-2 p-4 bg-black/80 md:hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={linkClass(item.path)}
                onClick={() => setIsOpen(false)} // Close on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}