import { useEffect, useRef, useState } from 'react';
import { PhotoItem, PhotoCategory } from '../../types/gallery';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import './PhotoTourModal.css';

interface PhotoTourModalProps {
  isOpen: boolean;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photoIndex: number) => void;
}

interface CategoryRow {
  type: 'single' | 'double';
  photoIndices: number[];
}

interface TourCategoryConfig {
  id: string;
  name: PhotoCategory;
  subtitle: string;
  thumbnailIndex: number;
  rows: CategoryRow[];
}

const TOUR_CATEGORIES: TourCategoryConfig[] = [
  {
    id: 'tour-room-0',
    name: 'Living room 1',
    subtitle: 'Sofa  ·  Air conditioning  ·  Ceiling fan  ·  TV',
    thumbnailIndex: 0,
    rows: [
      { type: 'single', photoIndices: [0] },
      { type: 'double', photoIndices: [1, 2] }
    ]
  },
  {
    id: 'tour-room-1',
    name: 'Living room 2',
    subtitle: 'Ceiling fan  ·  Hot tub',
    thumbnailIndex: 3,
    rows: [
      { type: 'single', photoIndices: [3] },
      { type: 'double', photoIndices: [4, 5] },
      { type: 'single', photoIndices: [6] },
      { type: 'double', photoIndices: [7, 8] },
      { type: 'single', photoIndices: [9] }
    ]
  },
  {
    id: 'tour-room-2',
    name: 'Full kitchen',
    subtitle: 'Freezer  ·  Fridge  ·  Blender  ·  Cooker  ·  Cooking basics  ·  Kettle  ·  Microwave  ·  Toaster  ·  Wine glasses  ·  Coffee  ·  Crockery and cutlery',
    thumbnailIndex: 10,
    rows: [
      { type: 'double', photoIndices: [10, 11] }
    ]
  },
  {
    id: 'tour-room-3',
    name: 'Bedroom',
    subtitle: 'Double bed  ·  Air conditioning  ·  Bed linen  ·  Ceiling fan  ·  Clothes storage  ·  Cot  ·  Hangers  ·  Iron  ·  Room-darkening blinds  ·  Cleaning available during stay  ·  Cleaning products  ·  Long-term stays allowed  ·  Private entrance  ·  Wifi',
    thumbnailIndex: 12,
    rows: [
      { type: 'single', photoIndices: [12] },
      { type: 'double', photoIndices: [13, 14] },
      { type: 'single', photoIndices: [15] },
      { type: 'double', photoIndices: [16, 17] }
    ]
  },
  {
    id: 'tour-room-4',
    name: 'Full bathroom',
    subtitle: 'Hairdryer  ·  Hot water  ·  Shampoo  ·  Shower gel',
    thumbnailIndex: 18,
    rows: [
      { type: 'single', photoIndices: [18] }
    ]
  },
  {
    id: 'tour-room-5',
    name: 'Gym',
    subtitle: 'Air conditioning  ·  Gym  ·  Exercise equipment  ·  Ceiling fan',
    thumbnailIndex: 19,
    rows: [
      { type: 'single', photoIndices: [19] },
      { type: 'double', photoIndices: [20, 21] },
      { type: 'double', photoIndices: [22, 23] }
    ]
  },
  {
    id: 'tour-room-6',
    name: 'Exterior',
    subtitle: '',
    thumbnailIndex: 24,
    rows: [
      { type: 'single', photoIndices: [24] },
      { type: 'double', photoIndices: [25, 26] },
      { type: 'single', photoIndices: [27] },
      { type: 'double', photoIndices: [28, 29] }
    ]
  },
  {
    id: 'tour-room-7',
    name: 'Pool',
    subtitle: 'Pool',
    thumbnailIndex: 30,
    rows: [
      { type: 'single', photoIndices: [30] },
      { type: 'double', photoIndices: [31, 32] }
    ]
  },
  {
    id: 'tour-room-8',
    name: 'Additional photos',
    subtitle: '',
    thumbnailIndex: 33,
    rows: [
      { type: 'single', photoIndices: [33] },
      { type: 'double', photoIndices: [34, 35] },
      { type: 'single', photoIndices: [36] },
      { type: 'double', photoIndices: [37, 38] },
      { type: 'single', photoIndices: [39] },
      { type: 'double', photoIndices: [40, 41] },
      { type: 'single', photoIndices: [42] }
    ]
  }
];

export function PhotoTourModal({ isOpen, photos, onClose, onSelectPhoto }: PhotoTourModalProps) {
  const containerRef = useFocusTrap(isOpen);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isSaved, setIsSaved] = useState(false);

  // Handle Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="photo-tour-overlay"
      id="tourModal"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      ref={containerRef}
    >
      {/* Top Header #tourBar */}
      <header className="_TCWfOg" id="tourBar">
        <button
          className="_ffpbhP _bNHEUf"
          type="button"
          aria-label="Back"
          id="tourBack"
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
                d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <h2 className="_usJUoS">Photo tour</h2>

        <div className="_bLFgMg">
          <button
            className="_bNHEUf"
            type="button"
            aria-label="Share"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
              }
            }}
          >
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
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
                  d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                  fill="none"
                />
              </svg>
            </span>
          </button>

          <button
            className="_bNHEUf"
            type="button"
            aria-label="Save"
            onClick={() => setIsSaved(!isSaved)}
          >
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: isSaved ? '#e41d56' : 'none',
                  stroke: isSaved ? '#e41d56' : 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible'
                }}
              >
                <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* Main Tour Scroll Container */}
      <div className="photo-tour-scroll" id="tourScroll" ref={scrollContainerRef}>
        <div className="_hKlfpJ">
          {/* Top Category Nav Grid */}
          <nav className="_tHVclZ" id="tourNav" aria-label="Photo categories">
            {TOUR_CATEGORIES.map(category => {
              const thumbPhoto = photos[category.thumbnailIndex] || photos[0];
              return (
                <button
                  key={category.id}
                  className="_gKVFNL"
                  type="button"
                  aria-label={category.name}
                  onClick={() => scrollToSection(category.id)}
                >
                  <img
                    loading="lazy"
                    alt=""
                    src={thumbPhoto.src}
                  />
                  <span className="_tAbhrW">{category.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Category Sections */}
          {TOUR_CATEGORIES.map(category => (
            <section key={category.id} className="_AWcqip" id={category.id}>
              <div className="_yZYwUW">
                <div className="_AnkvRF">{category.name}</div>
                {category.subtitle && <div className="_hvJgUS">{category.subtitle}</div>}
              </div>

              <div className="_MbzoEk">
                {category.rows.map((row, rIdx) => {
                  const rowClass = row.type === 'single' ? '_wdcjGJ _vmCONz' : '_wdcjGJ _DLVRjk';
                  return (
                    <div key={rIdx} className={rowClass}>
                      {row.photoIndices.map(pIdx => {
                        const photo = photos[pIdx];
                        if (!photo) return null;
                        return (
                          <button
                            key={pIdx}
                            className="_GXrMIo"
                            type="button"
                            data-idx={pIdx}
                            aria-label={photo.alt || `${category.name} photo`}
                            onClick={() => onSelectPhoto(pIdx)}
                          >
                            <img
                              loading="lazy"
                              alt={category.name}
                              src={photo.src}
                            />
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
