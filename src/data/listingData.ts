import { ListingDetails } from '../types/listing';

export const LISTING_DATA: ListingDetails = {
  id: 'romantic-jacuzzi-1bhk-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  propertyType: 'Entire serviced apartment in Candolim, India',
  location: 'Candolim, Goa, India',
  capacitySpecs: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1
  },
  rating: 4.95,
  reviewsCount: 19,
  isGuestFavourite: true,
  pricePerNight: 5699.8,
  totalNights: 5,
  totalPrice: 28499,
  checkInDate: '10/18/2026',
  checkOutDate: '10/23/2026',
  highlights: [
    {
      id: 'outdoor-entertainment',
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
      iconName: 'pool'
    },
    {
      id: 'cooling',
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
      iconName: 'snowflake'
    },
    {
      id: 'self-checkin',
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
      iconName: 'key'
    }
  ],
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`,
  sleepingArrangements: [
    {
      roomName: 'Bedroom',
      bedType: '1 double bed',
      iconName: 'bed'
    },
    {
      roomName: 'Living room',
      bedType: '1 sofa',
      iconName: 'couch'
    }
  ],
  host: {
    name: 'Mirashya Homes',
    avatarUrl: '/assets/images/host/host-avatar.jpg',
    badgeText: 'Host',
    reviewsCount: 1463,
    rating: 4.68,
    yearsHosting: 2,
    bioNotes: [
      'Born in the 80s',
      'Where I went to school: NICMAR GOA'
    ],
    coHosts: [
      { name: 'Sharath' },
      { name: 'Aman Dev Pahwa' },
      { name: 'Maria Karen Priyanka' },
      { name: 'Simran' },
      { name: 'Pallavi' },
      { name: 'Sanyukta' },
      { name: 'Shruti' },
      { name: 'Amisha' }
    ],
    responseRate: '100%',
    responseTime: 'Responds within an hour'
  }
};
