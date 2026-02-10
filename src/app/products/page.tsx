"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/cartcontext";

const products = [
  { name: "Janamaz", price: 2500, image: "/janmaz.jpg" },
  { name: "Prayer Rug", price: 2000, image: "/rug prayer.jpg" },
  { name: "Quran Pak", price: 1500, image: "/quran.jpg" },
  { name: "Islamic Book", price: 500, image: "/islamic book.jpg" },
  { name: "Tasbeeh", price: 300, image: "/tasbeeh.jpg" },
  { name: "Cap", price: 400, image: "/cap.jpg" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="border p-3 rounded shadow hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-green-700 font-bold">Rs {product.price}</p>
            <button
              className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/cart" prefetch={false} className="text-blue-600 underline">
          Go to Cart
        </Link>
      </div>
    </div>
  );
}