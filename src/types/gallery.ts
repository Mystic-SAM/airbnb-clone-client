export type PhotoCategory =
  | 'Living room 1'
  | 'Living room 2'
  | 'Full kitchen'
  | 'Bedroom'
  | 'Full bathroom'
  | 'Gym'
  | 'Exterior'
  | 'Pool'
  | 'Additional photos';

export interface PhotoItem {
  id: number;
  index: number;
  src: string;
  alt: string;
  category: PhotoCategory;
  caption?: string;
  isHero: boolean;
  heroPosition?: 1 | 2 | 3 | 4 | 5;
}

export type ModalType = 'NONE' | 'PHOTO_TOUR' | 'LIGHTBOX' | 'AMENITIES';
