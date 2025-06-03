import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StorageService, CartItem } from '../services/storage';
import toast from 'react-hot-toast';

// For demo purposes, we'll use a fixed userId
const DEMO_USER_ID = 'demo-user-123';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
  isLoading: boolean;
  downloadReceipt: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const storageService = StorageService.getInstance();

const generateReceipt = (items: CartItem[], totalPrice: number): string => {
  const date = new Date().toLocaleString();
  let receipt = `COFFEE HAVEN - RECEIPT\n`;
  receipt += `Date: ${date}\n`;
  receipt += `Order ID: ${Math.random().toString(36).substr(2, 9)}\n`;
  receipt += `----------------------------------------\n\n`;
  
  items.forEach(item => {
    receipt += `${item.name}\n`;
    receipt += `${item.quantity} x $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}\n\n`;
  });
  
  receipt += `----------------------------------------\n`;
  receipt += `Total: $${totalPrice.toFixed(2)}\n`;
  receipt += `\nThank you for shopping at Coffee Haven!`;
  
  return receipt;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize cart data
  useEffect(() => {
    const initCart = async () => {
      try {
        const savedCart = await storageService.getCart(DEMO_USER_ID);
        setItems(savedCart);
      } catch (error) {
        console.error('Error initializing cart:', error);
        toast.error('Failed to load cart');
      } finally {
        setIsLoading(false);
      }
    };

    initCart();
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (!isLoading) {
      storageService.saveCart(DEMO_USER_ID, items);
    }
  }, [items, isLoading]);

  const addToCart = async (item: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        toast.success(`Added another ${item.name} to cart`);
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success(`${item.name} added to cart`);
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = async (itemId: number) => {
    const itemToRemove = items.find(item => item.id === itemId);
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    if (itemToRemove) {
      toast.success(`${itemToRemove.name} removed from cart`);
    }
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    if (quantity < 1) {
      await removeFromCart(itemId);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
    toast.success('Cart updated');
  };

  const clearCart = async () => {
    setItems([]);
    await storageService.clearCart(DEMO_USER_ID);
    toast.success('Cart cleared');
  };

  const downloadReceipt = () => {
    if (items.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    const receipt = generateReceipt(items, totalPrice);
    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `coffee-haven-receipt-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    toast.success('Receipt downloaded');
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isLoading,
        downloadReceipt,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 