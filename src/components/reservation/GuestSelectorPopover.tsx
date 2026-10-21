import React, { useEffect, useRef } from 'react';
import { GuestCounts } from '../../types/reservation';
import { MAX_GUESTS, MAX_INFANTS, MAX_PETS } from '../../data/reservationData';

interface GuestSelectorPopoverProps {
  isOpen: boolean;
  guests: GuestCounts;
  triggerRef: React.RefObject<HTMLElement | null>;
  onChange: (guests: GuestCounts) => void;
  onClose: () => void;
}

export const GuestSelectorPopover: React.FC<GuestSelectorPopoverProps> = ({
  isOpen,
  guests,
  triggerRef,
  onChange,
  onClose,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current && triggerRef.current.contains(target)) {
        return;
      }
      if (popoverRef.current && !popoverRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Use click or delayed mousedown to avoid race conditions
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, triggerRef, onClose]);

  if (!isOpen) return null;

  const totalRegular = guests.adults + guests.children;
  const isMaxRegularReached = totalRegular >= MAX_GUESTS;

  const handleUpdate = (type: keyof GuestCounts, delta: number) => {
    const next = { ...guests };
    if (type === 'adults') {
      next.adults = Math.max(1, next.adults + delta);
    } else if (type === 'children') {
      next.children = Math.max(0, next.children + delta);
    } else if (type === 'infants') {
      next.infants = Math.max(0, Math.min(MAX_INFANTS, next.infants + delta));
    } else if (type === 'pets') {
      next.pets = Math.max(0, Math.min(MAX_PETS, next.pets + delta));
    }
    onChange(next);
  };

  return (
    <div
      ref={popoverRef}
      className="guest-selector-popover"
      role="dialog"
      aria-label="Guests selection"
    >
      <div className="guest-row">
        <div className="guest-info">
          <span className="guest-type">Adults</span>
          <span className="guest-sub">Age 13+</span>
        </div>
        <div className="guest-controls">
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('adults', -1)}
            disabled={guests.adults <= 1}
            aria-label="Decrease adults"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
          <span className="counter-val" aria-live="polite">{guests.adults}</span>
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('adults', 1)}
            disabled={isMaxRegularReached}
            aria-label="Increase adults"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28m-14-14v28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="guest-row">
        <div className="guest-info">
          <span className="guest-type">Children</span>
          <span className="guest-sub">Ages 2–12</span>
        </div>
        <div className="guest-controls">
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('children', -1)}
            disabled={guests.children <= 0}
            aria-label="Decrease children"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
          <span className="counter-val" aria-live="polite">{guests.children}</span>
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('children', 1)}
            disabled={isMaxRegularReached}
            aria-label="Increase children"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28m-14-14v28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="guest-row">
        <div className="guest-info">
          <span className="guest-type">Infants</span>
          <span className="guest-sub">Under 2</span>
        </div>
        <div className="guest-controls">
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('infants', -1)}
            disabled={guests.infants <= 0}
            aria-label="Decrease infants"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
          <span className="counter-val" aria-live="polite">{guests.infants}</span>
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('infants', 1)}
            disabled={guests.infants >= MAX_INFANTS}
            aria-label="Increase infants"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28m-14-14v28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="guest-row">
        <div className="guest-info">
          <span className="guest-type">Pets</span>
          <span className="guest-sub">
            <a href="#pets-policy" className="pet-link" onClick={(e) => e.preventDefault()}>
              Bringing a service animal?
            </a>
          </span>
        </div>
        <div className="guest-controls">
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('pets', -1)}
            disabled={guests.pets <= 0}
            aria-label="Decrease pets"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
          <span className="counter-val" aria-live="polite">{guests.pets}</span>
          <button
            type="button"
            className="counter-btn"
            onClick={() => handleUpdate('pets', 1)}
            disabled={guests.pets >= MAX_PETS}
            aria-label="Increase pets"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="m2 16h28m-14-14v28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="guest-popover-footer">
        <span className="guest-capacity-note">
          This place has a maximum of {MAX_GUESTS} guests, not including infants.
        </span>
        <button
          type="button"
          className="guest-close-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
