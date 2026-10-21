export interface Amenity {
  id: string;
  name: string;
  category: string;
  iconName?: string;
  isAvailable: boolean;
  explanation?: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string;
  authorTenure: string;
  date: string;
  rating: number;
  content: string;
}

export interface SleepingArrangement {
  roomName: string;
  bedType: string;
  iconName?: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NearbyStay {
  id: string;
  title: string;
  imageSrc: string;
  pricePerNight: number;
  rating: number;
  stayType?: string;
}

export interface HostInfo {
  name: string;
  avatarUrl: string;
  badgeText: string;
  reviewsCount: number;
  rating: number;
  yearsHosting: number;
  bioNotes: string[];
  coHosts: { name: string; avatarUrl?: string }[];
  responseRate: string;
  responseTime: string;
}

export interface ListingDetails {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  capacitySpecs: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  rating: number;
  reviewsCount: number;
  isGuestFavourite: boolean;
  pricePerNight: number;
  totalNights: number;
  totalPrice: number;
  checkInDate: string;
  checkOutDate: string;
  highlights: Highlight[];
  description: string;
  sleepingArrangements: SleepingArrangement[];
  host: HostInfo;
}
