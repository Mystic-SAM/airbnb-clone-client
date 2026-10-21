---
name: visual-regression
description: Compare the implemented web application against a visual reference using screenshots and structured visual inspection, then identify and prioritize differences in layout, typography, spacing, colors, imagery, states, and overlays.
---

# Visual Regression Skill

Use this skill when validating whether the implementation visually matches the reference application.

The objective is to systematically identify visual differences instead of relying on subjective impressions.

## Core Principle

Always compare the implementation against the reference at the same:

- viewport size
- page state
- scroll position
- interaction state

A comparison is meaningful only when the conditions are equivalent.

## Originality Requirement

The reference application is used only for:

- visual comparison
- behavioral observation
- validation

Do not:
- copy source code
- copy CSS
- extract implementation details
- reuse proprietary internal code
- modify the reference application

The purpose of this skill is validation, not source replication.

## Validation Workflow

Follow this loop:

1. Start the implementation.
2. Open the relevant route/state.
3. Set the target viewport size.
4. Set the appropriate scroll position.
5. Capture or inspect the implementation.
6. Compare it against the reference.
7. Identify differences.
8. Classify differences.
9. Prioritize the largest discrepancies.
10. Fix the implementation.
11. Re-run the comparison.
12. Repeat until remaining differences are minor.

Do not declare visual completion after a single pass.

## Comparison Categories

Classify every significant mismatch into one or more categories.

### 1. Global Layout

Check:

- viewport dimensions
- page width
- content max-width
- horizontal gutters
- header height
- overall vertical rhythm
- major section positions

### 2. Component Geometry

Check:

- width
- height
- padding
- margins
- gaps
- alignment
- border radius
- card dimensions
- control dimensions

### 3. Typography

Check:

- font family
- font size
- weight
- line height
- letter spacing
- wrapping
- truncation
- text color

Typography differences that cause downstream layout differences should be fixed before minor spacing issues.

### 4. Colors

Check:

- page background
- card surfaces
- primary text
- secondary text
- muted text
- borders
- buttons
- accents
- overlays

Prefer using shared CSS variables for recurring values.

### 5. Imagery

Check:

- correct image
- image ordering
- image dimensions
- aspect ratio
- crop
- object position
- border radius
- overlays
- quality

An image can be technically correct but visually wrong because of incorrect cropping.

### 6. Positioning

Check:

- relative alignment
- fixed elements
- sticky elements
- overlay positioning
- header positioning
- reservation card positioning
- gallery positioning

### 7. Interactive States

Check:

- hover
- focus
- active
- selected
- open
- closed
- disabled
- pressed

A static screenshot is not enough when a state is interactive.

### 8. Overlays and Dialogs

For Photo Tour and Lightbox inspect:

- overlay coverage
- background darkness/opacity
- modal size
- image size
- image alignment
- controls
- close button
- navigation arrows
- counter
- transitions
- scroll locking
- focus behavior

## State-by-State Validation

Validate the following states separately.

### Listing Page

At minimum inspect:

- initial page load
- normal scrolling position
- interactive controls
- gallery hover/focus states
- reservation card

### Photo Tour

Inspect:

- closed state
- opening transition
- fully open state
- gallery scrolling
- image interactions
- close interaction
- closing transition

### Lightbox

Inspect:

- initial open state
- image position
- previous image
- next image
- first image boundary
- last image boundary
- ArrowLeft
- ArrowRight
- Escape
- close button
- transition between images

## Viewport Consistency

Use the same viewport dimensions when comparing reference and implementation.

Prefer a small number of meaningful desktop viewports rather than testing many arbitrary sizes.

For example:

- target reference viewport
- one wider desktop viewport
- one narrower desktop viewport

The exact sizes should be determined from the actual reference environment.

Record the viewport used for each important comparison.

## Scroll Consistency

When comparing screenshots:

- match scroll position
- ensure sticky elements are in the same state
- ensure lazy-loaded content is loaded
- ensure animations have settled
- ensure the same interaction state is active

Do not compare an animation halfway through against a static reference.

## Animation Validation

When the reference contains animations, compare:

- start state
- end state
- direction
- duration
- opacity changes
- scale changes
- movement
- easing
- sequencing

If exact timing cannot be confidently observed, document that limitation instead of inventing a precise value.

## Difference Prioritization

Fix visual issues in this order:

### Priority 1 — Structural

- incorrect layout
- missing sections
- incorrect major dimensions
- wrong number of columns
- wrong gallery structure
- misplaced reservation card
- incorrect overlay structure

### Priority 2 — Geometry

- spacing
- alignment
- component sizes
- image dimensions
- gaps
- section heights

### Priority 3 — Typography

- font size
- weight
- line height
- wrapping
- text position

### Priority 4 — Visual Styling

- colors
- borders
- radius
- shadows

### Priority 5 — Fine Details

- small icon offsets
- 1–3 px spacing differences
- subtle opacity differences
- tiny shadow differences

Never spend substantial effort on Priority 5 while Priority 1 or 2 differences remain.

## Difference Report

For each validation cycle, create a concise report.

Example:

# Visual Regression Report

## Viewport

`1440 × 900`

## State

`Listing Page — initial`

## Findings

| Priority | Area | Reference | Implementation | Recommended Fix |
|---|---|---|---|---|
| High | Page width | ... | ... | ... |
| High | Hero gallery | ... | ... | ... |
| Medium | Heading | ... | ... | ... |
| Low | Icon spacing | ... | ... | ... |

## Overall Result

Describe:
- major mismatches
- resolved mismatches
- remaining differences
- uncertainties

Do not give an arbitrary numerical score unless an objective measurement method is available.

## Screenshot Naming

When saving comparison artifacts, use descriptive names.

Examples:

```text
listing-reference-1440x900.png
listing-implementation-1440x900.png

photo-tour-reference-1440x900.png
photo-tour-implementation-1440x900.png

lightbox-reference-1440x900.png
lightbox-implementation-1440x900.png