import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';





export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Welcome to Fausty Flawless Touch</h2>
        <p className="text-center text-white-700 max-w-2xl mx-auto">
          We specialize in professional makeup services for weddings, special events, and everyday glam. 
          Let our expert touch enhance your natural beauty and leave you feeling confident and flawless.
        </p>
      </section>
      <Testimonials />
    </div>
  );
}
