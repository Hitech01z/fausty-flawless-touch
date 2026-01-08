import React from 'react';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
