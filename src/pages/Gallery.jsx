import g1 from '../assets/gallery1.png';
import g2 from '../assets/gallery2.png';
import g3 from '../assets/gallery3.png';
import g4 from '../assets/gallery4.png';
import g5 from '../assets/gallery5.png';
import g6 from '../assets/gallery6.png';
import g7 from '../assets/gallery7.png';
import g8 from '../assets/gallery8.png';

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-pink-700 mb-12 text-center">
        Makeup Gallery
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={img}
              alt="Makeup work"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
