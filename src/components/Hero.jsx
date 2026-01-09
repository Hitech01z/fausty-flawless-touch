import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-3xl animate-fade">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Fausty Flawless Touch
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-200">
          Luxury Makeup & Beauty Artistry in Abuja
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
          >
            Book Appointment
          </a>

          <a
            href="https://wa.me/2349023408863"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-pink-700 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
