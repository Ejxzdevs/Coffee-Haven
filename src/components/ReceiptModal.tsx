import React from 'react';
import { Order } from '../services/storage';
import { StorageService } from '../services/storage';

interface ReceiptModalProps {
  order: Order | null;
  onClose: () => void;
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const storageService = StorageService.getInstance();

  const handleDownload = () => {
    storageService.downloadReceipt(order);
  };

  // Format date and time
  const date = order.orderDate.toLocaleDateString();
  const time = order.orderDate.toLocaleTimeString();

  // Calculate the longest item name for padding
  const maxNameLength = Math.max(...order.items.map(item => item.name.length));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#1B2537]">Receipt Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Receipt Paper Style */}
        <div className="bg-white border rounded-lg p-4 font-mono text-sm overflow-y-auto flex-1">
          <div className="text-center mb-4">
            <div className="text-lg font-bold">COFFEE HAVEN</div>
            <div className="text-xs">123 Coffee Street</div>
            <div className="text-xs">Coffeetown, CT 12345</div>
            <div className="text-xs">Tel: (555) 123-4567</div>
          </div>

          <div className="border-t border-b border-dashed py-2 mb-4">
            <div>Order: #{order.orderId}</div>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
          </div>

          <div className="mb-4">
            {order.items.map((item, index) => {
              const itemTotal = (item.price * item.quantity).toFixed(2);
              const paddedName = item.name.padEnd(maxNameLength, ' ');
              
              return (
                <div key={index} className="whitespace-pre">
                  {paddedName} x{item.quantity}
                  <span className="float-right">${itemTotal}</span>
                  <div className="text-xs text-gray-500 ml-4">
                    @ ${item.price.toFixed(2)} each
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-dashed pt-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (0%):</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>TOTAL:</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center mt-6 border-t border-dashed pt-4">
            <div>Thank you for choosing Coffee Haven!</div>
            <div className="text-xs mt-2">www.coffeehaven.com</div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleDownload}
            className="bg-[#1B2537] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Receipt
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal; 