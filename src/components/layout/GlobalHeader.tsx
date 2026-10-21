import { AirbnbLogo, SearchIcon, GlobeIcon, MenuIcon } from '../common/Icons';
import './GlobalHeader.css';

export function GlobalHeader() {
  return (
    <header className="global-header" id="siteHeader">
      <div className="global-header-inner">
        {/* Left: Logo */}
        <div className="header-logo-container">
          <a href="#" className="header-logo" aria-label="Airbnb homepage">
            <AirbnbLogo />
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="header-search-container" role="search">
          <div className="search-bar">
            <button type="button" className="search-pill-btn">
              <img
                src="/assets/images/ui/searchbar-house.png"
                alt=""
                className="searchbar-house-icon"
                aria-hidden="true"
              />
              Anywhere
            </button>
            <div className="search-divider" aria-hidden="true" />
            <button type="button" className="search-pill-btn">
              Anytime
            </button>
            <div className="search-divider" aria-hidden="true" />
            <button type="button" className="search-pill-btn search-pill-muted">
              Add guests
            </button>
            <button type="button" className="search-action-btn" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Right: User Navigation */}
        <nav className="header-user-nav" aria-label="User navigation">
          <a href="#" className="host-link">
            Become a host
          </a>
          <button type="button" className="icon-circle-btn" aria-label="Choose a language and currency">
            <GlobeIcon />
          </button>
          <button type="button" className="icon-circle-btn" aria-label="Main navigation menu">
            <MenuIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}
