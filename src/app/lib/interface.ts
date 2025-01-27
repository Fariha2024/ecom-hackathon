
//src/app/lib/interface.ts

export interface Product {
 
  _id: string;
  title: string;
  description: string;
  imageUrl: string | null; // The 'imageUrl' is now a direct URL string, and can be null if no image is available.
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}





  
 
  

  