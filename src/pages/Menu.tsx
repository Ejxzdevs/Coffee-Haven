import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    category: 'Light Roast',
    price: 19.99,
    description: 'Light roasted coffee with floral and citrus notes',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    category: 'Medium Roast',
    price: 18.99,
    description: 'Medium roast with caramel and nutty undertones',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Italian Espresso Blend',
    category: 'Dark Roast',
    price: 21.99,
    description: 'Dark roasted blend perfect for espresso',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    category: 'Medium Roast',
    price: 20.99,
    description: 'Complex flavor with hints of chocolate and spice',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Costa Rica Tarrazu',
    category: 'Light Roast',
    price: 19.99,
    description: 'Bright and clean with hints of citrus and honey',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'French Roast',
    category: 'Dark Roast',
    price: 17.99,
    description: 'Bold and smoky with a deep flavor profile',
    image: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-brown-900">{item.name}</h3>
                  <span className="inline-block bg-brown-100 text-brown-800 px-2 py-1 rounded text-xs">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-brown-600">
                    ${item.price}
                  </span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="flex items-center px-3 py-1.5 bg-[#00E6C3] text-white rounded-lg hover:bg-[#00c4a5] transition-colors text-sm"
                  >
                    <ShoppingCartIcon className="h-4 w-4 mr-1" />
                    Add to Cart
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

export default Menu; 