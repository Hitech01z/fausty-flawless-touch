export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-12 sm:py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700 mb-10">
        Contact Us
      </h2>

      {/* Form */}
      <form className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3
              bg-white text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3
              bg-white text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Tell us the service you need and your event date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3
              bg-white text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-pink-600 text-white px-8 py-3
            rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center text-gray-1000 space-y-2 text-sm sm:text-base">
        <p>📍 169 Adetokunbo Ademola Cres, Wuse 2, Abuja</p>
        <p>📞 0902 340 8863</p>
        <p>⭐ 5.0 Rating (53 Reviews)</p>
      </div>
    </section>
  );
}
