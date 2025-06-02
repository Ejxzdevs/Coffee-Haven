import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brown-900 mb-8">About Coffee Haven</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Coffee Haven was founded in 2020 with a simple mission: to bring the world's finest coffee to your cup. Our journey began with a passion for exceptional coffee and a commitment to sustainable sourcing practices.
            </p>
            
            <h2 className="text-2xl font-semibold text-brown-800 mt-12 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              What started as a small coffee cart in downtown has grown into a beloved destination for coffee enthusiasts. We travel the world to find the best coffee beans, working directly with farmers to ensure fair practices and the highest quality products.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 my-12">
              <h2 className="text-2xl font-semibold text-brown-800 mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brown-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Quality: We source only the finest coffee beans from around the world.</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brown-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Sustainability: We believe in environmentally responsible practices.</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brown-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Community: We foster connections through the love of coffee.</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-brown-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Innovation: We continuously explore new roasting techniques.</p>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-brown-800 mt-12 mb-6">Our Process</h2>
            <p className="text-gray-600 mb-6">
              Every batch of coffee is carefully roasted in small batches to ensure the perfect flavor profile. Our master roasters have years of experience and passion for bringing out the unique characteristics of each bean variety.
            </p>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-brown-800 mb-6">Visit Us</h2>
              <p className="text-gray-600">
                We'd love to share our passion for coffee with you. Visit our store to experience our carefully crafted beverages and learn more about our coffee-making process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 