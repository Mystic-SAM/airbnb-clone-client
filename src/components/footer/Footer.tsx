import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="airbnb-footer-container" aria-label="Airbnb Footer">
      <div className="airbnb-footer-content">
        {/* 4 Column Navigation Grid */}
        <div className="airbnb-footer-grid">
          <div className="airbnb-footer-col">
            <h3 className="airbnb-footer-col-title">Support</h3>
            <ul className="airbnb-footer-links">
              <li><a href="#help" onClick={(e) => e.preventDefault()}>Help Centre</a></li>
              <li><a href="#aircover" onClick={(e) => e.preventDefault()}>AirCover</a></li>
              <li><a href="#antidiscrimination" onClick={(e) => e.preventDefault()}>Anti-discrimination</a></li>
              <li><a href="#disability" onClick={(e) => e.preventDefault()}>Disability support</a></li>
              <li><a href="#cancellation" onClick={(e) => e.preventDefault()}>Cancellation options</a></li>
              <li><a href="#report" onClick={(e) => e.preventDefault()}>Report neighbourhood concern</a></li>
            </ul>
          </div>

          <div className="airbnb-footer-col">
            <h3 className="airbnb-footer-col-title">Hosting</h3>
            <ul className="airbnb-footer-links">
              <li><a href="#host" onClick={(e) => e.preventDefault()}>Airbnb your home</a></li>
              <li><a href="#aircover-hosts" onClick={(e) => e.preventDefault()}>AirCover for Hosts</a></li>
              <li><a href="#hosting-resources" onClick={(e) => e.preventDefault()}>Hosting resources</a></li>
              <li><a href="#community-forum" onClick={(e) => e.preventDefault()}>Community forum</a></li>
              <li><a href="#hosting-responsibly" onClick={(e) => e.preventDefault()}>Hosting responsibly</a></li>
              <li><a href="#join-class" onClick={(e) => e.preventDefault()}>Join a free Hosting class</a></li>
            </ul>
          </div>

          <div className="airbnb-footer-col">
            <h3 className="airbnb-footer-col-title">Airbnb</h3>
            <ul className="airbnb-footer-links">
              <li><a href="#newsroom" onClick={(e) => e.preventDefault()}>Newsroom</a></li>
              <li><a href="#features" onClick={(e) => e.preventDefault()}>New features</a></li>
              <li><a href="#careers" onClick={(e) => e.preventDefault()}>Careers</a></li>
              <li><a href="#investors" onClick={(e) => e.preventDefault()}>Investors</a></li>
              <li><a href="#emergency-stays" onClick={(e) => e.preventDefault()}>Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Settings */}
        <div className="airbnb-footer-bottom">
          <div className="airbnb-footer-legal">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="airbnb-footer-dot">·</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a>
            <span className="airbnb-footer-dot">·</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
            <span className="airbnb-footer-dot">·</span>
            <a href="#sitemap" onClick={(e) => e.preventDefault()}>Sitemap</a>
            <span className="airbnb-footer-dot">·</span>
            <a href="#company" onClick={(e) => e.preventDefault()}>Company details</a>
          </div>

          <div className="airbnb-footer-settings">
            <button type="button" className="airbnb-footer-lang-btn" aria-label="Choose language: English (IN)">
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="m8.002.25a7.75 7.75 0 1 0 7.748 7.75 7.75 7.75 0 0 0 -7.748-7.75zm5.952 7h-2.952a15.66 15.66 0 0 0 -1.332-5.18 6.27 6.27 0 0 1 4.284 5.18zm-7.954-5.18a14.2 14.2 0 0 1 1.954 5.18h-3.908a14.2 14.2 0 0 1 1.954-5.18zm-2.282 5.18h-2.952a6.27 6.27 0 0 1 4.284-5.18 15.66 15.66 0 0 0 -1.332 5.18zm-2.952 1.5h2.952a15.66 15.66 0 0 0 1.332 5.18 6.27 6.27 0 0 1 -4.284-5.18zm7.954 5.18a14.2 14.2 0 0 1 -1.954-5.18h3.908a14.2 14.2 0 0 1 -1.954 5.18zm2.282-5.18h2.952a6.27 6.27 0 0 1 -4.284 5.18 15.66 15.66 0 0 0 1.332-5.18z" fill="currentColor" />
              </svg>
              <span>English (IN)</span>
            </button>

            <button type="button" className="airbnb-footer-currency-btn" aria-label="Choose currency: INR">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
