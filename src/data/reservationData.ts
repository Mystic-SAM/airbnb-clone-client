import { GuestCounts, ReservationState } from '../types/reservation';

export const DEFAULT_GUEST_COUNTS: GuestCounts = {
  adults: 2,
  children: 0,
  infants: 0,
  pets: 0,
};

export const MAX_GUESTS = 3; // From listing capacitySpecs: 3 guests
export const MAX_INFANTS = 5;
export const MAX_PETS = 2;

export const INITIAL_RESERVATION_STATE: ReservationState = {
  checkInDate: '10/18/2026',
  checkOutDate: '10/23/2026',
  guests: DEFAULT_GUEST_COUNTS,
  isDiscountClaimed: false,
};

export function formatGuestSummary(guests: GuestCounts): string {
  const totalRegularGuests = guests.adults + guests.children;
  let summary = `${totalRegularGuests} guest${totalRegularGuests > 1 ? 's' : ''}`;
  
  if (guests.infants > 0) {
    summary += `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''}`;
  }
  if (guests.pets > 0) {
    summary += `, ${guests.pets} pet${guests.pets > 1 ? 's' : ''}`;
  }
  return summary;
}
