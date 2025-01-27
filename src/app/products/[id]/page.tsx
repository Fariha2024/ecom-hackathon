// src/app/products/[id]/page.tsx
{/*import { Product } from "@/app/lib/interface";  // Product type
import { getProductById } from "@/app/lib/getData";  // Function to fetch product by ID
import Image from "next/image";  // Next.js Image component
import { notFound } from "next/navigation"; // For triggering 404 page if product is not found

// The page component is a Server Component by default in the app directory.
export default async function ProductDetail({ params }: { params: { id: string } }) {
  // Fetch product by ID
  const product: Product | null = await getProductById(params.id);

  // If no product is found, trigger a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail">
      <h1 className="text-2xl font-bold mb-4 ml-10 mt-4">{product.title}</h1>

      {/* Display product image *
      {product.imageUrl ? (
        <div className="mb-4 ml-10">
          <Image
            src={product.imageUrl} // Ensure imageUrl is a full URL
            alt={product.title}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="mb-4  flex justify-center items-center bg-gray-200 h-[200px] rounded-lg">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <p className="text-xl font-bold ml-10">${product.price}</p>
      <p className="text-sm mt-4 ml-10">{product.description}</p>

      <div className="tags mt-4 ml-10">
        {product.tags?.map((tag, index) => (
          <span key={index} className="text-sm bg-gray-200 rounded-full px-3 py-1 mr-2">
            {tag}
          </span>
        ))}
      </div>

      {/* Display discount if available *
      {product.discountPercentage > 0 && (
        <p className="text-sm text-red-500 mt-4 ml-10 mb-4">
          {product.discountPercentage}% Off
        </p>
      )}

      {/* Display "New" label *
      {product.isNew && <p className="text-sm text-green-500 mt-2">New Arrival</p>}
    </div>
  );
}
*/}  // origional workable 



// src/app/products/[id]/page.tsx
import { Product } from "@/app/lib/interface";  // Product type
import { getProductById } from "@/app/lib/getData";  // Function to fetch product by ID
import Image from "next/image";  // Next.js Image component
import { notFound } from "next/navigation"; // For triggering 404 page if product is not found
import  AddToCartButton from "../../components/AddToCartButton"; // Add to Cart button

// The page component is a Server Component by default in the app directory.
export default async function ProductDetail({ params }: { params: { id: string } }) {
  // Fetch product by ID
  let product: Product | null = null;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error('Failed to fetch product:', error);
    notFound(); // Trigger 404 if there's an error
  }

  // If no product is found, trigger a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail">
      <h1 className="text-2xl font-bold mb-4 ml-10 mt-4">{product.title}</h1>

      {/* Display product image */}
      {product.imageUrl ? (
        <div className="mb-4 ml-10">
          <Image
            src={product.imageUrl} // Ensure imageUrl is a full URL
            alt={product.title}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="mb-4 flex justify-center items-center bg-gray-200 h-[200px] rounded-lg">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <p className="text-xl font-bold ml-10">${product.price}</p>
      <p className="text-sm mt-4 ml-10">{product.description}</p>

      {/* Display tags */}
      <div className="tags mt-4 ml-10">
        {product.tags?.map((tag, index) => (
          <span key={index} className="text-sm bg-gray-200 rounded-full px-3 py-1 mr-2">
            {tag}
          </span>
        ))}
      </div>

      {/* Display discount if available */}
      {product.discountPercentage > 0 && (
        <p className="text-sm text-red-500 mt-4 ml-10 mb-4">
          {product.discountPercentage}% Off
        </p>
      )}

      {/* Display "New" label */}
      {product.isNew && <p className="text-sm text-green-500 mt-2">New Arrival</p>}

      {/* Add to Cart Button */}
      <div className="mt-6 ml-10">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}