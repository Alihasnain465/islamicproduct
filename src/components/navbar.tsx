"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out
     ${
       pathname === path
         ? "bg-yellow-400 text-black shadow-lg"
         : "text-white hover:bg-yellow-300 hover:text-black"
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          Islamic <span className="text-yellow-400">Store</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-2 md:gap-6 text-base md:text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Cart", path: "/cart" },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.path} className={linkClass(item.path)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}