export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export interface ReservationState {
  checkInDate: string; // ISO or MM/DD/YYYY
  checkOutDate: string;
  guests: GuestCounts;
  isDiscountClaimed: boolean;
}

export interface ReservationPricing {
  pricePerNight: number;
  totalNights: number;
  baseTotal: number;
  discountAmount: number;
  finalTotal: number;
}
