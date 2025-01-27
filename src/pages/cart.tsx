
// src/pages/cart.tsx
import React from 'react';
import { useCart } from '../app/components/cart-context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart, updateItemQuantity, getTotalPrice } = useCart();

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
    updateItemQuantity(id, quantity);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="cart-page p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item flex justify-between items-center p-4 border-b"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-cover rounded-lg"
                />
                <div className="item-details flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 ml-4 hover:text-red-700 transition duration-200"
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary mt-6">
            <p className="text-xl font-bold">
              Total Price: <span className="text-green-600">${getTotalPrice().toFixed(2)}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-green-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;



{/*import React from 'react';
import { useCart } from '../app/components/cart-context';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const CartPage = () => {
  const router = useRouter(); // Initialize the router
  const { cart, removeFromCart, updateItemQuantity, getTotalPrice } = useCart();

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateItemQuantity(id, quantity);
  };

  const handleCheckout = () => {
    router.push('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item flex justify-between items-center p-4 border-b">
            <img src={item.imageUrl} alt={item.title} className="w-[50px] h-[50px] object-cover" />
            <div className="item-details flex-1 ml-4">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            <div className="quantity">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="remove-button text-red-500 ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary mt-4">
        <p>Total Price: ${getTotalPrice()}</p>
        <button onClick={handleCheckout}
         className="bg-green-500 text-white py-2 px-4 rounded mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;*/}
