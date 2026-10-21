import { useEffect, useCallback } from 'react';
import { PhotoItem } from '../../types/gallery';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import './LightboxModal.css';

interface LightboxModalProps {
  isOpen: boolean;
  photos: PhotoItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNavigate
}: LightboxModalProps) {
  const containerRef = useFocusTrap(isOpen);
  const currentPhoto = photos[currentIndex] || photos[0];
  const totalPhotos = photos.length;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalPhotos - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, totalPhotos, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="_zFbfbh _PjnNJs"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      ref={containerRef}
    >
      {/* Top Header */}
      <header className="_LWXeEY">
        <button
          className="_CscuGL _bNHEUf"
          type="button"
          aria-label="Show all photos"
          id="lbGrid"
          onClick={onClose}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '100%',
                width: '100%',
                fill: 'currentColor'
              }}
            >
              <path
                fillRule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              />
            </svg>
          </span>
        </button>

        <div className="_QIemms" id="lbTitle">
          {currentPhoto.category}
        </div>

        <div className="_lVGbrm">
          <span className="_iRDAKc" id="lbCounter" aria-live="polite">
            {currentIndex + 1} of {totalPhotos}
          </span>
          <button
            className="lb-close _bNHEUf"
            type="button"
            aria-label="Close"
            id="lbClose"
            onClick={onClose}
          >
            <span>
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible'
                }}
              >
                <path
                  d="M6 6l20 20M26 6 6 26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* Prev Navigation Button */}
      <button
        className="_KNOVTi _VTIXSd _bNHEUf"
        type="button"
        aria-label="Previous"
        id="lbPrev"
        disabled={currentIndex === 0}
        onClick={handlePrev}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              height: '100%',
              width: '100%',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 4,
              overflow: 'visible'
            }}
          >
            <path
              fill="none"
              d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
            />
          </svg>
        </span>
      </button>

      {/* Main Image Stage */}
      <div className="_VPKRNC" id="lbStage">
        <img
          key={currentPhoto.id}
          src={currentPhoto.src}
          alt={currentPhoto.category}
          className="_SSnzPz"
        />
      </div>

      {/* Next Navigation Button */}
      <button
        className="_KNOVTi _VkQoEV _bNHEUf"
        type="button"
        aria-label="Next"
        id="lbNext"
        disabled={currentIndex === totalPhotos - 1}
        onClick={handleNext}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              height: '100%',
              width: '100%',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 4,
              overflow: 'visible'
            }}
          >
            <path
              fill="none"
              d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
