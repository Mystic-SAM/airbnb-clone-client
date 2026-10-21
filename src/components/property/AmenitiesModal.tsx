import { useState, useEffect, useMemo } from 'react';
import { Amenity } from '../../types/listing';
import { CloseIcon, SearchIcon, GenericAmenityIcon } from '../common/Icons';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import './AmenitiesModal.css';

interface AmenitiesModalProps {
  isOpen: boolean;
  amenities: Amenity[];
  onClose: () => void;
}

export function AmenitiesModal({ isOpen, amenities, onClose }: AmenitiesModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useFocusTrap(isOpen);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter amenities by search query
  const filteredAmenities = useMemo(() => {
    if (!searchQuery.trim()) return amenities;
    const q = searchQuery.toLowerCase().trim();
    return amenities.filter(a =>
      a.name.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
    );
  }, [amenities, searchQuery]);

  // Group filtered amenities by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Amenity[]> = {};
    filteredAmenities.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredAmenities]);

  const categoryNames = Object.keys(groupedByCategory);

  if (!isOpen) return null;

  return (
    <div
      className="amenities-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      ref={containerRef}
    >
      <div className="amenities-modal-container">
        {/* Sticky Modal Header */}
        <div className="amenities-modal-header">
          <button
            type="button"
            className="amenities-close-btn"
            onClick={onClose}
            aria-label="Close"
            title="Close (Esc)"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="amenities-modal-content">
          <h2 id="amenities-modal-title" className="amenities-modal-title">
            What this place offers
          </h2>

          {/* Search bar */}
          <div className="amenities-search-wrap">
            <SearchIcon className="amenities-search-icon" />
            <input
              type="text"
              className="amenities-search-input"
              placeholder="Search amenities"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search amenities"
            />
          </div>

          {/* Categories & Items List */}
          <div className="amenities-categories-stream">
            {categoryNames.length === 0 ? (
              <p className="no-amenities-found">No amenities match your search.</p>
            ) : (
              categoryNames.map(category => (
                <div key={category} className="amenity-category-block">
                  <h3 className="amenity-category-title">{category}</h3>
                  <div className="amenity-category-items">
                    {groupedByCategory[category].map(amenity => (
                      <div key={amenity.id} className="amenity-modal-row">
                        <span className="amenity-modal-icon" aria-hidden="true">
                          <GenericAmenityIcon name={amenity.name} />
                        </span>
                        <div className="amenity-modal-name-stack">
                          <span className={`amenity-modal-name ${!amenity.isAvailable ? 'unavailable' : ''}`}>
                            {amenity.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
