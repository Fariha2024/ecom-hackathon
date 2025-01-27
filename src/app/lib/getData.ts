
// src/app/lib/getData.ts
import { client } from "@/sanity/lib/client";  // Assuming you have a Sanity client instance
import { Product } from "./interface";  // Product type

export async function getProductById(id: string): Promise<Product | null> {
  if (!id) {
    throw new Error("Product ID is required");
  }

  // Sanity query to fetch a product by ID
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    imageUrl,
    price,
    tags,
    discountPercentage,
    description,
    isNew
  }`;

  const product = await client.fetch(query, { id });
  return product || null;  // Return the product or null if not found
}








// src/app/lib/getData.tsx
{/*import { client } from "@/sanity/lib/client";  // Import your Sanity client

export async function getProductById(id: string) {
  if (!id) {
    throw new Error("Product id is required");
  }

  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    imageUrl,
    price,
    tags,
    discountPercentage,
    description,
    isNew
  }`;

  const product = await client.fetch(query, { id });
  return product;
}*/}
