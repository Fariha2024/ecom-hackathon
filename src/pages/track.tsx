import { useState } from 'react';

interface TrackingData {
  status: string;
  delivery_date?: string;
  last_checkpoint: {
    location: string;
    date: string;
  };
}

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingNumber) {
      setError('Please enter a tracking number.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/track/${trackingNumber}`);
      const data = await response.json();

      if (data.meta && data.meta.code === 200) {
        setTrackingData(data.data.tracking);
      } else {
        setError(data.error || 'Unable to fetch tracking data.');
      }
    } catch (err) {
      console.error('Error fetching tracking data:', err);
      setError('An error occurred while fetching tracking data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Your Shipment</h1>

      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleTrack}
          disabled={isLoading}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {isLoading ? 'Tracking...' : 'Track'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {trackingData && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tracking Details</h2>
          <p><strong>Status:</strong> {trackingData.status}</p>
          <p><strong>Delivery Date:</strong> {trackingData.delivery_date || 'Not available'}</p>
          <p><strong>Last Checkpoint:</strong> {trackingData.last_checkpoint.location} ({trackingData.last_checkpoint.date})</p>
        </div>
      )}
    </div>
  );
}