# Reference Analysis

## 1. Executive Summary

- **Reference URL**: `https://airbnb-clone-umber-two.vercel.app/`
- **Application Target**: Desktop-only pixel-accurate reproduction of an Airbnb property listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10").
- **Inspection Methodology**: Live DevTools inspection via Chrome DevTools MCP (DOM tree analysis, CSS style extraction, computed bounding box measurements, accessibility snapshot evaluation, and interactive state validation).
- **Core Views Identified**:
  1. **Listing Page**: Comprehensive property details page with sticky search header, sticky secondary anchor bar upon scrolling, 5-photo hero gallery, 2-column layout with left content and right sticky reservation card, guest favorite badge, host profile, amenity breakdown, interactive calendar mock, review metrics, location section, and nearby stays carousel.
  2. **Photo Tour Modal** (`?modal=PHOTO_TOUR_SCROLLABLE`): Full-screen categorized gallery overlay with category navigation pills and organized photo stream (43 total property photos across 9 categories).
  3. **Lightbox Modal** (`?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000`): Full-screen single-photo modal viewer featuring counter (`X of 43`), title, previous/next controls, and keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
  4. **Amenities Dialog** (`What this place offers` modal): Center-positioned scrollable modal displaying all 50 amenities categorized into 11 functional groups.

---

## 2. Page Structure

The application hierarchy comprises the following top-level semantic structure:

```
<div id="root">
  ├── <a class="_DLLasj" href="#main">Skip to content</a> (Visually hidden until focused)
  ├── <header class="_Ugwssa" id="siteHeader"> (Global Sticky/Top Header)
  │     ├── Logo (Airbnb Rausch SVG link)
  │     ├── Search Bar ("Anywhere | Anytime | Add guests" + search icon button)
  │     └── User Navigation ("Become a host" link, Language/Currency button, User menu button)
  ├── <nav class="_JXzroy"> (Sticky Secondary Header, appears on scroll past gallery)
  │     ├── Tab Links: Photos, Amenities, Reviews, Location
  │     └── Compact Summary: Price per night, Rating/Review summary, "Reserve" action button
  ├── <main id="main">
  │     ├── Listing Header: <h1> Title, "Share" button, "Save" (Wishlist toggle) button
  │     ├── <section> Hero Gallery: 5-photo asymmetrical grid with "Show all photos" button
  │     └── <div class="_lhKJir"> Two-Column Content Layout:
  │           ├── <div class="_joiPBF"> Left Column:
  │           │     ├── Property Subtitle & Capacity Specs
  │           │     ├── Guest Favourite Rating Callout Card
  │           │     ├── Host Snippet (Avatar, Host Name, Hosting tenure)
  │           │     ├── Feature Highlights (Outdoor entertainment, Cooling, Self check-in)
  │           │     ├── Translation Banner ("Some info has been automatically translated")
  │           │     ├── Description section with "Show more" expander
  │           │     ├── "Where you'll sleep" Bed configuration cards
  │           │     ├── "What this place offers" Amenity highlights + "Show all 50 amenities" button
  │           │     └── Calendar section (October & November 2026 dual-month display)
  │           └── <aside class="_iJTxKe"> Right Column:
  │                 └── <div class="_bUsxCi"> Sticky Reservation Card:
  │                       ├── Promotion banner ("Get 10% off your next stay")
  │                       ├── Pricing display (`₹28,499 for 5 nights`)
  │                       ├── Date inputs (CHECK-IN 10/18/2026 | CHECKOUT 10/23/2026)
  │                       ├── Guests dropdown selector ("2 guests")
  │                       ├── "Reserve" gradient action button
  │                       ├── Disclaimer ("You won't be charged yet")
  │                       └── "Report this listing" link
  │     ├── <section> Reviews Section:
  │     │     ├── Overall Score Banner (4.95 Guest Favourite, 19 reviews)
  │     │     ├── Rating Breakdown Categories (Cleanliness, Accuracy, Check-in, Communication, Location, Value)
  │     │     ├── Review Category Tags / Pills
  │     │     ├── 2-column Grid of Guest Reviews with "Show more" truncation
  │     │     └── "Show all 19 reviews" modal trigger
  │     ├── <section> Location Section:
  │     │     ├── Map canvas mock / interactive coordinates pin
  │     │     ├── Map controls (Zoom in, Zoom out)
  │     │     └── Neighbourhood highlights
  │     ├── <section> Host Profile Section:
  │     │     ├── Detailed Host Card (Avatar, Badge, Superhost/Tenure stats)
  │     │     ├── Co-hosts list
  │     │     └── "Message host" action button
  │     ├── <section> "Things to know":
  │     │     ├── Cancellation policy
  │     │     ├── House rules
  │     │     └── Safety & property
  │     └── <section> "More stays nearby":
  │           └── Horizontal carousel of 8 related property cards with pagination arrows
  └── Overlays / Modals (Rendered dynamically into body / portal):
        ├── Photo Tour Dialog (`dialog[aria-label="Photo tour"]`)
        ├── Lightbox Photo Viewer (`dialog[aria-label="Photo viewer"]`)
        └── Amenities Dialog (`dialog[aria-label="What this place offers"]`)
```

