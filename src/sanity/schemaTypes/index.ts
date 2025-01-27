import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
// schemas/schema.ts
import{ shipment } from './shipment'; // Import the shipment schema
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, shipment],
}

