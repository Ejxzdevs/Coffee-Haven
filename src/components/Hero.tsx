import { useState } from 'react';

const Hero = () => {
  return (
    <div className="relative bg-brown-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80"
          alt="Coffee beans background"
        />
        <div className="absolute inset-0 bg-brown-900 mix-blend-multiply opacity-60" />
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Experience the Perfect Cup
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover our carefully selected coffee beans from around the world, expertly roasted to bring out their unique flavors and aromas.
            </p>
            <div className="mt-10">
              <a
                href="/menu"
                className="inline-block bg-brown-600 px-8 py-3 text-lg font-medium text-white hover:bg-brown-700 transition-colors rounded-lg"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 