---

## 3. Visual Specification

### Design Tokens (Extracted directly from root CSS styles)
- `[Observed]` **Primary Text Color (`--ink`)**: `#222222`
- `[Observed]` **Secondary / Muted Text (`--muted`)**: `#6a6a6a`
- `[Observed]` **Muted Subtext (`--muted2`)**: `#717171`
- `[Observed]` **Borders (`--line`)**: `#dddddd`
- `[Observed]` **Subtle Dividers (`--line-soft`)**: `#ebebeb`
- `[Observed]` **Card Border (`--card-border`)**: `rgba(0, 0, 0, 0.08)`
- `[Observed]` **Brand Accent (`--rausch`)**: `#ff385c`
- `[Observed]` **Reserve Button Gradient (`--reserve`)**: `linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%)`
- `[Observed]` **Reserve Button Hover Gradient (`--reserve-hover`)**: `linear-gradient(to right, #d81b5f 0%, #c31a5b 50%, #bd0463 100%)`
- `[Observed]` **Background Neutrals**:
  - `--grey100`: `#f7f7f7`
  - `--grey200`: `#f2f2f2`
  - `--grey300`: `#ebebeb`
  - Base background: `#ffffff`
- `[Observed]` **Shadows**:
  - `--shadow-card`: `0 6px 16px rgba(0, 0, 0, 0.12)`
  - `--shadow-hover`: `0 2px 4px rgba(0, 0, 0, 0.18)`
  - Sticky subheader / search shadow: `0 1px 4px rgba(0, 0, 0, 0.08)`

### Typography
- `[Observed]` **Font Family**: `"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif`
- `[Observed]` **Typography Scale**:
  - **Main Listing Title (`h1`)**: `26px`, line-height `30px`, font-weight `500`
  - **Section Headings (`h2`)**: `22px`, line-height `26px`, font-weight `500`
  - **Sub-headings (`h3`)**: `18px`, font-weight `500`
  - **Body / Standard Text**: `14px` - `16px`, line-height `1.43` - `1.5`, font-weight `400`
  - **Button / Interactive Label**: `14px` - `16px`, font-weight `500`
  - **Microcopy / Badges / Captions**: `10px` - `13px`, font-weight `500` / `700`

---

## 4. Layout Specification

- `[Observed]` **Container Width (`--container`)**: `1280px` max-width, centered (`margin: 0 auto`).
- `[Observed]` **Page Gutters**: `padding: 0 80px` on desktop (`>1128px`).
- `[Observed]` **Global Header Height**: `88px` (inner grid `height: 88px; max-width: 1760px`).
- `[Observed]` **Main Content Two-Column Grid**:
  - Left column: `minmax(0, 1fr)` (flexible main listing content).
  - Right column: `372px` (fixed-width sidebar container).
  - Column gap: `96px`.
- `[Observed]` **Section Vertical Spacing**: `padding: 32px 0` or `padding: 48px 0` with `1px solid #ebebeb` top border separators.
- `[Observed]` **Sticky Header**: Fixed at `top: 0`, `height: 66px`, slides down smoothly when scrolling past hero gallery.

---

## 5. Gallery Specification

