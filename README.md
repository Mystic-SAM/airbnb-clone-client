# Airbnb Clone — Take-Home Assignment

A pixel-perfect, desktop-only frontend implementation of an Airbnb vacation rental marketplace listing page, reverse-engineered from observable reference behavior and built using **React 19**, **Vite 6**, **TypeScript 5**, and **Vanilla CSS Custom Properties**.

---

## 🚀 Live Demo & Reference Links

- **Live Production App**: [https://powerplay-labs-airbnb-clone-client.vercel.app](https://powerplay-labs-airbnb-clone-client.vercel.app)
- **Reference Application**: [https://airbnb-clone-umber-two.vercel.app/](https://airbnb-clone-umber-two.vercel.app/)

---

## ✨ Features & Implementation Highlights

- **5-Photo Hero Gallery**: Asymmetrical grid layout (`35fr 17fr 17fr`) with exact photo mapping (`photo-07`, `photo-04`, `photo-05`, `photo-13`, `photo-29`), hover scrims, and "Show all photos" trigger.
- **Two-Way URL Modal State Routing** (`useModalParam`):
  - **Photo Tour Modal** (`?modal=PHOTO_TOUR_SCROLLABLE`): Fullscreen modal with top 9-category visual thumbnail bar (`#tourNav`), 88px sticky header, 2-column room layouts, and smooth category section scrolling.
  - **Lightbox Modal** (`?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<id>`): Clean white-background image viewer (`#ffffff`) with photo counter (`X of 43`), grid return button (`#lbGrid`), keyboard arrow navigation (`Left`/`Right`), and `Escape` dismiss.
  - **Amenities Modal** (`?modal=AMENITIES`): Complete 50-amenity modal categorized across 11 groups with real-time search filter and unavailable strikethrough styling.
- **Guest Favourite Badge Card**: 3-column badge layout with authentic laurel wreath SVGs, rating (`4.95`), and 19 reviews.
- **Sticky Reservation Card**: 372px sidebar (`position: sticky; top: 100px`) featuring date range inputs, interactive Guest Selector popover (+/- counters with capacity boundaries), dynamic 10% promo discount recalculation (`₹28,499` → `₹25,649`), and gradient Reserve button.
- **Dynamic Scroll Spy Navigation** (`useScrollSpy`): Sticky subheader with active underline indicator automatically tracking section visibility (`Photos | Amenities | Reviews | Location`) during scroll and tab clicks.
- **Reviews & Category Ratings Breakdown**: 7-column breakdown grid (5-star bar distribution + Cleanliness, Accuracy, Check-in, Communication, Location, Value), 10 attribute filter chips, and 6 review cards with avatars and expandable text toggles.
- **Interactive Vector Map**: 1120px × 480px vector-styled map surface with Candolim house pin badge and zoom controls.
- **Host & Co-Hosts Profile**: Host card for *Mirashya Homes* with 88×88px avatar, verified badge, and 8 co-hosts grid.
- **More Stays Nearby**: 8 property cards with 2-line title wrapping, ratings, pricing, and 2-page carousel sliding transitions.
- **100% Localized Asset Pipeline**: 73 local media assets (`/assets/images/...`) eliminating remote rate limits and CORS errors.

---

## 🛠️ Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js**: `v18.0.0` or higher (Recommended: `v20.x` or `v24.x`)
- **npm**: `v9.0.0` or higher

---

## 📦 Setup & Installation Instructions

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Airbnb-Clone-App.git
cd Airbnb-Clone-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

Run the Vite development server locally:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000/  (or http://localhost:5173/)
```

### 4. Build for Production

To create an optimized, type-checked production build:

```bash
npm run build
```

This compiles TypeScript (`tsc -b`) and bundles static assets into the `dist/` directory via Vite.

### 5. Preview Production Build

To preview the compiled production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
Airbnb-Clone-App/
├── public/
│   └── assets/
│       └── images/
│           ├── listing/       # 43 full gallery JPEGs (photo-01.jpg to photo-43.jpg)
│           ├── avatars/       # Host, co-hosts, and reviewer avatar images
│           ├── chips/         # 10 review rating chip PNG icons
│           ├── similar/       # 6 nearby stay property thumbnails
│           └── ui/            # SVG vector badges (laurels, house pin, search pill)
├── src/
│   ├── components/
│   │   ├── common/            # Icons, SkipLink, common UI controls
│   │   ├── footer/            # Footer component
│   │   ├── gallery/           # HeroGallery, PhotoTourModal, LightboxModal
│   │   ├── host/              # HostSection, HostCard, CoHostsGrid
│   │   ├── layout/            # GlobalHeader, StickySubHeader
│   │   ├── listing/           # ListingHeader, PropertyHeader
│   │   ├── location/          # LocationSection, InteractiveMap
│   │   ├── nearby/            # NearbyStaysSection, Carousel
│   │   ├── policies/          # ThingsToKnowSection
│   │   ├── property/          # Highlights, Description, SleepingArrangements, AmenitiesPreview, AmenitiesModal, AvailabilityCalendar
│   │   ├── reservation/       # ReservationCard, GuestSelectorPopover, PromoBanner
│   │   └── reviews/           # ReviewsSection, RatingHeader, RatingCategoryGrid, ReviewCard
│   ├── data/                  # Typed mock datasets (galleryData, listingData, amenitiesData, etc.)
│   ├── hooks/                 # Reusable custom hooks (useScrollSpy, useModalParam, useFocusTrap)
│   ├── types/                 # TypeScript interfaces (gallery, listing, reservation, reviews, etc.)
│   ├── utils/                 # Formatters and keyboard helpers
│   ├── App.tsx                # Main application component & layout assembly
│   ├── main.tsx               # React DOM root entry point
│   └── index.css              # Global CSS custom properties, design tokens, and utility classes
├── docs/                      # AI development logs, prompt records, reference analysis, and architecture plans
│   ├── AI_CONVERSATION_LOG.md # Complete AI-assisted development record
│   ├── PROMPTS.md             # Sequential prompt execution log (Prompts 01–20)
│   ├── REFERENCE_ANALYSIS.md  # Reverse-engineered reference analysis specification
│   ├── ARCHITECTURE_PLAN.md   # Practical implementation & production system design
│   ├── architecture-diagram.pdf # 1-page landscape vector architecture diagram
│   └── architecture-diagram.excalidraw # Editable Excalidraw source diagram
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                # Vercel SPA routing configuration
└── README.md
```

---

## 📄 Documentation & Architecture Artifacts

- 📖 [**AI Conversation Log**](docs/AI_CONVERSATION_LOG.md): Comprehensive chronological record of AI pairing workflows, DevTools MCP reverse-engineering sessions, screenshot visual regressions, and deployment validations.
- 📋 [**Prompt Execution Log**](docs/PROMPTS.md): Sequential prompt history tracking Prompts 01 through 20.
- 🔍 [**Reference Analysis**](docs/REFERENCE_ANALYSIS.md): 16-section DOM hierarchy, CSS token, and behavioral reverse-engineering document.
- 🏗️ [**Architecture Plan**](docs/ARCHITECTURE_PLAN.md): Frontend design system and enterprise-grade marketplace architecture design.
- 📐 [**Production Architecture Diagram (PDF)**](docs/architecture-diagram.pdf): 1-page landscape vector diagram detailing client edge, API gateway, microservices, database replicas, Redis cluster, OpenSearch, and CI/CD pipelines.

---

## 🛠️ Built With

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 6 (`vite`, `@vitejs/plugin-react`)
- **Language**: TypeScript 5 (`typescript`)
- **Styling**: Vanilla CSS (CSS Custom Properties)
- **Deployment**: Vercel Edge Network
