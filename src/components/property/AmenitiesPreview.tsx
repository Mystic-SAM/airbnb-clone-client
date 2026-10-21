import { Amenity } from '../../types/listing';
import { GenericAmenityIcon } from '../common/Icons';
import './AmenitiesPreview.css';

interface AmenitiesPreviewProps {
  amenities?: Amenity[];
  onOpenAmenitiesModal: () => void;
}

export function AmenitiesPreview({ onOpenAmenitiesModal }: AmenitiesPreviewProps) {
  // Highlighted preview amenities matching reference
  const previewAmenityList = [
    { id: 'kitchen', name: 'Kitchen', isAvailable: true },
    { id: 'wifi', name: 'Wifi', isAvailable: true },
    { id: 'workspace', name: 'Dedicated workspace', isAvailable: true },
    { id: 'free-parking', name: 'Free parking on premises', isAvailable: true },
    { id: 'pool', name: 'Pool', isAvailable: true },
    { id: 'hot-tub', name: 'Hot tub', isAvailable: true },
    { id: 'pets-allowed', name: 'Pets allowed', isAvailable: true },
    { id: 'security-cameras', name: 'Exterior security cameras on property', isAvailable: true },
    { id: 'carbon-monoxide-alarm', name: 'Carbon monoxide alarm', isAvailable: false },
    { id: 'smoke-alarm', name: 'Smoke alarm', isAvailable: false }
  ];

  return (
    <section className="amenities-preview-section" id="amenities" aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className="amenities-section-title">What this place offers</h2>

      <div className="amenities-preview-grid">
        {previewAmenityList.map((amenity) => (
          <div key={amenity.id} className="amenity-preview-item">
            <span className="amenity-icon-wrap" aria-hidden="true">
              <GenericAmenityIcon name={amenity.name} />
            </span>
            <span className={`amenity-label ${!amenity.isAvailable ? 'unavailable' : ''}`}>
              {amenity.name}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="show-all-amenities-btn"
        onClick={onOpenAmenitiesModal}
        aria-label="Show all 50 amenities"
      >
        Show all 50 amenities
      </button>
    </section>
  );
}
