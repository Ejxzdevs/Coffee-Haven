import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StorageService, Product } from '../services/storage';

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  getProductsByCategory: (category: string) => Promise<void>;
  refreshProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);
const storageService = StorageService.getInstance();

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedProducts = await storageService.getAllProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError('Failed to load products');
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const categoryProducts = await storageService.getProductsByCategory(category);
      setProducts(categoryProducts);
    } catch (err) {
      setError('Failed to load category products');
      console.error('Error loading category products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProducts = async () => {
    await loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        getProductsByCategory,
        refreshProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}; 