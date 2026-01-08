import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We received your message.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg" rows="5" required></textarea>
        <button type="submit" className="bg-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-900 transition">Send Message</button>
      </form>
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps?q=169%20Adetokunbo%20Ademola%20Cres,%20Wuse%202,%20Abuja&output=embed"
    width="100%"
    height="350"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
}
