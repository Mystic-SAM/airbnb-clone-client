import { Amenity } from '../types/listing';

export const AMENITIES_DATA: Amenity[] = [
  // Bathroom
  { id: 'hairdryer', name: 'Hairdryer', category: 'Bathroom', isAvailable: true },
  { id: 'cleaning-products', name: 'Cleaning products', category: 'Bathroom', isAvailable: true },
  { id: 'shampoo', name: 'Shampoo', category: 'Bathroom', isAvailable: true },
  { id: 'hot-water', name: 'Hot water', category: 'Bathroom', isAvailable: true },
  { id: 'shower-gel', name: 'Shower gel', category: 'Bathroom', isAvailable: true },

  // Bedroom and laundry
  { id: 'washing-machine', name: 'Washing machine', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'hangers', name: 'Hangers', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'bed-linen', name: 'Bed linen', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'room-darkening-blinds', name: 'Room-darkening blinds', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'iron', name: 'Iron', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'clothes-storage', name: 'Clothes storage', category: 'Bedroom and laundry', isAvailable: true },
  { id: 'cot', name: 'Cot', category: 'Bedroom and laundry', isAvailable: true },

  // Entertainment
  { id: 'tv', name: 'TV', category: 'Entertainment', isAvailable: true },

  // Family
  { id: 'family-cot', name: 'Cot', category: 'Family', isAvailable: true },

  // Heating and cooling
  { id: 'air-conditioning', name: 'Air conditioning', category: 'Heating and cooling', isAvailable: true },
  { id: 'ceiling-fan', name: 'Ceiling fan', category: 'Heating and cooling', isAvailable: true },

  // Home safety
  { id: 'security-cameras', name: 'Exterior security cameras on property', category: 'Home safety', isAvailable: true },
  { id: 'carbon-monoxide-alarm', name: 'Carbon monoxide alarm not reported', category: 'Home safety', isAvailable: false },
  { id: 'smoke-alarm', name: 'Smoke alarm not reported', category: 'Home safety', isAvailable: false },

  // Internet and office
  { id: 'wifi', name: 'Wifi', category: 'Internet and office', isAvailable: true },
  { id: 'workspace', name: 'Dedicated workspace', category: 'Internet and office', isAvailable: true },

  // Kitchen and dining
  { id: 'kitchen', name: 'Kitchen', category: 'Kitchen and dining', isAvailable: true },
  { id: 'fridge', name: 'Fridge', category: 'Kitchen and dining', isAvailable: true },
  { id: 'freezer', name: 'Freezer', category: 'Kitchen and dining', isAvailable: true },
  { id: 'microwave', name: 'Microwave', category: 'Kitchen and dining', isAvailable: true },
  { id: 'cooking-basics', name: 'Cooking basics', category: 'Kitchen and dining', isAvailable: true },
  { id: 'crockery-cutlery', name: 'Crockery and cutlery', category: 'Kitchen and dining', isAvailable: true },
  { id: 'kettle', name: 'Kettle', category: 'Kitchen and dining', isAvailable: true },
  { id: 'coffee', name: 'Coffee', category: 'Kitchen and dining', isAvailable: true },
  { id: 'wine-glasses', name: 'Wine glasses', category: 'Kitchen and dining', isAvailable: true },
  { id: 'toaster', name: 'Toaster', category: 'Kitchen and dining', isAvailable: true },
  { id: 'blender', name: 'Blender', category: 'Kitchen and dining', isAvailable: true },
  { id: 'cooker', name: 'Cooker', category: 'Kitchen and dining', isAvailable: true },

  // Location features
  { id: 'private-entrance', name: 'Private entrance', category: 'Location features', isAvailable: true },

  // Outdoor
  { id: 'patio-balcony', name: 'Patio or balcony', category: 'Outdoor', isAvailable: true },
  { id: 'outdoor-dining', name: 'Outdoor dining area', category: 'Outdoor', isAvailable: true },

  // Parking and facilities
  { id: 'free-parking', name: 'Free parking on premises', category: 'Parking and facilities', isAvailable: true },
  { id: 'pool', name: 'Pool', category: 'Parking and facilities', isAvailable: true },
  { id: 'hot-tub', name: 'Hot tub', category: 'Parking and facilities', isAvailable: true },
  { id: 'gym', name: 'Gym', category: 'Parking and facilities', isAvailable: true },

  // Services
  { id: 'pets-allowed', name: 'Pets allowed', category: 'Services', isAvailable: true },
  { id: 'cleaning-during-stay', name: 'Cleaning available during stay', category: 'Services', isAvailable: true },
  { id: 'long-term-stays', name: 'Long-term stays allowed', category: 'Services', isAvailable: true },
  { id: 'self-check-in-service', name: 'Self check-in', category: 'Services', isAvailable: true }
];

export const HIGHLIGHTED_AMENITIES = [
  'Kitchen',
  'Wifi',
  'Dedicated workspace',
  'Free parking on premises',
  'Pool',
  'Hot tub',
  'Pets allowed',
  'Exterior security cameras on property',
  'Carbon monoxide alarm not reported',
  'Smoke alarm not reported'
];
