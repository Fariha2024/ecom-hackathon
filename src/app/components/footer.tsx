'use client';

import React, { useState } from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";



const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Placeholder for subscribe functionality
    alert(`Subscribed with ${email}`);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Footer Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
            <p className="text-sm text-gray-700 mb-3">Learn more about Funiro and our story</p>
            <p className="text-sm text-gray-700 mb-3">How we work and our values</p>
            <p className="text-sm text-gray-700 mb-3">Join us to make better shopping experiences</p>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-black mb-4">Customer Service</h2>
            <p className="text-sm text-gray-700 mb-3">Contact Us</p>
            <p className="text-sm text-gray-700 mb-3">FAQs</p>
            <p className="text-sm text-gray-700 mb-3">Shipping & Returns</p>
            <p className="text-sm text-gray-700 mb-3">Order Tracking</p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-black mb-4">Follow Us</h2>
            <div className="flex gap-4">
              <CiTwitter size={30} className="text-gray-700 hover:text-blue-500 transition" />
              <FaInstagram size={30} className="text-gray-700 hover:text-pink-500 transition" />
              <FiFacebook size={30} className="text-gray-700 hover:text-blue-700 transition" />
              <FiLinkedin size={30} className="text-gray-700 hover:text-blue-600 transition" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-black mb-4">Newsletter</h2>
            <p className="text-sm text-gray-700 mb-3">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                onClick={handleSubscribe}
                className="bg-black text-white py-2 px-4 rounded-r-md hover:bg-gray-700 transition"
              >
                Subscribe <LuSendHorizontal size={20} className="ml-2 inline" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>© 2023 Funiro. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;




















{/*"use client";*/}


{/*import React, { useState } from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Placeholder for subscribe functionality
    alert(`Subscribed with ${email}`);
  };

  return (
    <div className="w-full bg-white px-4 sm:px-8 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        {/* Left Section *
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl font-inter font-bold text-[#000000] mb-4">Funiro</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000] mb-3">
            400 University Drive, Suits 200 Carol Gables
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000] mb-3">
            FL 33134 USA
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000]">
            2023 Funiro. All rights reserved.
          </p>
        </div>

        {/* Links Section *
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-poppins font-bold text-[#000000] mb-4">Links</h2>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Home</p>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">About</p>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Shop</p>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Contact</p>
        </div>

        {/* Help Section *
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-poppins font-bold text-[#000000] mb-4">Help</h2>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Payment Option</p>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Privacy Policies</p>
        </div>

        {/* Newsletter Section *
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-poppins font-bold text-[#000000] mb-4">Newsletter</h2>
          <p className="font-poppins text-sm sm:text-base text-[#000000] mb-3">Enter your e-mail address</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              onClick={handleSubscribe}
              className="bg-black text-white py-2 px-4 rounded-r-md hover:bg-gray-700 transition-colors"
            >
              Subscribe <LuSendHorizontal size={20} className="ml-2 inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons Section *
      <div className="flex justify-center mt-8">
        <div className="flex gap-6 text-[#000000]">
          <CiTwitter size={30} className="hover:text-blue-500 transition-colors" />
          <FaInstagram size={30} className="hover:text-pink-500 transition-colors" />
          <FiFacebook size={30} className="hover:text-blue-700 transition-colors" />
          <FiLinkedin size={30} className="hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Footer;*/}//vertical good









{/*import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-col lg:flex-row justify-evenly pt-[5%] bg-white px-4 sm:px-8'>
      {/* Left Section *
      <div className='flex flex-col mb-8 lg:mb-0'>
        <h2 className='text-3xl font-inter font-bold text-[#000000] mb-4'>Funiro</h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000] mb-3'>
          400 University Drive, Suits 200 Carol Gables
        </p>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000] mb-3'>
          FL 33134 USA
        </p>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-[#000000]'>
          2023 Funiro. All rights reserved.
        </p>
      </div>

      {/* Links Section *
      <div className='flex flex-col mb-8 lg:mb-0'>
        <h2 className='text-lg font-poppins font-bold text-[#000000] mb-4'>Links</h2>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Home</p>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>About</p>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Shop</p>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Contact</p>
      </div>

      {/* Help Section *
      <div className='flex flex-col mb-8 lg:mb-0'>
        <h2 className='text-lg font-poppins font-bold text-[#000000] mb-4'>Help</h2>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Payment Option</p>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Privacy Policies</p>
      </div>

      {/* Newsletter Section *
      <div className='flex flex-col mb-8 lg:mb-0'>
        <h2 className='text-lg font-poppins font-bold text-[#000000] mb-4'>Newsletter</h2>
        <p className='font-poppins text-sm sm:text-base text-[#000000] mb-3'>Enter your e-mail address</p>
        <button className='bg-black text-white py-2 px-4 rounded-md'>Subscribe</button>
      </div>

      {/* Social Media Icons Section *
      <div className='flex flex-col items-center'>
        <div className='flex gap-4'>
          <CiTwitter size={30} />
          <FaInstagram size={30} />
          <FiFacebook size={30} />
          <FiLinkedin size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;*/}
