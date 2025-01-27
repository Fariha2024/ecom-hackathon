'use client'; // Mark as a Client Component

import React from 'react';
import { useCart } from './cart-context'; // Import the useCart hook
import { Product } from '@/app/lib/interface'; // Import the Product type

interface AddToCartButtonProps {
  product: Product; // The product to add to the cart
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from the Cart Context

  const handleAddToCart = () => {
    // Create a CartItem object from the Product
    const cartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: 1, // Default quantity is 1
      imageUrl: product.imageUrl || '', // Use an empty string if imageUrl is not available
    };

    // Add the item to the cart
    addToCart(cartItem);

    // Optional: Show a confirmation message or toast notification
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;