import React, { useState, useEffect } from 'react';
import { StarIcon } from '../common/Icons';
import './StickySubHeader.css';

interface StickySubHeaderProps {
  isVisible: boolean;
  onReserveClick?: () => void;
}

const SECTION_IDS = ['photos', 'amenities', 'reviews', 'location'];

export function StickySubHeader({ isVisible, onReserveClick }: StickySubHeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('photos');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;

        // If at top of the page, Photos is active
        if (scrollPosition < 400) {
          setActiveSection('photos');
          ticking = false;
          return;
        }

        // Check if user is near bottom of the page
        const isNearBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (isNearBottom) {
          setActiveSection('location');
          ticking = false;
          return;
        }

        // Find the currently visible section based on top offset threshold (140px below sticky bar)
        let current = 'photos';
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              current = id;
            }
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div
      className={`_JXzroy ${isVisible ? '_fTQmRt' : ''} sticky-subheader ${isVisible ? 'visible' : ''}`}
      id="_JXzroy"
      aria-hidden={!isVisible}
    >
      <div className="_Zudfyi sticky-subheader-inner">
        {/* Left: Section Anchor Tabs */}
        <nav className="_hCwPJL subnav-tabs" aria-label="Listing sections">
          <a
            href="#photos"
            data-target="photos"
            className={`subnav-tab-link ${activeSection === 'photos' ? '_KOWlKT active' : ''}`}
            onClick={(e) => handleTabClick(e, 'photos')}
          >
            Photos
          </a>
          <a
            href="#amenities"
            data-target="amenities"
            className={`subnav-tab-link ${activeSection === 'amenities' ? '_KOWlKT active' : ''}`}
            onClick={(e) => handleTabClick(e, 'amenities')}
          >
            Amenities
          </a>
          <a
            href="#reviews"
            data-target="reviews"
            className={`subnav-tab-link ${activeSection === 'reviews' ? '_KOWlKT active' : ''}`}
            onClick={(e) => handleTabClick(e, 'reviews')}
          >
            Reviews
          </a>
          <a
            href="#location"
            data-target="location"
            className={`subnav-tab-link ${activeSection === 'location' ? '_KOWlKT active' : ''}`}
            onClick={(e) => handleTabClick(e, 'location')}
          >
            Location
          </a>
        </nav>

        {/* Right: Quick Price Summary & Reserve CTA */}
        <div className="_YRQCMM subnav-cta-group">
          <div className="_KQgxsf subnav-price-info">
            <div>
              <span className="_aykCAY subnav-price-amount">₹28,499</span>
              <span className="_FVmwas subnav-price-period"> for 5 nights</span>
            </div>
            <div className="_CBhLfH subnav-rating-row">
              <span className="_QdaeUh subnav-star"><StarIcon /></span>
              <span className="subnav-rating-score">4.95</span>
              <span className="sn-reviews subnav-review-count"> · 19 reviews</span>
            </div>
          </div>
          <button
            type="button"
            className="_NhmiWB _jCniyC subnav-reserve-btn"
            onClick={onReserveClick}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
