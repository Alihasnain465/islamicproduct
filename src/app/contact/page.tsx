export default function Contact() {
  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-pink-200">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-rose-700 mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-10 text-lg">
          We’d love to hear from you. Please fill out the form below.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <input
            type="text"
            placeholder="Subject"
            className="md:col-span-2 p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="md:col-span-2 p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}