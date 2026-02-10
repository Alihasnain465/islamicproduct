"use client";

import Image from "next/image";
import { useCart } from "../../context/cartcontext";

const products = [
  { name: "Janamaz", price: 2500, image: "/janmaz.jpg" },
  { name: "Islamic Cap", price: 800, image: "/cap.jpg" },
  { name: "Tasbeeh", price: 600, image: "/tasbeeh.jpg" },
  { name: "Quran Pak", price: 3000, image: "/quran.jpg" },
  { name: "Prayer Rug", price: 4500, image: "/rug prayer.jpg" },
  { name: "Islamic Book", price: 1200, image: "/islamic book.jpg" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-green-200">
      <h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">
        Our Products
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-2xl transition"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />

            <h2 className="text-2xl font-bold mt-4">{p.name}</h2>
            <p className="text-green-600 font-semibold text-lg mt-2">
              Rs {p.price}
            </p>

            <button
              className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
              onClick={() => addToCart({ ...p, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}