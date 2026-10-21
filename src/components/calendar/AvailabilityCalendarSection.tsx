import React from 'react';
import './AvailabilityCalendarSection.css';

interface AvailabilityCalendarSectionProps {
  checkInDate?: string;
  checkOutDate?: string;
  nightsCount?: number;
  locationName?: string;
}

export const AvailabilityCalendarSection: React.FC<AvailabilityCalendarSectionProps> = ({
  checkInDate = '18 Oct 2026',
  checkOutDate = '23 Oct 2026',
  nightsCount = 5,
  locationName = 'Candolim'
}) => {
  // Days of week
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // October 2026: starts on Thursday (index 4) -> 4 blank cells, 31 days
  const octBlanks = [null, null, null, null];
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026: starts on Sunday (index 0) -> 0 blank cells, 30 days
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="calendar-section" id="availability" aria-labelledby="calendar-heading">
      <div className="calendar-header-block">
        <h2 id="calendar-heading" className="calendar-main-title">
          {nightsCount} nights in {locationName}
        </h2>
        <div className="calendar-subtitle">
          {checkInDate} - {checkOutDate}
        </div>
      </div>

      <div className="calendar-double-month-wrap">
        {/* Month navigation controls */}
        <div className="calendar-nav-controls">
          <button type="button" className="cal-nav-btn" aria-label="Previous month" disabled>
            <span className="cal-nav-icon">
              <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                <path
                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                  fillRule="evenodd"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          <button type="button" className="cal-nav-btn" aria-label="Next month">
            <span className="cal-nav-icon">
              <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Month 1: October 2026 */}
        <div className="calendar-month-col">
          <div className="calendar-month-title">October 2026</div>
          <div className="calendar-weekdays-row">
            {weekDays.map((d, i) => (
              <span key={`oct-wd-${i}`}>{d}</span>
            ))}
          </div>
          <div className="calendar-days-grid">
            {octBlanks.map((_, i) => (
              <div key={`oct-blank-${i}`} className="cal-day-cell cal-day-empty" />
            ))}
            {octDays.map((day) => {
              const isStart = day === 18;
              const isInRange = day >= 19 && day <= 22;
              const isEnd = day === 23;

              let cellClass = 'cal-day-cell';
              if (isStart) cellClass += ' cal-day-start';
              else if (isEnd) cellClass += ' cal-day-end';
              else if (isInRange) cellClass += ' cal-day-in-range';

              return (
                <div key={`oct-${day}`} className={cellClass}>
                  <span>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className="calendar-month-col">
          <div className="calendar-month-title">November 2026</div>
          <div className="calendar-weekdays-row">
            {weekDays.map((d, i) => (
              <span key={`nov-wd-${i}`}>{d}</span>
            ))}
          </div>
          <div className="calendar-days-grid">
            {novDays.map((day) => {
              const isBlocked = (day >= 18 && day <= 24) || day >= 29;
              let cellClass = 'cal-day-cell';
              if (isBlocked) cellClass += ' cal-day-blocked';

              return (
                <div key={`nov-${day}`} className={cellClass}>
                  <span>{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer controls: Keyboard icon + Clear dates */}
      <div className="calendar-footer-row">
        <span className="calendar-keyboard-icon" aria-hidden="true">
          <svg viewBox="0 0 32 22" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="1" y="1" width="30" height="20" rx="3" />
            <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
          </svg>
        </span>
        <button type="button" className="calendar-clear-dates-btn">
          Clear dates
        </button>
      </div>
    </section>
  );
};
