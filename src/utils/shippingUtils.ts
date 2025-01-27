// Static shipping cost calculator
export const getShippingCost = (method: string): number => {
    switch (method) {
      case 'standard':
        return 5.0;
      case 'express':
        return 10.0;
      default:
        return 0;
    }
  };
  
  // Dynamic shipping cost fetcher
  import { fetchShippingCost } from '../api/shippingApi';
  
  export const calculateShipping = async (address: string, method: string): Promise<number> => {
    try {
      const cost = await fetchShippingCost(address, method);
      console.log('Shipping cost:', cost);
      return cost;
    } catch (error) {
      console.error('Failed to calculate shipping cost:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  };