import { useState } from 'react';
import { ShareIcon, HeartIcon } from '../common/Icons';
import './ListingHeader.css';

interface ListingHeaderProps {
  title: string;
}

export function ListingHeader({ title }: ListingHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleSaveToggle = () => {
    setIsSaved(prev => !prev);
  };

  return (
    <section className="_DbxOEt listing-header" id="photos">
      <h1 className="_WQsVLm listing-title">{title}</h1>

      <div className="_aZSeca listing-actions">
        <button
          type="button"
          className="_EmrQRK listing-action-btn"
          id="shareBtn"
          onClick={handleShare}
          aria-label="Share this listing"
        >
          <span className="_oQmVpq action-icon-wrap">
            <ShareIcon />
          </span>
          <span className="_uOQIyx action-label">Share</span>
        </button>

        <button
          type="button"
          className={`_EmrQRK listing-action-btn ${isSaved ? '_nfavct saved' : ''}`}
          id="saveBtn"
          onClick={handleSaveToggle}
          aria-label={isSaved ? 'Remove from saved' : 'Save this listing'}
        >
          <span className="_oQmVpq action-icon-wrap">
            <HeartIcon isFilled={isSaved} />
          </span>
          <span className="_uOQIyx action-label">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </section>
  );
}
