export default function Testimonials() {
  const reviews = [
    {
      name: "Amina S.",
      text: "Absolutely flawless makeup! I felt confident and beautiful all day.",
    },
    {
      name: "Blessing O.",
      text: "Professional, punctual, and very skilled. Highly recommended!",
    },
    {
      name: "Zainab M.",
      text: "Best makeup artist in Abuja. My bridal look was perfect.",
    },
  ];

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
          Client Reviews ⭐ 5.0 (53 Reviews)
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-700 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-pink-700">
                — {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
