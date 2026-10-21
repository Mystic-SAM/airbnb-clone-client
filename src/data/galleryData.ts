import { PhotoItem, PhotoCategory } from '../types/gallery';

const ASSET_DIR = '/assets/images/listing/';

export const GALLERY_PHOTOS: PhotoItem[] = [
  // Living room 1 (0 - 2)
  {
    id: 1000,
    index: 0,
    src: `${ASSET_DIR}photo-01.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 1',
    category: 'Living room 1',
    caption: 'Living room with stylish sofa and ambient lighting',
    isHero: true,
    heroPosition: 1
  },
  {
    id: 1001,
    index: 1,
    src: `${ASSET_DIR}photo-02.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 2',
    category: 'Living room 1',
    caption: 'Living room view showing TV and AC',
    isHero: true,
    heroPosition: 2
  },
  {
    id: 1002,
    index: 2,
    src: `${ASSET_DIR}photo-03.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 3',
    category: 'Living room 1',
    caption: 'Cozy living space decor and seating',
    isHero: true,
    heroPosition: 3
  },

  // Living room 2 (3 - 9)
  {
    id: 1003,
    index: 3,
    src: `${ASSET_DIR}photo-04.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 4',
    category: 'Living room 2',
    caption: 'Private indoor Jacuzzi lounge',
    isHero: true,
    heroPosition: 4
  },
  {
    id: 1004,
    index: 4,
    src: `${ASSET_DIR}photo-05.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 5',
    category: 'Living room 2',
    caption: 'Hot tub area with modern finishes',
    isHero: true,
    heroPosition: 5
  },
  {
    id: 1005,
    index: 5,
    src: `${ASSET_DIR}photo-06.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 6',
    category: 'Living room 2',
    caption: 'Romantic setup with warm lighting',
    isHero: false
  },
  {
    id: 1006,
    index: 6,
    src: `${ASSET_DIR}photo-07.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 7',
    category: 'Living room 2',
    caption: 'Jacuzzi jets and premium bath area',
    isHero: false
  },
  {
    id: 1007,
    index: 7,
    src: `${ASSET_DIR}photo-08.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 8',
    category: 'Living room 2',
    caption: 'Relaxing jacuzzi tub close-up',
    isHero: false
  },
  {
    id: 1008,
    index: 8,
    src: `${ASSET_DIR}photo-09.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 9',
    category: 'Living room 2',
    caption: 'Indoor hot tub perspective',
    isHero: false
  },
  {
    id: 1009,
    index: 9,
    src: `${ASSET_DIR}photo-10.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 10',
    category: 'Living room 2',
    caption: 'Lounge corner with decorative accents',
    isHero: false
  },

  // Full kitchen (10 - 11)
  {
    id: 1010,
    index: 10,
    src: `${ASSET_DIR}photo-11.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 11',
    category: 'Full kitchen',
    caption: 'Fully equipped modern kitchen',
    isHero: false
  },
  {
    id: 1011,
    index: 11,
    src: `${ASSET_DIR}photo-12.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 12',
    category: 'Full kitchen',
    caption: 'Kitchen appliances and cookware basics',
    isHero: false
  },

  // Bedroom (12 - 17)
  {
    id: 1012,
    index: 12,
    src: `${ASSET_DIR}photo-13.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 13',
    category: 'Bedroom',
    caption: 'Comfortable master bedroom with double bed',
    isHero: false
  },
  {
    id: 1013,
    index: 13,
    src: `${ASSET_DIR}photo-14.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 14',
    category: 'Bedroom',
    caption: 'Bed setup with premium linens',
    isHero: false
  },
  {
    id: 1014,
    index: 14,
    src: `${ASSET_DIR}photo-15.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 15',
    category: 'Bedroom',
    caption: 'Bedroom AC and lighting details',
    isHero: false
  },
  {
    id: 1015,
    index: 15,
    src: `${ASSET_DIR}photo-16.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 16',
    category: 'Bedroom',
    caption: 'Wardrobe and room-darkening shades',
    isHero: false
  },
  {
    id: 1016,
    index: 16,
    src: `${ASSET_DIR}photo-17.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 17',
    category: 'Bedroom',
    caption: 'Side table and cozy ambiance',
    isHero: false
  },
  {
    id: 1017,
    index: 17,
    src: `${ASSET_DIR}photo-18.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 18',
    category: 'Bedroom',
    caption: 'Spacious bedroom perspective',
    isHero: false
  },

  // Full bathroom (18)
  {
    id: 1018,
    index: 18,
    src: `${ASSET_DIR}photo-19.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 19',
    category: 'Full bathroom',
    caption: 'Pristine modern bathroom with shower',
    isHero: false
  },

  // Gym (19 - 23)
  {
    id: 1019,
    index: 19,
    src: `${ASSET_DIR}photo-20.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 20',
    category: 'Gym',
    caption: 'Building fitness center equipment',
    isHero: false
  },
  {
    id: 1020,
    index: 20,
    src: `${ASSET_DIR}photo-21.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 21',
    category: 'Gym',
    caption: 'Treadmills and cardio machines',
    isHero: false
  },
  {
    id: 1021,
    index: 21,
    src: `${ASSET_DIR}photo-22.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 22',
    category: 'Gym',
    caption: 'Free weights and workout area',
    isHero: false
  },
  {
    id: 1022,
    index: 22,
    src: `${ASSET_DIR}photo-23.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 23',
    category: 'Gym',
    caption: 'Gym overview with natural light',
    isHero: false
  },
  {
    id: 1023,
    index: 23,
    src: `${ASSET_DIR}photo-24.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 24',
    category: 'Gym',
    caption: 'Air conditioned exercise facility',
    isHero: false
  },

  // Exterior (24 - 29)
  {
    id: 1024,
    index: 24,
    src: `${ASSET_DIR}photo-25.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 25',
    category: 'Exterior',
    caption: 'Building exterior facade in Candolim',
    isHero: false
  },
  {
    id: 1025,
    index: 25,
    src: `${ASSET_DIR}photo-26.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 26',
    category: 'Exterior',
    caption: 'Property entrance and lush landscaping',
    isHero: false
  },
  {
    id: 1026,
    index: 26,
    src: `${ASSET_DIR}photo-27.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 27',
    category: 'Exterior',
    caption: 'Balcony view of serene surroundings',
    isHero: false
  },
  {
    id: 1027,
    index: 27,
    src: `${ASSET_DIR}photo-28.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 28',
    category: 'Exterior',
    caption: 'Architectural design and balconies',
    isHero: false
  },
  {
    id: 1028,
    index: 28,
    src: `${ASSET_DIR}photo-29.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 29',
    category: 'Exterior',
    caption: 'Secure gated entrance',
    isHero: false
  },
  {
    id: 1029,
    index: 29,
    src: `${ASSET_DIR}photo-30.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 30',
    category: 'Exterior',
    caption: 'Outdoor walkways and gardens',
    isHero: false
  },

  // Pool (30 - 32)
  {
    id: 1030,
    index: 30,
    src: `${ASSET_DIR}photo-31.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 31',
    category: 'Pool',
    caption: 'Shared outdoor swimming pool',
    isHero: false
  },
  {
    id: 1031,
    index: 31,
    src: `${ASSET_DIR}photo-32.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 32',
    category: 'Pool',
    caption: 'Poolside loungers and relaxing sun deck',
    isHero: false
  },
  {
    id: 1032,
    index: 32,
    src: `${ASSET_DIR}photo-33.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 33',
    category: 'Pool',
    caption: 'Crystal clear pool water',
    isHero: false
  },

  // Additional photos (33 - 42)
  {
    id: 1033,
    index: 33,
    src: `${ASSET_DIR}photo-34.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 34',
    category: 'Additional photos',
    caption: 'Detail view of interior styling',
    isHero: false
  },
  {
    id: 1034,
    index: 34,
    src: `${ASSET_DIR}photo-35.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 35',
    category: 'Additional photos',
    caption: 'Dining corner and workspace setup',
    isHero: false
  },
  {
    id: 1035,
    index: 35,
    src: `${ASSET_DIR}photo-36.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 36',
    category: 'Additional photos',
    caption: 'Comfort amenities and toiletries',
    isHero: false
  },
  {
    id: 1036,
    index: 36,
    src: `${ASSET_DIR}photo-37.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 37',
    category: 'Additional photos',
    caption: 'Smart TV entertainment setup',
    isHero: false
  },
  {
    id: 1037,
    index: 37,
    src: `${ASSET_DIR}photo-38.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 38',
    category: 'Additional photos',
    caption: 'Night ambiance and accent lighting',
    isHero: false
  },
  {
    id: 1038,
    index: 38,
    src: `${ASSET_DIR}photo-39.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 39',
    category: 'Additional photos',
    caption: 'Kitchen utensils and coffee setup',
    isHero: false
  },
  {
    id: 1039,
    index: 39,
    src: `${ASSET_DIR}photo-40.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 40',
    category: 'Additional photos',
    caption: 'Bathroom mirror and vanity',
    isHero: false
  },
  {
    id: 1040,
    index: 40,
    src: `${ASSET_DIR}photo-41.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 41',
    category: 'Additional photos',
    caption: 'Balcony seating for morning coffee',
    isHero: false
  },
  {
    id: 1041,
    index: 41,
    src: `${ASSET_DIR}photo-42.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 42',
    category: 'Additional photos',
    caption: 'Candolim neighborhood vibe',
    isHero: false
  },
  {
    id: 1042,
    index: 42,
    src: `${ASSET_DIR}photo-43.jpg`,
    alt: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 43',
    category: 'Additional photos',
    caption: 'Serene sunset from the property',
    isHero: false
  }
];

export const CATEGORY_NAMES: PhotoCategory[] = [
  'Living room 1',
  'Living room 2',
  'Full kitchen',
  'Bedroom',
  'Full bathroom',
  'Gym',
  'Exterior',
  'Pool',
  'Additional photos'
];
