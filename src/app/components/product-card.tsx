
import React from 'react';
import { CartItem, Product } from '../../lib/interface';  // Import both Product and CartItem
import { useCart } from './cart-context';  // Import useCart hook
import Image from "next/image";

interface ProductCardProps {
  product: Product;  // Expecting a Product object
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Destructure addToCart from context

  // Function to handle adding a product to the cart
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product._id,       // Product id is mapped to CartItem id
      title: product.title,  // Product title
      price: product.price,  // Product price
      quantity: 1,           // Default quantity to 1 when adding to cart
      imageUrl: product.imageUrl,  // Product image URL
    };

    addToCart(cartItem);  // Call the addToCart function from CartContext
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={product.imageUrl}
          alt={product.title}
          className="object-cover w-full h-56 rounded-lg"
          width={500} // Required for next/image
          height={300} // Required for next/image
        />

        {/* Optional: Add product discount badge */}
        {product.discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded-md">
            {product.discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-500 mt-2">
          {product.description ? product.description : "No description available."}
        </p>
        <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;






// src/components/product-card.tsx
{/*import React from 'react';
import { CartItem, Product } from '../../lib/interface';  // Import both Product and CartItem
import { useCart } from './cart-context';  // Import useCart hook
import Image from "next/image"
interface ProductCardProps {
  product: Product;  // Expecting a Product object
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Destructure addToCart from context

  // Function to handle adding a product to the cart
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product._id,       // Product id is mapped to CartItem id
      title: product.title,  // Product title
      price: product.price,  // Product price
      quantity: 1,           // Default quantity to 1 when adding to cart
      imageUrl: product.imageUrl,  // Product image URL
    };

    addToCart(cartItem);  // Call the addToCart function from CartContext
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4">
      {/* Product Image *
      <div className="relative">
      <Image
          src={product.imageUrl}
          alt={product.title}
          className="object-cover w-full h-56 rounded-lg"
          width={500} // Required for next/image
          height={300} // Required for next/image
          />
      </div>
        
        {/* Optional: Add product discount badge *
        {product.discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded-md">
            {product.discountPercentage}% OFF
          </div>
        )}
      </div>
    
      {/* Product Details *
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-500 mt-2">{product.description ? product.description : "No description available."}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
        
        {/* Add to Cart Button *
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
  );
};

export default ProductCard;*/} //origional  











// src/components/product-card.tsx
{/*import React from 'react';
import { CartItem, Product } from '../../lib/interface';  // Import both Product and CartItem
import { useCart } from './cart-context';  // Import useCart hook

interface ProductCardProps {
  product: Product;  // Expecting a Product object
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Destructure addToCart from context

  // Function to handle adding a product to the cart
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product._id,       // Product id is mapped to CartItem id
      title: product.title,  // Product title
      price: product.price,  // Product price
      quantity: 1,           // Default quantity to 1 when adding to cart
      imageUrl: product.imageUrl,  // Product image URL
    };

    addToCart(cartItem);  // Call the addToCart function from CartContext
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;*/}





{/*import React from 'react';
import { useCart } from '../components/cart-context';
import { CartItem  } from '../../lib/interface'; // Assuming you have a CartItem interface

const ProductCard = ({ product }: { product: CartItem }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card border rounded-lg p-4 shadow-md">
      <img src={product.imageUrl} alt={product.title} className="w-full h-[200px] object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;*/}
