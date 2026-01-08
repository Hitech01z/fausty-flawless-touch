import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Fausty Flawless Touch
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Luxury Makeup & Beauty Artistry in Abuja
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Book Appointment
          </a>

          <a
            href="https://wa.me/2349023408863"
            target="_blank"
            className="bg-white text-pink-700 px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
