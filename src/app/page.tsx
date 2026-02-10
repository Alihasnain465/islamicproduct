"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-900">
          Welcome to Islamic Store
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
          Find the best Islamic products including Janamaz, Prayer Rugs, Quran, and more.
        </p>
        <Link
          href="/products"
          prefetch={false}
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Explore Products
        </Link>
      </main>
    </div>
  );
}