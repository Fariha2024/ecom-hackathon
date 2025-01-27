// src/lib/interface.ts

// Define Product Interface
export interface Product {
    _id: string;          // Unique identifier for the product
    title: string;        // Product title
    imageUrl: string;     // URL of the product image
    price: number;        // Product price
    tags?: string[];      // Optional tags/labels for the product (e.g., "New", "Discount")
    discountPercentage?: number; // Optional discount percentage (e.g., 10% off)
    description?: string;  // Optional product description
    isNew?: boolean;      // Optional flag to indicate if the product is new
  }
  
  // Define CartItem Interface
  export interface CartItem {
    id: string;           // Unique identifier for the cart item (same as product _id)
    title: string;        // Product title
    price: number;        // Product price
    quantity: number;     // Quantity of this product in the cart
    imageUrl: string;     // URL for the product image
  }
  
  // Define Cart Interface
  export interface Cart {
    product: Product;     // The product in the cart
    quantity: number;     // Quantity of the product in the cart
  }
  