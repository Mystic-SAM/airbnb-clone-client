import { SkipLink } from './components/layout/SkipLink';
import { GlobalHeader } from './components/layout/GlobalHeader';
import { StickySubHeader } from './components/layout/StickySubHeader';
import { ListingHeader } from './components/listing/ListingHeader';
import { HeroGallery } from './components/gallery/HeroGallery';
import { PropertyHeader } from './components/property/PropertyHeader';
import { Highlights } from './components/property/Highlights';
import { PropertyDescription } from './components/property/PropertyDescription';
import { SleepingArrangements } from './components/property/SleepingArrangements';
import { AmenitiesPreview } from './components/property/AmenitiesPreview';
import { AmenitiesModal } from './components/property/AmenitiesModal';
import { AvailabilityCalendarSection } from './components/calendar/AvailabilityCalendarSection';
import { PhotoTourModal } from './components/gallery/PhotoTourModal';
import { LightboxModal } from './components/gallery/LightboxModal';
import { LISTING_DATA } from './data/listingData';
import { GALLERY_PHOTOS } from './data/galleryData';
import { AMENITIES_DATA } from './data/amenitiesData';
import { REVIEWS_DATA } from './data/reviewsData';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useModalParam } from './hooks/useModalParam';

import { ReservationCard } from './components/reservation/ReservationCard';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { LocationSection } from './components/location/LocationSection';
import { HostSection } from './components/host/HostSection';
import { ThingsToKnowSection } from './components/policies/ThingsToKnowSection';
import { NearbyStaysSection } from './components/nearby/NearbyStaysSection';
import { LOCATION_DATA } from './data/locationData';
import { HOST_DATA } from './data/hostData';
import { POLICIES_DATA } from './data/policiesData';
import { NEARBY_STAYS_DATA } from './data/nearbyData';

export function App() {
  const isStickySubHeaderVisible = useScrollSpy(500);
  const { modal, photoIndex, photoId, openModal, closeModal, setPhotoIndex } = useModalParam();

  const handleOpenPhotoTour = (selectedPhotoId?: string | number) => {
    openModal('PHOTO_TOUR', 0, selectedPhotoId);
  };

  const handleOpenLightbox = (index: number) => {
    openModal('LIGHTBOX', index);
  };

  const handleCloseLightbox = () => {
    openModal('PHOTO_TOUR');
  };

  const handleOpenAmenities = () => {
    openModal('AMENITIES');
  };

  return (
    <>
      <SkipLink />
      <GlobalHeader />
      <StickySubHeader
        isVisible={isStickySubHeaderVisible}
        onReserveClick={() => {
          document.getElementById('reservation-card')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main id="main">
        <div className="page-container">
          <ListingHeader title={LISTING_DATA.title} />

          <HeroGallery
            photos={GALLERY_PHOTOS}
            onOpenPhotoTour={handleOpenPhotoTour}
            onOpenLightbox={handleOpenLightbox}
          />

          <div className="property-layout-grid">
            {/* Left Column: Property Details, Highlights, Description, Sleeping, Amenities */}
            <div className="property-main-col">
              <PropertyHeader listing={LISTING_DATA} />
              <Highlights highlights={LISTING_DATA.highlights} />
              <PropertyDescription description={LISTING_DATA.description} />
              <SleepingArrangements />
              <AmenitiesPreview
                onOpenAmenitiesModal={handleOpenAmenities}
              />
              <AvailabilityCalendarSection
                checkInDate="18 Oct 2026"
                checkOutDate="23 Oct 2026"
                nightsCount={5}
                locationName="Candolim"
              />
            </div>

            {/* Right Column: Sticky Reservation Sidebar */}
            <div className="property-sidebar-col" id="reservation-card">
              <ReservationCard listing={LISTING_DATA} />
            </div>
          </div>

          {/* Reviews Section */}
          <ReviewsSection reviewsData={REVIEWS_DATA} />

          {/* Location Section */}
          <LocationSection location={LOCATION_DATA} />

          {/* Host Section */}
          <HostSection hostData={HOST_DATA} />

          {/* Things To Know Section */}
          <ThingsToKnowSection policies={POLICIES_DATA} />

          {/* More Stays Nearby Section */}
          <NearbyStaysSection stays={NEARBY_STAYS_DATA} />
        </div>
      </main>

      {/* Modals */}
      <PhotoTourModal
        isOpen={modal === 'PHOTO_TOUR' || modal === 'LIGHTBOX'}
        photos={GALLERY_PHOTOS}
        selectedPhotoId={photoId}
        onClose={closeModal}
        onSelectPhoto={handleOpenLightbox}
      />

      <LightboxModal
        isOpen={modal === 'LIGHTBOX'}
        photos={GALLERY_PHOTOS}
        currentIndex={photoIndex}
        onClose={handleCloseLightbox}
        onNavigate={setPhotoIndex}
      />

      <AmenitiesModal
        isOpen={modal === 'AMENITIES'}
        amenities={AMENITIES_DATA}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
