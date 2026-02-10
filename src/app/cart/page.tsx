"use client";
import Image from "next/image";
import { useCart } from "../../context/cartcontext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Page Content */}
      <main className="flex-grow max-w-7xl mx-auto p-6 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-green-900">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Cart is empty.{" "}
            <Link href="/" className="text-green-700 underline font-semibold">
              Go shopping
            </Link>
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center border p-4 rounded-2xl bg-white shadow-lg hover:scale-105 transform transition duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-xl"
                />
                <div className="ml-6 flex-1">
                  <h2 className="font-semibold text-gray-800 text-lg md:text-xl">
                    {item.name}
                  </h2>
                  <p className="text-green-700 font-bold text-md md:text-lg">
                    Rs {item.price}
                  </p>
                </div>
                <button
                  className="bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
                  onClick={() => removeFromCart(idx)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 text-right font-bold text-xl text-gray-900">
              Total: Rs {total}
            </div>

            <div className="mt-4 flex flex-col md:flex-row justify-between gap-3 md:gap-0">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300">
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      
    </div>
  );
}