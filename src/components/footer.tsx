"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        
        <h2 className="text-xl font-semibold tracking-wide text-green-400">
          Islamic Store
        </h2>

        <p className="text-sm text-gray-300 mt-2">
          Quality Islamic Products • Trusted Store
        </p>

        <div className="w-20 h-1 bg-green-500 mx-auto my-4 rounded-full"></div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        <p className="text-sm mt-2">
          Developed by{" "}
          <span className="text-green-400 font-medium hover:text-green-300 cursor-pointer transition">
            Ali Hasnain
          </span>
        </p>
      </div>
    </footer>
  );
}