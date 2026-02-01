import React from 'react';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    name: 'Home Cleaning',
    description: 'Standard cleaning for your home including dusting, vacuuming, and mopping.',
    price: 80,
    image: 'https://images.unsplash.com/photo-1581578731117-104f2a863db6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Plumbing Repair',
    description: 'Fixing leaks, unclogging drains, and general plumbing maintenance.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Electrical Work',
    description: 'Installation of fixtures, outlets, and troubleshooting electrical issues.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Gardening',
    description: 'Lawn mowing, trimming, and general garden upkeep.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Moving Help',
    description: 'Assistance with packing, loading, and moving heavy furniture.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1603796846097-b9990916e342?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Painting',
    description: 'Interior and exterior painting services for a fresh look.',
    price: 200,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    navigate('/checkout', { state: { service } });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose from our wide range of professional services.
          </p>
        </div>
        <div className="mt-12 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-500">
                    {/* Fallback if image fails to load or we just want a placeholder */}
                    <img className="h-48 w-full object-cover" src={service.image} alt={service.name} />
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{service.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">${service.price}</div>
                  <button
                    onClick={() => handleBookNow(service)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
