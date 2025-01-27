import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// Define the structure of the data returned by the query
interface TrackingNumber {
  trackingNumber: string;
}

// Create the Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Fetch tracking numbers from Sanity
export async function getTrackingNumbers(): Promise<TrackingNumber[]> {
  const query = `*[_type == "shipment"]{ trackingNumber }`;

  try {
    const data: TrackingNumber[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Failed to fetch tracking numbers:', error);
    throw new Error('Failed to fetch tracking numbers');
  }
}