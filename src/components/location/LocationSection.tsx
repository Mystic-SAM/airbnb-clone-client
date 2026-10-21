import React, { useState } from 'react';
import { LocationDetails } from '../../types/location';
import './LocationSection.css';

interface LocationSectionProps {
  location: LocationDetails;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 1.6));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));
  };

  return (
    <section className="location-section-container" id="location" aria-label="Location and Map">
      <h2 className="location-section-title">Where you’ll be</h2>
      <div className="location-section-address">
        {location.city}, {location.region}, {location.country}
      </div>

      {/* Map Container */}
      <div className="location-map-container" role="region" aria-label="Map showing general location">
        <div
          className="location-map-surface"
          style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
        />

        {/* Top-Left Search / Location Search Button */}
        <button
          type="button"
          className="location-map-search-btn"
          aria-label="Search map"
          onClick={() => {
            // Map search interaction
          }}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <circle
              cx="14"
              cy="14"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21l7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Top-Right Zoom Controls */}
        <div className="location-map-zoom-group">
          <button
            type="button"
            className="location-zoom-btn"
            aria-label="Zoom in"
            onClick={handleZoomIn}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path
                d="M16 6v20M6 16h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="location-zoom-btn"
            aria-label="Zoom out"
            onClick={handleZoomOut}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path
                d="M6 16h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Center Marker / House Badge */}
        <div className="location-map-center-pin" aria-label="Listing location">
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path
              d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Subheading Notice */}
      <div className="location-exact-notice">{location.subheading}</div>

      {/* Neighbourhood Highlights */}
      <h3 className="location-neighbourhood-title">{location.neighbourhoodTitle}</h3>
      <div className="location-neighbourhood-desc">
        {location.neighbourhoodDescription}
      </div>

      <button
        type="button"
        className="location-show-more-btn"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
        <span className={`location-chevron-icon ${isExpanded ? 'open' : ''}`}>
          <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
            <path
              d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              fillRule="evenodd"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </section>
  );
};
