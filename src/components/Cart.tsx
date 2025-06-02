import React, { useState } from 'react';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { StorageService, Order } from '../services/storage';
import toast, { Toaster } from 'react-hot-toast';
import ReceiptModal from './ReceiptModal';

const DEMO_USER_ID = 'demo-user-123';
const storageService = StorageService.getInstance();

const Cart = ({ onClose }: { onClose: () => void }) => {
  const { items, removeFromCart, updateQuantity, totalPrice, isLoading, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      
      // Create the order
      const order = await storageService.createOrder(
        DEMO_USER_ID,
        items,
        totalPrice
      );

      // Clear the cart
      await clearCart();
      
      // Show the receipt modal
      setCurrentOrder(order);
      
      // Show success message
      toast.success('Order placed successfully!', {
        duration: 5000,
        position: 'top-center',
      });

    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to place order. Please try again.', {
        duration: 5000,
        position: 'top-center',
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleCloseReceipt = () => {
    setCurrentOrder(null);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center bg-[#1B2537] text-white">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#2d3a4f] rounded-full transition-colors"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00E6C3]"></div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-white rounded-lg p-4 border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-brown-900">{item.name}</h3>
                      <p className="text-[#00E6C3] font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-[#00E6C3] px-2 py-1 border rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-[#00E6C3] px-2 py-1 border rounded-r"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!isLoading && items.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-lg">Total:</span>
                <span className="font-bold text-xl text-[#00E6C3]">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  isCheckingOut
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#00E6C3] hover:bg-[#00c4a5] text-white'
                }`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {currentOrder && (
        <ReceiptModal order={currentOrder} onClose={handleCloseReceipt} />
      )}
      <Toaster />
    </>
  );
};

export default Cart; 