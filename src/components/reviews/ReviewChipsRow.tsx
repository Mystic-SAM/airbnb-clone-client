import React from 'react';
import { ReviewChip } from '../../types/reviews';

interface ReviewChipsRowProps {
  chips: ReviewChip[];
}

export const ReviewChipsRow: React.FC<ReviewChipsRowProps> = ({ chips }) => {
  return (
    <div className="reviews-chips-row" role="region" aria-label="Review attribute filters">
      {chips.map((chip) => (
        <button
          key={chip.id}
          type="button"
          className="reviews-chip-btn"
          onClick={() => {
            // Interactive chip filter toggle if needed
          }}
        >
          <img
            src={chip.iconSrc}
            alt=""
            className="reviews-chip-img"
            width={20}
            height={20}
            aria-hidden="true"
          />
          <span className="reviews-chip-label">{chip.label}</span>
          <span className="reviews-chip-count">{chip.count}</span>
        </button>
      ))}
    </div>
  );
};
