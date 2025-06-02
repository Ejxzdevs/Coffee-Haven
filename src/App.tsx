import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <footer className="bg-[#1B2537] text-white py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>1 (888) 602-6756</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>info@coffeehaven.com</span>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-[#00E6C3] font-semibold mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      <li><a href="/menu" className="hover:text-[#00E6C3] transition-colors">Our Menu</a></li>
                      <li><a href="/catering" className="hover:text-[#00E6C3] transition-colors">Catering</a></li>
                      <li><a href="/wholesale" className="hover:text-[#00E6C3] transition-colors">Wholesale</a></li>
                      <li><a href="/coffee-subscription" className="hover:text-[#00E6C3] transition-colors">Coffee Subscription</a></li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h3 className="text-[#00E6C3] font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li><a href="/about" className="hover:text-[#00E6C3] transition-colors">About Us</a></li>
                      <li><a href="/careers" className="hover:text-[#00E6C3] transition-colors">Careers</a></li>
                      <li><a href="/contact" className="hover:text-[#00E6C3] transition-colors">Contact</a></li>
                      <li><a href="/legal" className="hover:text-[#00E6C3] transition-colors">Legal</a></li>
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h3 className="text-[#00E6C3] font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li><a href="/blog" className="hover:text-[#00E6C3] transition-colors">Blog</a></li>
                      <li><a href="/brewing-guides" className="hover:text-[#00E6C3] transition-colors">Brewing Guides</a></li>
                      <li><a href="/coffee-knowledge" className="hover:text-[#00E6C3] transition-colors">Coffee Knowledge</a></li>
                      <li><a href="/reviews" className="hover:text-[#00E6C3] transition-colors">Customer Reviews</a></li>
                    </ul>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex justify-end space-x-4">
                  <a href="https://facebook.com" className="text-white hover:text-[#00E6C3] transition-colors">
                    {React.createElement(FaFacebook as React.ComponentType<IconBaseProps>, { size: 24 })}
                  </a>
                  <a href="https://linkedin.com" className="text-white hover:text-[#00E6C3] transition-colors">
                    {React.createElement(FaLinkedin as React.ComponentType<IconBaseProps>, { size: 24 })}
                  </a>
                  <a href="https://twitter.com" className="text-white hover:text-[#00E6C3] transition-colors">
                    {React.createElement(FaTwitter as React.ComponentType<IconBaseProps>, { size: 24 })}
                  </a>
                  <a href="https://instagram.com" className="text-white hover:text-[#00E6C3] transition-colors">
                    {React.createElement(FaInstagram as React.ComponentType<IconBaseProps>, { size: 24 })}
                  </a>
                  <a href="https://youtube.com" className="text-white hover:text-[#00E6C3] transition-colors">
                    {React.createElement(FaYoutube as React.ComponentType<IconBaseProps>, { size: 24 })}
                  </a>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center text-sm text-gray-400">
                  <p>&copy; 2024 Coffee Haven. All rights reserved.</p>
                  <div className="flex items-center">
                    <span className="mr-2">Powered by</span>
                    <a href="/" className="text-white hover:text-[#00E6C3] transition-colors">Coffee Haven</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#1B2537',
              color: '#fff',
            },
            success: {
              style: {
                background: '#00E6C3',
              },
            },
            error: {
              style: {
                background: '#ff4b4b',
              },
            },
          }}
        />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