- `[Observed]` **Item Count**: Exactly 5 visible photos in the main hero display.
- `[Observed]` **Grid Arrangement**:
  - CSS Grid: `grid-template-columns: 35fr 17fr 17fr; grid-template-rows: 1fr 1fr; gap: 8px;`
  - Aspect Ratio: `1120 / 494` (approx. `2.267:1`).
  - Left Hero Item (Image 1): Spans 2 rows (`grid-row: span 2`).
  - Right Items (Images 2, 3, 4, 5): 2x2 grid.
  - Outer border radius: `12px` (applied via `overflow: hidden` on container).
- `[Observed]` **Image Cropping**: `object-fit: cover; width: 100%; height: 100%;`
- `[Observed]` **Hover Effect**: Pseudo-element `::after` transitions `background: rgba(0,0,0,0.1)` on hover with `transition: background 0.2s ease`.
- `[Observed]` **"Show all photos" Button**:
  - Position: `position: absolute; right: 24px; bottom: 24px;`
  - Appearance: White pill/button with black border `1px solid #222`, rounded `8px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.15)`.
  - Icon: 9-dot grid icon + text "Show all photos".
  - Behavior: Opens Photo Tour modal.
- `[Observed]` **Direct Photo Click**: Clicking any of the 5 hero photos directly opens the Lightbox single-photo viewer for that specific image.

---

## 6. Photo Tour Specification

- `[Observed]` **Opening Trigger**: Clicking "Show all photos" button on hero gallery.
- `[Observed]` **Modal Container**: Full viewport overlay (`position: fixed; inset: 0; z-index: 120; background: #fff`).
- `[Observed]` **URL Query State**: `?modal=PHOTO_TOUR_SCROLLABLE`
- `[Observed]` **Top Bar**: Fixed header (`height: 88px; padding: 0 32px`) containing Back arrow button, centered title "Photo tour", and right-aligned "Share" & "Save" action buttons.
- `[Observed]` **Category Navigation**: Horizontal sticky filter bar containing 9 category buttons with representative thumbnail images:
  1. Living room 1
  2. Living room 2
  3. Full kitchen
  4. Bedroom
  5. Full bathroom
  6. Gym
  7. Exterior
  8. Pool
  9. Additional photos
- `[Observed]` **Photo Stream Structure**:
  - 43 total categorized images.
  - Each category has a title (e.g. "Living room 1"), an amenity summary subtitle (e.g. "Sofa · Air conditioning · Ceiling fan · TV"), and an organized 2-column or 1-column responsive image grid.
- `[Observed]` **Hover on Photos**: Images smoothly scale `transform: scale(1.04)` with overlay darkening.
- `[Observed]` **Photo Click in Tour**: Opens single-photo Lightbox for that clicked item.
- `[Observed]` **Close & Back Behavior**: Clicking Back button or pressing `Escape` closes the Photo Tour and restores focus to "Show all photos" button.

---

## 7. Lightbox Specification

- `[Observed]` **Opening Trigger**: Clicking any image in Hero Gallery or within Photo Tour.
- `[Observed]` **URL Query State**: `?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000` (updates query param index).
- `[Observed]` **Modal Container**: Full-screen modal overlay (`position: fixed; inset: 0; z-index: 140; background: #fff` in reference, dark backdrop transitions).
- `[Observed]` **Header Controls**:
  - Top-left: "Show all photos" back navigation button.
  - Top-center: Category Name ("Living room 1").
  - Top-right: Counter indicator ("1 of 43", "2 of 43", ...) and "Close" (X) button.
- `[Observed]` **Navigation Controls**:
  - Previous Button (`<`): Positioned at `left: 20px; top: 50%; transform: translateY(-50%)`. Disabled on image 1 (`opacity: 0.28; cursor: default`).
  - Next Button (`>`): Positioned at `right: 20px; top: 50%; transform: translateY(-50%)`. Disabled on image 43.
- `[Observed]` **Keyboard Accessibility**:
  - `ArrowRight`: Advances to next photo.
  - `ArrowLeft`: Returns to previous photo.
  - `Escape`: Closes Lightbox and returns to Photo Tour (or Listing Page if opened directly).
- `[Observed]` **Image Transitions**: Smooth opacity fade `animation: lbFade 0.3s ease`.

---

## 8. Interaction Specification

