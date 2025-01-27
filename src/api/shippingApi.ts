// src/api/shippingApi.ts

interface ShippingResponse {
    cost: number;
    error?: string;
  }
  
  export const fetchShippingCost = async (address: string, method: string): Promise<number> => {
    // Validate inputs
    if (!address || !method) {
      throw new Error('Address and shipping method are required.');
    }
  
    try {
      const response = await fetch(process.env.SHIPPING_API_URL || 'https://api.shippingprovider.com/rates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, method }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch shipping cost: ${response.statusText}`);
      }
  
      const data: ShippingResponse = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      return data.cost;
    } catch (error) {
      console.error('Error fetching shipping cost:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  };