import React from 'react';

// Sample property data
const properties = [
  {
    id: 1,
    image: 'images/prop1.jpeg',
    location: 'Sector 70, Mohali',
    size: '1800 sq.ft',
    price: '₹85,00,000',
  },
  {
    id: 2,
    image: '/images/prop2.jpg',
    location: 'Zirakpur, Punjab',
    size: '1500 sq.ft',
    price: '₹65,00,000',
  },
  {
    id: 3,
    image: '/images/prop3.jpg',
    location: 'Panchkula, Haryana',
    size: '2000 sq.ft',
    price: '₹1,10,00,000',
  },
  {
    id: 4,
    image: '/images/prop4.jpg',
    location: 'Sector 20, Chandigarh',
    size: '1200 sq.ft',
    price: '₹55,00,000',
  },
];

const Properties = () => {
  return (
    <div className="bg-[#f8f3e9] text-[#3f3b2e] px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Featured Properties</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.location}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold">{property.location}</h2>
                <p className="text-sm text-gray-600">Size: {property.size}</p>
                <p className="text-lg font-bold text-[#3f3b2e]">{property.price}</p>
                <button className="mt-3 bg-[#3f3b2e] text-white px-4 py-2 rounded hover:bg-opacity-90 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
