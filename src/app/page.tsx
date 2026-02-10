export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-green-400 to-yellow-100 text-gray-900 text-center px-4">
      <div className="max-w-3xl bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-emerald-800">
          Islamic Products Store
        </h1>
        <p className="text-xl text-gray-700">
          Premium Janamaz, Tasbeeh, Islamic Caps and other
          products to enhance your daily worship.
        </p>
      </div>
    </section>
  );
}