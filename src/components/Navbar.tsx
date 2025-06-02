import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-brown-800">Coffee Haven</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-brown-600 hover:text-brown-900">Home</Link>
              <Link to="/menu" className="text-brown-600 hover:text-brown-900">Menu</Link>
              <Link to="/about" className="text-brown-600 hover:text-brown-900">About</Link>
              <Link to="/contact" className="text-brown-600 hover:text-brown-900">Contact</Link>
            </div>

            {/* Cart Icon */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center text-brown-600 hover:text-brown-900 relative"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#00E6C3] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="ml-2">Cart</span>
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
                <Link to="/" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Home</Link>
                <Link to="/menu" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Menu</Link>
                <Link to="/about" className="block px-3 py-2 text-brown-600 hover:text-brown-900">About</Link>
                <Link to="/contact" className="block px-3 py-2 text-brown-600 hover:text-brown-900">Contact</Link>
                <button 
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 text-brown-600 hover:text-brown-900"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="ml-2">Cart ({totalItems})</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar; 