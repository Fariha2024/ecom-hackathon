

//src/pages/checkout.tsx

import { useCart } from "../app/components/cart-context";
import { CartItem } from "../lib/interface"; // Import CartItem interface
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for optimized images

const Checkout = () => {
  const { cart, getTotalItems } = useCart(); // Destructure cart and getTotalItems from context
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    paymentMethod: "credit-card", // Default payment method
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed with the checkout process (e.g., create an order, integrate payment)
    alert("Checkout successful! Thank you for your purchase.");
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center justify-center">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex justify-center items-center bg-gray-200 h-20 w-20 rounded-lg">
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                    <div className="ml-4">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">x {item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <p className="font-semibold">Total Price</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>

      {/* Shipping and Payment Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Shipping & Payment Details</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Shipping Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Shipping Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your shipping address"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Proceed to Payment
        </button>
      </form>

      {/* Link back to Cart */}
      <div className="mt-6 text-center">
        <Link href="/cart">
          <div className="text-blue-500 hover:underline">Go back to your Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;





//origional
// src/pages/checkout.tsx
{/*import { useCart } from "../app/components/cart-context";
import { CartItem } from "../lib/interface";  // Correcting to CartItem
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";  // Importing Image component for Next.js

const Checkout = () => {
  const { cart, getTotalItems } = useCart();  // Assuming cart is of type CartItem[]
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed with the checkout process (e.g., create an order, integrate payment)
    alert("Checkout successful!");
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  // Fix: Multiply price by quantity

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      {/* Cart Details *
      <div className="cart-summary mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <div className="cart-items mt-4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item: CartItem) => (
              <div key={item.id} className="cart-item flex justify-between mb-4">
                <div className="flex items-center">
                  {/* Display product image *
                  {item.imageUrl ? (
                    <div className="mb-4 ml-10">
                      <Image
                        src={item.imageUrl} // Ensure imageUrl is a full URL
                        alt={item.title}
                        width={100}
                        height={100}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="mb-4  flex justify-center items-center bg-gray-200 h-[100px] w-[100px] rounded-lg">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                  <div className="ml-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <p className="text-gray-600">x {item.quantity}</p>
              </div>
            ))
          )}
        </div>
        <div className="total-price flex justify-between mt-4">
          <p className="font-semibold">Total Price</p>
          <p className="font-semibold">${totalPrice.toFixed(2)}</p> {/* Fixed to two decimal places *
        </div>
      </div>

      {/* Shipping Form *
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            Shipping Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Enter your shipping address"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Enter your email address"
          />
        </div>

        {/* Submit button *
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
            Proceed to Payment
          </button>
        </div>
      </form>

      {/* Link back to Cart *
      <div className="mt-6">
        <Link href="/cart">
          <div className="text-blue-500">Go back to your Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;*/}
