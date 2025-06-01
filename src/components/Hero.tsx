import { useState } from 'react';

const Hero = () => {
  return (
    <div className="relative bg-brown-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee beans background"
        />
        <div className="absolute inset-0 bg-brown-900 mix-blend-multiply" />
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience the Perfect Cup
            </h1>
            <p className="mt-6 text-xl text-gray-300">
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