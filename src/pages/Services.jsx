import React from 'react';
import ServiceCard from '../components/ServiceCard';
import bridal from '../assets/bridal.png';
import event from '../assets/event.png';
import everyday from '../assets/bridal.png';

export default function Services() {
  const services = [
    {
      title: 'Bridal Makeup',
      description:
        'Elegant, long-lasting bridal makeup tailored to your wedding look and skin tone.',
      image: bridal,
    },
    {
      title: 'Event Glam',
      description:
        'Bold and flawless makeup for events, parties, and red carpet moments.',
      image: event,
    },
    { title: 'Everyday Glam', description: 'Subtle and flawless daily makeup.', image: everyday
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-pink-700 mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
