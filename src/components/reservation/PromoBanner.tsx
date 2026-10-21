import React from 'react';

interface PromoBannerProps {
  isClaimed: boolean;
  onClaimToggle: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ isClaimed, onClaimToggle }) => {
  return (
    <div className="_bJChEA">
      <img
        src="/assets/images/ui/discount.svg"
        alt=""
        className="_hbNVom"
        aria-hidden="true"
      />
      <div className="_erTcst">
        Get 10% off your next stay.<br />
        <a
          href="#terms"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Terms apply
        </a>
      </div>
      <button
        type="button"
        className={`_Spojam ${isClaimed ? 'claimed' : ''}`}
        onClick={onClaimToggle}
        aria-pressed={isClaimed}
      >
        {isClaimed ? 'Claimed' : 'Claim'}
      </button>
    </div>
  );
};
