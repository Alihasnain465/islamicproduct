"use client";

import { useCart } from "../../context/cartcontext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // EMPTY CART
  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 px-4">
        <h1 className="text-3xl font-bold text-emerald-800">
          Cart is Empty
        </h1>
        <p className="text-gray-600 mt-2">
          Add some products to your cart.
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 px-4">
      
      {/* CONTENT */}
      <div className="max-w-4xl mx-auto py-16 flex-grow">
        <h1 className="text-4xl font-bold mb-10 text-center text-emerald-800">
          Your Cart
        </h1>

        <div className="space-y-6">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white rounded-2xl shadow-md p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded-xl"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-emerald-700">
                  Rs {item.price * item.quantity}
                </p>
                <button
                  className="text-red-500 text-sm mt-2 hover:underline"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="text-right mt-10 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Total: Rs {total}
          </h2>
          <button
            className="mt-4 bg-emerald-600 text-white px-8 py-2 rounded-full hover:bg-emerald-700 transition"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}