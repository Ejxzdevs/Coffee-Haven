import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    price: 19.99,
    description: 'Light roasted coffee with floral and citrus notes',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    price: 18.99,
    description: 'Medium roast with caramel and nutty undertones',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Italian Espresso Blend',
    price: 21.99,
    description: 'Dark roasted blend perfect for espresso',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-brown-900 text-center mb-8">
          Featured Coffee
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-brown-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-brown-600">
                    ${product.price}
                  </span>
                  <button 
                    onClick={() => addToCart(product)}
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
    </section>
  );
};

export default FeaturedProducts; 