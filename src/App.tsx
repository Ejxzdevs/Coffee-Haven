import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <footer className="bg-brown-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Coffee Haven</h3>
              <p className="text-gray-300">
                Bringing you the finest coffee from around the world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                123 Coffee Street<br />
                City, State 12345<br />
                Phone: (123) 456-7890<br />
                Email: info@coffeehaven.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 7am - 8pm<br />
                Saturday: 8am - 8pm<br />
                Sunday: 8am - 6pm
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brown-800 text-center text-gray-300">
            <p>&copy; 2024 Coffee Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
