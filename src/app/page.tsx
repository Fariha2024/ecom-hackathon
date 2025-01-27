

'use client';

// src/app/pages/index.tsx
{/*'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import ProductCard from '../app/components/product-card'; // Import the ProductCard component
import { Product } from '../lib/interface'; // Import the Product interface
import { motion } from 'framer-motion'; // Import framer-motion for animations

// Fetch products from Sanity (this is an async function)
async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    imageUrl,
    price,
    tags,
    discountPercentage,
    description,
    isNew
  }`;
  return await client.fetch(query); // Fetch data from Sanity
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the products when the component mounts
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section *
      <div className="relative  h-[80vh] flex justify-center items-center text-white ">
        <motion.div
          className="absolute text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold ml-5 text-black">Furniro</h1>
          <p className="mt-48 text-xl text-bold text-black">ECOMMERCE IS CHANGING AND WE'RE LEADING THE CHANGE</p>
        </motion.div>
        {/* Hero Image *
        <div className="absolute inset-0">
          <Img src="/205a22ce-8f61-437e-84ac-59f3c8693ed0.jpg" alt="Hero Image" className="object-cover w-full h-full opacity-90" />
        </div>
      </div>

      {/* Products Section *
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 object-cover w-full h-full py-10 px-20">
     
     
      {/*<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">*
        {products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 2 }}
            transition={{ duration: 4 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}*/}





import React, { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import ProductCard from '../app/components/product-card'; // Import the ProductCard component
import { Product } from '../lib/interface'; // Import the Product interface
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Image from 'next/image'; // Import the Image component

// Fetch products from Sanity (this is an async function)
async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    imageUrl,
    price,
    tags,
    discountPercentage,
    description,
    isNew
  }`;
  return await client.fetch(query); // Fetch data from Sanity
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the products when the component mounts
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] flex justify-center items-center text-white">
        <motion.div
          className="absolute text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold ml-5 text-black">Furniro</h1>
          <p className="mt-48 text-xl text-bold text-black">
            ECOMMERCE IS CHANGING AND WE&apos;RE LEADING THE CHANGE
          </p>
        </motion.div>
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/205a22ce-8f61-437e-84ac-59f3c8693ed0.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full opacity-90"
            width={1920} // Add width
            height={1080} // Add height
            priority // Optional: Add priority for above-the-fold images
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 object-cover w-full h-full py-10 px-20">
        {products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 2 }}
            transition={{ duration: 4 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}