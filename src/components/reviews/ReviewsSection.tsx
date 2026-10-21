import React from 'react';
import { ReviewsData } from '../../types/reviews';
import { RatingHeader } from './RatingHeader';
import { RatingCategoryGrid } from './RatingCategoryGrid';
import { ReviewChipsRow } from './ReviewChipsRow';
import { ReviewCard } from './ReviewCard';
import './ReviewsSection.css';

interface ReviewsSectionProps {
  reviewsData: ReviewsData;
  onShowAllReviews?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviewsData,
  onShowAllReviews,
}) => {
  return (
    <section className="reviews-section-container" id="reviews" aria-label="Guest Reviews">
      {/* 1. Rating & Guest Favourite Header */}
      <RatingHeader rating={reviewsData.overallRating} />

      {/* 2. Rating Breakdown by Category & Distribution */}
      <RatingCategoryGrid
        distribution={reviewsData.distribution}
        categories={reviewsData.categories}
      />

      {/* 3. Review Attribute Chips */}
      <ReviewChipsRow chips={reviewsData.chips} />

      {/* 4. Review Cards 2-Column Grid */}
      <div className="reviews-cards-grid">
        {reviewsData.reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>

      {/* 5. Show All Reviews CTA */}
      <div className="reviews-show-all-wrapper">
        <button
          type="button"
          className="reviews-show-all-btn"
          onClick={onShowAllReviews}
        >
          Show all {reviewsData.reviewsCount} reviews
        </button>
      </div>
    </section>
  );
};
