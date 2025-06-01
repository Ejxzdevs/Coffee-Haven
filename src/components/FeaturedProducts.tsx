import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    price: 19.99,
    description: 'Light roasted coffee with floral and citrus notes',
    image: 'https://images.unsplash.com/photo-1587734361993-0275013aec90',
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    price: 18.99,
    description: 'Medium roast with caramel and nutty undertones',
    image: 'https://images.unsplash.com/photo-1587734361993-0275013aec90',
  },
  {
    id: 3,
    name: 'Italian Espresso Blend',
    price: 21.99,
    description: 'Dark roasted blend perfect for espresso',
    image: 'https://images.unsplash.com/photo-1587734361993-0275013aec90',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-900 text-center mb-12">
          Featured Coffee
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-brown-600">
                    ${product.price}
                  </span>
                  <button className="flex items-center px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors">
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 