import React from 'react';
import { HostInfoData } from '../../types/host';
import './HostSection.css';

interface HostSectionProps {
  hostData: HostInfoData;
  onMessageHost?: () => void;
}

export const HostSection: React.FC<HostSectionProps> = ({ hostData, onMessageHost }) => {
  return (
    <section className="host-section-container" id="host" aria-label="Host Information">
      <h2 className="host-section-title">Meet your host</h2>

      <div className="host-content-grid">
        {/* Left Column: Host Profile Card & Bio Facts */}
        <div className="host-left-col">
          {/* Card */}
          <div className="host-profile-card">
            {/* Left inside card: Avatar, Name, Title */}
            <div className="host-card-main">
              <div className="host-avatar-badge-wrapper">
                <img
                  src={hostData.avatarUrl}
                  alt={hostData.name}
                  className="host-main-avatar-img"
                  width={88}
                  height={88}
                />
                <span className="host-badge-icon" aria-label="Verified host">
                  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                    <path
                      d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div className="host-name-title">{hostData.name}</div>
              <div className="host-subtitle">{hostData.badgeTitle}</div>
            </div>

            {/* Right inside card: 3 Stats */}
            <div className="host-card-stats">
              <div className="host-stat-row">
                <div className="host-stat-val">{hostData.reviewsCount}</div>
                <div className="host-stat-lbl">Reviews</div>
              </div>
              <div className="host-stat-row">
                <div className="host-stat-val">{hostData.rating}</div>
                <div className="host-stat-lbl">Rating</div>
              </div>
              <div className="host-stat-row">
                <div className="host-stat-val">{hostData.yearsHosting}</div>
                <div className="host-stat-lbl">Years hosting</div>
              </div>
            </div>
          </div>

          {/* Bio Facts */}
          <div className="host-bio-facts-list">
            <div className="host-bio-fact-item">
              <span className="host-fact-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <path
                    d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>{hostData.bioFacts[0]}</span>
            </div>

            <div className="host-bio-fact-item">
              <span className="host-fact-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <path
                    d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>{hostData.bioFacts[1]}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts, Host details, Message host, Safety Note */}
        <div className="host-right-col">
          <h3 className="host-section-subtitle">Co-Hosts</h3>
          <div className="host-cohosts-grid">
            {hostData.coHosts.map((co) => (
              <div key={co.id} className="host-cohost-item">
                {co.avatarType === 'image' && co.avatarSrc ? (
                  <img
                    src={co.avatarSrc}
                    alt={co.name}
                    className="host-cohost-avatar"
                    width={34}
                    height={34}
                  />
                ) : (
                  <div
                    className="host-cohost-initial"
                    style={{
                      backgroundColor: co.initialBg || '#fde7ef',
                      color: co.initialColor || '#d4356e',
                    }}
                    aria-hidden="true"
                  >
                    {co.initial || co.name.charAt(0)}
                  </div>
                )}
                <span className="host-cohost-name">{co.name}</span>
              </div>
            ))}
          </div>

          <h3 className="host-section-subtitle">Host details</h3>
          <div className="host-details-body">
            Response rate: {hostData.responseRate}
            <br />
            {hostData.responseTime}
          </div>

          <button
            type="button"
            className="host-message-btn"
            onClick={onMessageHost}
          >
            Message host
          </button>

          {/* Security / Airbnb Protection Disclaimer */}
          <div className="host-protection-notice">
            <span className="host-protection-shield-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                <path
                  d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
