import { PhotoItem } from '../../types/gallery';
import { GridDotsIcon } from '../common/Icons';
import './HeroGallery.css';

interface HeroGalleryProps {
  photos: PhotoItem[];
  onOpenPhotoTour: () => void;
  onOpenLightbox?: (index: number) => void;
}

// Exactly matching reference 5 hero photo indices:
// Position 1: photo 6 (photo-07.jpg)
// Position 2: photo 3 (photo-04.jpg)
// Position 3: photo 4 (photo-05.jpg)
// Position 4: photo 12 (photo-13.jpg)
// Position 5: photo 28 (photo-29.jpg)
const HERO_PHOTO_INDICES = [6, 3, 4, 12, 28];

export function HeroGallery({ photos, onOpenPhotoTour }: HeroGalleryProps) {
  const heroPhotos = HERO_PHOTO_INDICES.map(idx => photos[idx] || photos[0]);

  return (
    <section className="hero-gallery-section" id="photos" aria-label="Photos of this place">
      <div className="hero-gallery-grid" id="heroGrid">
        {heroPhotos.map((photo, i) => (
          <button
            key={photo.id || i}
            type="button"
            className={`hero-photo-btn hero-photo-btn-${i + 1}`}
            onClick={onOpenPhotoTour}
            aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${i + 1}`}
          >
            <img
              src={photo.src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="hero-photo-img"
            />
          </button>
        ))}

        {/* "Show all photos" floating button */}
        <button
          type="button"
          className="show-all-photos-btn"
          id="showAllPhotos"
          onClick={onOpenPhotoTour}
          aria-label="Show all photos"
        >
          <GridDotsIcon />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}
