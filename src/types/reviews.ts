export interface RatingDistribution {
  stars: number;
  percentage: number;
}

export interface RatingCategory {
  id: string;
  name: string;
  score: string;
  iconName: 'cleanliness' | 'accuracy' | 'checkin' | 'communication' | 'location' | 'value';
}

export interface ReviewChip {
  id: string;
  label: string;
  count: number;
  iconSrc: string;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorSubtitle: string; // e.g. "2 months on Airbnb", "3 years on Airbnb"
  avatarType: 'initial' | 'image';
  avatarSrc?: string;
  initial?: string;
  initialBg?: string;
  initialColor?: string;
  rating: number; // 1-5
  dateText: string;
  text: string;
  hasTruncation?: boolean;
}

export interface ReviewsData {
  overallRating: number;
  reviewsCount: number;
  distribution: RatingDistribution[];
  categories: RatingCategory[];
  chips: ReviewChip[];
  reviews: ReviewItem[];
}
