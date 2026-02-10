export default function About() {
  return (
    <section className="py-28 px-4 bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200">
      <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center border border-pink-200">
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-rose-700">
          About Us
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are dedicated to providing high-quality Islamic products
          that bring peace, comfort, and spirituality into your daily life.
          Our mission is to support your worship with products crafted
          with care, respect, and authenticity.
        </p>
      </div>
    </section>
  );
}