| Element | Trigger | Result | State Change | Keyboard Behavior |
|---|---|---|---|---|
| "Show all photos" Button | Click | Opens Photo Tour | `modal=PHOTO_TOUR_SCROLLABLE` | Enter/Space activates; focus moves into modal |
| Hero Photo (1–5) | Click | Opens Lightbox directly | `modalItem=INDEX` | Enter/Space activates |
| Photo in Photo Tour | Click | Opens Lightbox at photo index | `modalItem=INDEX` | Enter/Space activates |
| Lightbox Next Button | Click / `ArrowRight` | Advances photo index | Counter `N+1 of 43` | `ArrowRight` advances |
| Lightbox Prev Button | Click / `ArrowLeft` | Decrements photo index | Counter `N-1 of 43` | `ArrowLeft` decrements |
| Lightbox Close (X) | Click / `Escape` | Closes Lightbox | Removes `modalItem` query | `Escape` closes |
| Photo Tour Back Button | Click / `Escape` | Closes Photo Tour | Clears query params | `Escape` closes; restores focus |
| "Show all 50 amenities" | Click | Opens Amenities Dialog | Opens modal dialog | `Escape` closes; restores focus |
| Sticky Subheader Anchor | Click | Smooth scrolls to section | Smooth scroll to `#photos`, `#amenities`, etc. | Tab focusable |
| "Save" Button (Wishlist) | Click | Toggles favorite state | Heart icon fills with `--rausch` (#ff385c) | Enter/Space toggles |
| "Show more" Description | Click | Expands full description | Removes max-height gradient mask | Enter/Space activates |

---

## 9. Animation and Transition Specification

- `[Observed]` **Modal Opening**: `transform: translateY(28px)` to `translateY(0)` with `opacity: 0` to `1` over `0.3s cubic-bezier(0.2, 0, 0, 1)`.
- `[Observed]` **Sticky Header Entrance**: `transform: translateY(-100%)` to `translateY(0)` with `opacity: 0` to `1` over `0.25s ease`.
- `[Observed]` **Image Hover**: `transform: scale(1.04)` over `0.25s - 0.4s cubic-bezier(0.2, 0, 0, 1)` with subtle dark scrim.
- `[Observed]` **Button Hover / Active**: Smooth background transition `0.15s ease` and active scale `transform: scale(0.96)`.
- `[Observed]` **Lightbox Image Transition**: Cross-fade keyframe animation `animation: lbFade 0.3s ease`.
- `[Observed]` **Reduced Motion**: `@media (prefers-reduced-motion: reduce)` resets animations to `1ms` and disables smooth scrolling.

---

## 10. Accessibility Specification

- `[Observed]` **Semantic HTML**: Extensive use of native semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<button>`, `<a>`, and `<h1>`-`<h3>` headings.
- `[Observed]` **Dialog Roles**: Modals explicitly define `role="dialog"` and `aria-modal="true"`.
- `[Observed]` **Skip Link**: `<a class="_DLLasj" href="#main">Skip to content</a>` present at top of body for keyboard skip navigation.
- `[Observed]` **Focus Management**:
  - Focus is trapped within open modal dialogs.
  - When a modal closes, focus is reliably restored to the triggering element.
- `[Observed]` **Visible Focus Indicators**: `body.kbd :focus-visible` defines `outline: 2px solid #222; outline-offset: 2px; border-radius: 6px`.
- `[Observed]` **Screen Reader Labels**: Images have meaningful `alt` text and interactive buttons have descriptive `aria-label` attributes.

---

## 11. Desktop Behavior

- `[Observed]` **Target Desktop Viewport**: `1440px` (or `1280px`–`1536px`).
- `[Observed]` **Breakpoint Behavior**:
  - `@media (max-width: 1128px)`: Right sidebar collapses; layout converts from 2-column to 1-column; gallery adapts; horizontal padding adjusts to `40px`.
  - `@media (max-width: 743px)`: Mobile layout breakpoint (per requirements, mobile implementation is not required; focus is desktop fidelity).
- `[Observed]` **Sticky Reservation Sidebar**: Remains fixed in view between top header offset (`top: 100px`) and bottom boundary of listing content.

---

## 12. Component Recommendations

1. **`App` / `ListingPage`**: Main orchestrator managing URL query state (`modal`, `modalItem`), active modal state, and scroll listening.
2. **`GlobalHeader`**: Site branding, search bar mock, language/menu buttons.
3. **`StickySubHeader`**: Floating anchor navigation bar with quick pricing & reserve button.
4. **`ListingTitle`**: Property title, rating link, share & save buttons.
5. **`HeroGallery`**: 5-photo grid layout with "Show all photos" button.
6. **`PropertyOverview`**: Room specs, Guest favourite card, host avatar & intro.
7. **`HighlightsList`**: Core feature badges (workspace, pool, self check-in).
8. **`PropertyDescription`**: Expandable rich description text with gradient clamp.
9. **`BedArrangement`**: Sleeping quarters cards (Bedroom double bed, Living room sofa).
10. **`AmenitiesPreview`**: 10 primary amenities preview + trigger button for full modal.
11. **`CalendarWidget`**: Dual-month calendar display with date selection highlight.
12. **`ReservationCard`**: Sticky pricing calculation card with date/guest boxes.
13. **`ReviewsSection`**: Category metric progress bars, review tag pills, guest review cards.
14. **`LocationSection`**: Candolim map container and neighbourhood guide.
15. **`HostSection`**: Superhost profile card, co-hosts list, and message host button.
16. **`ThingsToKnow`**: Policies, house rules, safety notices.
17. **`NearbyStays`**: Carousel with previous/next scroll controls.
18. **`PhotoTourModal`**: Full-screen categorized gallery with sticky filter navigation.
19. **`LightboxModal`**: Full-screen photo viewer with keyboard arrow navigation.
20. **`AmenitiesModal`**: 50-amenity categorized modal dialog.

---

## 13. State Model Recommendations

```typescript
interface AppState {
  // Modal state
  modal: 'NONE' | 'PHOTO_TOUR' | 'LIGHTBOX' | 'AMENITIES' | 'REVIEWS';
  activePhotoIndex: number; // 0 to 42
  
  // UI interaction state
  isSaved: boolean;
  isDescriptionExpanded: boolean;
  selectedCheckInDate: string | null;
  selectedCheckOutDate: string | null;
  guestCount: number;
  
  // Scroll tracking
  isStickySubHeaderVisible: boolean;
}
```

---

## 14. Open Questions / Uncertainties

- `[Observed]` All core layout, typography, CSS tokens, photo tour categories, 43 photo items, and keyboard navigation behaviors have been directly observed.
- `[Likely]` The review tag pills ("Comfort 6", "Accuracy 5", etc.) are informational filters in production; in the reference, clicking them acts as static/mock pill controls.
- `[Approximate]` Exact map coordinates background rendering is a styled mock canvas with radial gradients and SVG pin in the reference rather than a live Google Maps API key integration.

---

## 15. Implementation Risks

1. **Photo Asset Loading**: Ensuring all 43 high-resolution property images are preserved, optimized, and mapped to correct category groupings.
2. **Keyboard Focus Trapping**: Implementing clean focus trap and focus restoration for Photo Tour and Lightbox modals without third-party library bloat.
3. **Scroll Locking**: Ensuring `body` scroll is locked (`overflow: hidden`) when modals are open to prevent double scrollbars.
4. **Desktop Sticky Sidebar Limits**: Ensuring the reservation sidebar sticks properly without jittering when scrolling past reviews.

---

## 16. Acceptance Checklist

- [ ] Global header matches reference layout, search bar, and action buttons.
- [ ] 5-photo hero gallery matches dimensions, grid ratios (`35fr 17fr 17fr`), hover dimming, and "Show all photos" button.
- [ ] Photo Tour modal opens cleanly, displays sticky category nav, and renders all 43 categorized images.
- [ ] Lightbox opens with exact image index, supports `ArrowLeft`, `ArrowRight`, and `Escape` keyboard shortcuts.
- [ ] Boundaries on Lightbox are enforced (Previous disabled on first image, Next disabled on last image).
- [ ] Sticky secondary header appears on scrolling past the hero gallery.
- [ ] Sticky reservation sidebar tracks viewport accurately on desktop.
- [ ] "Show all 50 amenities" modal opens and lists all categorized items.
- [ ] Focus is trapped inside open dialogs and restored to the trigger button upon closing.
- [ ] Typography uses Airbnb Cereal font stack with identical sizes, weights, and line heights.
- [ ] Color tokens match exact design system (`--rausch`, `--reserve`, `--ink`, `--line-soft`).
