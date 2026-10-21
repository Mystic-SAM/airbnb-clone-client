/**
 * Formats a number as Indian Rupee currency (e.g., 28499 -> ₹28,499)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Formats review count with proper localized string
 */
export function formatReviewCount(count: number): string {
  return `${count} ${count === 1 ? 'review' : 'reviews'}`;
}

/**
 * Formats bedroom and guest counts
 */
export function formatCapacity(guests: number, bedrooms: number, beds: number, baths: number): string {
  const g = `${guests} ${guests === 1 ? 'guest' : 'guests'}`;
  const br = `${bedrooms} ${bedrooms === 1 ? 'bedroom' : 'bedrooms'}`;
  const b = `${beds} ${beds === 1 ? 'bed' : 'beds'}`;
  const ba = `${baths} ${baths === 1 ? 'bathroom' : 'bathrooms'}`;
  return `${g} · ${br} · ${b} · ${ba}`;
}
