import React, { useState } from 'react';
import { NearbyStay } from '../../types/nearby';
import './NearbyStaysSection.css';

interface NearbyStaysSectionProps {
  stays: NearbyStay[];
}

export const NearbyStaysSection: React.FC<NearbyStaysSectionProps> = ({ stays }) => {
  const [page, setPage] = useState<number>(1);
  const totalPages = 2;

  const handlePrev = () => {
    setPage(1);
  };

  const handleNext = () => {
    setPage(2);
  };

  // 5 visible cards per page out of 8 total cards.
  // In 1120px container, card width = 208px with 20px gap (step = 228px). Translating by 3 cards (684px).
  const translateX = page === 1 ? 0 : 684;

  return (
    <section className="_WNEjqG nearby-section-container" id="nearby-stays" aria-label="More stays nearby">
      <div className="_cixxXf nearby-header-row">
        <h2 className="_XZmvOH nearby-section-title" style={{ margin: 0 }}>
          More stays nearby
        </h2>

        <div className="_FFRFIT nearby-controls-group">
          <span className="_klVRbI nearby-page-indicator" aria-live="polite">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            className="_kxdode nearby-nav-btn"
            id="simPrev"
            disabled={page === 1}
            onClick={handlePrev}
            aria-label="Previous stays"
          >
            <span className="ico nearby-btn-icon">
              <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                <path
                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="_kxdode nearby-nav-btn"
            id="simNext"
            disabled={page === totalPages}
            onClick={handleNext}
            aria-label="Next stays"
          >
            <span className="ico nearby-btn-icon">
              <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="nearby-track-viewport">
        <div
          className="_duSenM nearby-track-slider"
          id="simTrack"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {stays.map((stay) => (
            <div key={stay.id} className="_YyLznY nearby-stay-card">
              <div className="nearby-card-img-wrapper">
                <img
                  src={stay.imageSrc}
                  alt=""
                  loading="lazy"
                  className="nearby-card-img"
                  width={208}
                  height={208}
                />
              </div>
              <div className="_JwWFHq nearby-card-title" title={stay.title}>
                {stay.title}
              </div>
              <div className="p nearby-card-price-row">
                <span className="nearby-price-val">{stay.price}</span>
                <span className="star nearby-star-val">
                  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentColor' }}>
                    <path
                      fillRule="evenodd"
                      d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                    />
                  </svg>
                  <span>{stay.rating.toFixed(2)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
