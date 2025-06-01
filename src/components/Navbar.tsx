import React, { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-brown-800">Coffee Haven</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-brown-600 hover:text-brown-900">Home</a>
            <a href="/menu" className="text-brown-600 hover:text-brown-900">Menu</a>
            <a href="/about" className="text-brown-600 hover:text-brown-900">About</a>
            <a href="/contact" className="text-brown-600 hover:text-brown-900">Contact</a>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center text-brown-600 hover:text-brown-900">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-2">Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brown-600 hover:text-brown-900"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Home</a>
              <a href="/menu" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Menu</a>
              <a href="/about" className="block px-3 py-2 text-brown-600 hover:text-brown-900">About</a>
              <a href="/contact" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Contact</a>
              <button className="flex items-center px-3 py-2 text-brown-600 hover:text-brown-900">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="ml-2">Cart (0)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 