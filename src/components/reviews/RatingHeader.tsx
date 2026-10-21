import React from 'react';

interface RatingHeaderProps {
  rating: number;
}

export const RatingHeader: React.FC<RatingHeaderProps> = ({ rating }) => {
  return (
    <div className="reviews-header-block">
      <div className="reviews-laurel-rating-wrapper">
        <img
          src="/assets/images/ui/laurel-left.png"
          alt=""
          className="reviews-laurel-img"
          width={70}
          height={110}
        />
        <div className="reviews-rating-big-number">{rating.toFixed(2)}</div>
        <img
          src="/assets/images/ui/laurel-right.png"
          alt=""
          className="reviews-laurel-img"
          width={70}
          height={110}
        />
      </div>

      <h2 className="reviews-guest-favourite-title">Guest favourite</h2>
      <p className="reviews-guest-favourite-subtitle">
        This home is a guest favourite based on ratings, reviews and reliability
      </p>

      <button
        type="button"
        className="reviews-how-it-works-btn"
        onClick={() => {
          // Explanatory info
        }}
      >
        How reviews work
      </button>
    </div>
  );
};
