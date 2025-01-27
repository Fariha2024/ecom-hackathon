// schemas/shipment.js

import { defineType, defineField } from 'sanity';

export const shipment = defineType({

    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
        description: 'The tracking number for the shipment.',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        description: 'The current status of the shipment (e.g., Delivered, In Transit).',
      },
      {
        name: 'deliveryDate',
        title: 'Delivery Date',
        type: 'date',
        description: 'The estimated or actual delivery date.',
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }], // Reference to a "customer" schema (if you have one)
        description: 'The customer associated with this shipment.',
      },
    ],
  });

