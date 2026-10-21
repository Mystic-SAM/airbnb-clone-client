import React, { useState } from 'react';
import { ReviewItem } from '../../types/reviews';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i} className="review-star-icon">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path
            fillRule="evenodd"
            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
            fill="currentColor"
          />
        </svg>
      </span>
    ));
  };

  return (
    <article className="review-card-item">
      {/* Author Header */}
      <div className="review-card-header">
        {review.avatarType === 'image' && review.avatarSrc ? (
          <img
            src={review.avatarSrc}
            alt={review.authorName}
            className="review-author-avatar-img"
            width={42}
            height={42}
          />
        ) : (
          <div
            className="review-author-avatar-initial"
            style={{
              backgroundColor: review.initialBg || '#f7ede2',
              color: review.initialColor || '#c1852a',
            }}
            aria-hidden="true"
          >
            {review.initial || review.authorName.charAt(0)}
          </div>
        )}

        <div className="review-author-meta">
          <div className="review-author-name">{review.authorName}</div>
          <div className="review-author-subtitle">{review.authorSubtitle}</div>
        </div>
      </div>

      {/* Star Rating & Date */}
      <div className="review-rating-date-row">
        <div className="review-stars-group" aria-label={`${review.rating} out of 5 stars`}>
          {renderStars(review.rating)}
        </div>
        <span className="review-dot-sep">·</span>
        <span className="review-date-text">{review.dateText}</span>
      </div>

      {/* Review Content */}
      <div
        className={`review-text-content ${review.hasTruncation && !isExpanded ? 'clamped' : ''}`}
      >
        {review.text}
      </div>

      {/* Show more toggle if truncatable */}
      {review.hasTruncation && (
        <button
          type="button"
          className="review-show-more-btn"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </article>
  );
};
