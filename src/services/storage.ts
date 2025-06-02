export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface Order {
  orderId: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  orderDate: Date;
}

export class StorageService {
  private static instance: StorageService;
  private orders: Order[] = [];
  private products: Product[] = [];

  private constructor() {
    // Load orders from localStorage if any exist
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders).map((order: any) => ({
        ...order,
        orderDate: new Date(order.orderDate)
      }));
    }

    // Load products from localStorage if any exist
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    } else {
      // Initialize with default products if none exist
      this.products = [
        {
          id: 1,
          name: "Espresso",
          category: "hot-drinks",
          price: 3.99,
          description: "Rich and bold espresso shot",
          image: "/images/espresso.jpg"
        },
        {
          id: 2,
          name: "Cappuccino",
          category: "hot-drinks",
          price: 4.99,
          description: "Espresso with steamed milk and foam",
          image: "/images/cappuccino.jpg"
        },
        {
          id: 3,
          name: "Iced Coffee",
          category: "cold-drinks",
          price: 4.49,
          description: "Chilled coffee served over ice",
          image: "/images/iced-coffee.jpg"
        }
      ];
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  // Cart Methods
  async saveCart(userId: string, items: CartItem[]) {
    try {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(items));
      return true;
    } catch (error) {
      console.error("Error saving cart:", error);
      return false;
    }
  }

  async getCart(userId: string): Promise<CartItem[]> {
    try {
      const cart = localStorage.getItem(`cart_${userId}`);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Error getting cart:", error);
      return [];
    }
  }

  async clearCart(userId: string) {
    try {
      localStorage.removeItem(`cart_${userId}`);
      return true;
    } catch (error) {
      console.error("Error clearing cart:", error);
      return false;
    }
  }

  // Order Methods
  async createOrder(userId: string, items: CartItem[], totalAmount: number): Promise<Order> {
    const order: Order = {
      orderId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      userId,
      items,
      totalAmount,
      status: 'completed',
      orderDate: new Date()
    };

    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
    return order;
  }

  async getOrders(userId: string): Promise<Order[]> {
    return this.orders.filter(order => order.userId === userId);
  }

  async getOrderById(orderId: string): Promise<Order | null> {
    return this.orders.find(order => order.orderId === orderId) || null;
  }

  // Generate receipt HTML
  generateReceiptHTML(order: Order): string {
    const date = order.orderDate.toLocaleDateString();
    const time = order.orderDate.toLocaleTimeString();
    
    const itemsHtml = order.items.map(item => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.price.toFixed(2)}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join('');

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Order Receipt - #${order.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .receipt { max-width: 800px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #1B2537; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th { background-color: #1B2537; color: white; padding: 12px 8px; text-align: left; }
          .total { font-size: 18px; font-weight: bold; text-align: right; margin-top: 20px; }
          .footer { margin-top: 40px; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <div class="logo">Coffee Haven</div>
            <p>Order Receipt</p>
          </div>
          
          <p><strong>Order ID:</strong> ${order.orderId}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          
          <div class="total">
            Total Amount: $${order.totalAmount.toFixed(2)}
          </div>
          
          <div class="footer">
            <p>Thank you for shopping at Coffee Haven!</p>
            <p>Visit us again at www.coffeehaven.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Download receipt as PDF
  downloadReceipt(order: Order) {
    const receiptHtml = this.generateReceiptHTML(order);
    const blob = new Blob([receiptHtml], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `receipt-${order.orderId}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  // Product Methods
  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(product => product.category === category);
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.products.find(product => product.id === id) || null;
  }

  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct = {
      ...product,
      id: Math.max(...this.products.map(p => p.id), 0) + 1
    };
    this.products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(this.products));
    return newProduct;
  }

  async updateProduct(id: number, updates: Partial<Product>): Promise<Product | null> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.products[index] = { ...this.products[index], ...updates };
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products[index];
  }

  async deleteProduct(id: number): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
    return true;
  }
} 