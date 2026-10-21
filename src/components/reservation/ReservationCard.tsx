import React, { useState } from 'react';
import { ListingDetails } from '../../types/listing';
import { GuestCounts } from '../../types/reservation';
import { DEFAULT_GUEST_COUNTS, formatGuestSummary } from '../../data/reservationData';
import { PromoBanner } from './PromoBanner';
import { GuestSelectorPopover } from './GuestSelectorPopover';
import './ReservationCard.css';

interface ReservationCardProps {
  listing: ListingDetails;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({ listing }) => {
  const [guests, setGuests] = useState<GuestCounts>(DEFAULT_GUEST_COUNTS);
  const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState<boolean>(false);
  const [isDiscountClaimed, setIsDiscountClaimed] = useState<boolean>(false);

  const guestTriggerRef = React.useRef<HTMLDivElement>(null);

  const guestSummary = formatGuestSummary(guests);

  // Price calculation
  const basePrice = listing.totalPrice; // ₹28,499
  const displayedPrice = isDiscountClaimed ? Math.round(basePrice * 0.9) : basePrice;
  const formattedPrice = `₹${displayedPrice.toLocaleString('en-IN')}`;

  const handleGuestToggle = () => {
    setIsGuestPopoverOpen((prev) => !prev);
  };

  const handleClaimToggle = () => {
    setIsDiscountClaimed((prev) => !prev);
  };

  const handleReserveClick = () => {
    // Exact reference behavior: Reserve button does not change text
  };

  return (
    <aside className="_iJTxKe" aria-label="Reservation and Pricing">
      <div className="_bUsxCi" id="bookingSticky">
        {/* 10% Discount Promo Banner */}
        <PromoBanner
          isClaimed={isDiscountClaimed}
          onClaimToggle={handleClaimToggle}
        />

        {/* Main Reservation Card */}
        <div className="_ehfyuX">
          {/* Price & Night Header */}
          <div className="_HEyPzI">
            <span className="_AjpxES">{formattedPrice}</span>
            <span className="_kNZPIK">for {listing.totalNights} nights</span>
          </div>

          {/* Date & Guest Input Box */}
          <div className="_GLDaPq">
            {/* Top row: Check-in / Checkout */}
            <div className="_IJyfOk">
              <div
                className="_NdLgZo"
                tabIndex={0}
                role="button"
                aria-label={`Check-in date ${listing.checkInDate}`}
              >
                <div className="_mvnlYS">CHECK-IN</div>
                <div className="_vUECFC">{listing.checkInDate}</div>
              </div>

              <div
                className="_NdLgZo"
                tabIndex={0}
                role="button"
                aria-label={`Checkout date ${listing.checkOutDate}`}
              >
                <div className="_mvnlYS">CHECKOUT</div>
                <div className="_vUECFC">{listing.checkOutDate}</div>
              </div>
            </div>

            {/* Bottom row: Guests */}
            <div
              ref={guestTriggerRef}
              className={`_FiFzqL ${isGuestPopoverOpen ? 'active' : ''}`}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-expanded={isGuestPopoverOpen}
              aria-label={`Guests: ${guestSummary}`}
              onClick={handleGuestToggle}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleGuestToggle();
                }
              }}
            >
              <div>
                <div className="_mvnlYS">GUESTS</div>
                <div className="_vUECFC">{guestSummary}</div>
              </div>
              <span className="_SrOOll">
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
                  <path
                    d="M4 10l12 12 12-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Guest Selector Popover */}
            <GuestSelectorPopover
              isOpen={isGuestPopoverOpen}
              guests={guests}
              triggerRef={guestTriggerRef}
              onChange={setGuests}
              onClose={() => setIsGuestPopoverOpen(false)}
            />
          </div>

          {/* Cancellation Policy Badge */}
          <div className="_MMdioP">
            Free cancellation before <b>17 October</b>
          </div>

          {/* Reserve CTA Button */}
          <button
            type="button"
            className="_NhmiWB _YkNyTO"
            id="reserveBtn"
            onClick={handleReserveClick}
          >
            Reserve
          </button>

          {/* Charge Notice */}
          <div className="_mtuwgH">
            You won't be charged yet
          </div>
        </div>

        {/* Report Listing Footer */}
        <div className="_jcEuOw">
          <span className="ico">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
              <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
            </svg>
          </span>
          <a
            href="#report"
            onClick={(e) => e.preventDefault()}
          >
            Report this listing
          </a>
        </div>
      </div>
    </aside>
  );
};
