---
name: pixel-perfect-ui
description: Build and refine desktop web interfaces for high visual fidelity against a reference, including layout, typography, spacing, images, colors, borders, shadows, states, and animations.
---

# Pixel-Perfect UI Skill

Use this skill whenever implementing or refining a UI that must closely match a visual reference.

The reference is the source of truth for observable visual and behavioral requirements.

## Core Principle

Do not aim for "similar".

Aim for the closest practical reproduction of the observable reference.

Visual fidelity takes priority over personal design preferences or generic UI conventions, provided the implementation remains maintainable and accessible.

## Original Implementation Requirement

The implementation must be original.

Use the reference application only to understand observable behavior and appearance.

Never:
- copy source code
- copy React components
- copy source CSS
- extract and reuse bundled implementation code
- reproduce internal implementation structure
- copy hidden application logic

Create the implementation independently.

## Visual Analysis Before Coding

Before changing a UI element, identify:

- overall dimensions
- position
- alignment
- spacing
- typography
- colors
- borders
- border radius
- shadows
- image dimensions
- image cropping
- visible states
- hover states
- focus states
- active states
- transitions
- surrounding relationships

Prefer understanding the relationship between elements rather than guessing isolated pixel values.

## Layout Fidelity

Pay particular attention to:

### Page container
- maximum width
- horizontal margins
- page gutters
- vertical spacing
- section boundaries

### Grid and flex layouts
- number of columns
- column proportions
- gaps
- alignment
- stretching behavior
- fixed versus flexible dimensions

### Vertical rhythm
Maintain consistent relationships between:
- headings
- paragraphs
- buttons
- cards
- sections
- dividers

Avoid introducing arbitrary margins solely to compensate for another incorrect dimension.

Fix the underlying layout relationship instead.

## Typography Fidelity

Match, as closely as observable:

- font family
- font size
- font weight
- line height
- letter spacing
- text transformation
- text color

Typography differences can significantly affect layout.

When text wraps differently from the reference, investigate:
- width
- font size
- line height
- font weight
- letter spacing

before changing unrelated spacing.

## Color Fidelity

Identify and consistently use the observed visual system.

Create reusable CSS variables when appropriate for recurring values such as:

- primary text
- secondary text
- background
- surface
- border
- accent
- muted background
- overlay

Avoid creating multiple nearly identical values without a reason.

## Borders, Radius and Shadows

Pay close attention to:

- border thickness
- border color
- corner radius
- shadow offset
- shadow blur
- shadow spread
- shadow opacity

Small differences in these properties can make cards and dialogs look noticeably different.

## Image Fidelity

For every image:

- preserve the intended aspect ratio
- reproduce the reference cropping behavior
- use the correct `object-fit` behavior
- use the correct image positioning
- preserve border radii
- avoid unintended distortion
- avoid low-quality scaling when a better source is available

The visual crop is often more important than simply using the correct image.

## Icons

When an icon is required:

- prefer an appropriate existing icon library or an original implementation
- match size
- match stroke/fill treatment
- match alignment
- match visual weight

Do not copy proprietary icon implementations from the reference.

## Interaction States

Implement observable states for:

- hover
- focus
- active
- disabled
- selected
- open
- closed

Do not add visual states that are not needed.

Interactive elements should provide clear feedback without changing layout unexpectedly.

## Animation and Transition Fidelity

When the reference includes motion, reproduce the observable characteristics:

- property being animated
- duration
- easing
- direction
- opacity
- scale
- transform
- sequencing

Prefer CSS transitions and keyframes for simple UI motion.

Keep animation definitions easy to tune.

Avoid introducing a large animation library unless there is a concrete requirement.

## Overlay and Modal Fidelity

For full-screen galleries, lightboxes, dialogs and overlays, inspect:

- viewport coverage
- overlay opacity
- background treatment
- content positioning
- close button position
- navigation controls
- image dimensions
- animation
- scroll locking
- focus behavior

The overlay should feel like a separate visual state rather than merely another page section.

## Responsive Desktop Behavior

This assignment is desktop-only.

Focus on desktop viewport behavior.

Verify the layout at multiple desktop widths and identify:

- minimum practical width
- maximum content width
- flexible regions
- fixed regions
- grid behavior
- text wrapping
- sticky elements
- overflow behavior

Do not spend significant implementation effort on mobile layouts unless explicitly requested.

## Visual Validation Workflow

After implementing a meaningful UI section:

1. Run the application.
2. Open the relevant page/state.
3. Capture or inspect the rendered result.
4. Compare it with the reference.
5. Identify the largest visible differences.
6. Fix those differences.
7. Re-check the result.

Prioritize fixes in this order:

1. Overall structure
2. Major dimensions
3. Positioning and alignment
4. Typography
5. Images and cropping
6. Spacing
7. Colors
8. Borders and radii
9. Shadows
10. Interaction states
11. Animation details

Do not spend significant time tuning tiny details while major layout differences remain.

## Screenshot Comparison

When comparing screenshots, inspect:

### Global
- viewport dimensions
- page margins
- header height
- overall content width

### Section-level
- top and bottom spacing
- column alignment
- section heights
- dividers

### Component-level
- dimensions
- internal padding
- text position
- icon position
- controls
- borders
- shadows

### Pixel-level
Only after structural issues are resolved:
- 1–4 px spacing differences
- line-height differences
- subtle color differences
- shadow intensity
- border radius

## Avoiding CSS Accumulation

Do not repeatedly add overrides such as:

```css
margin-top: 3px;
margin-top: 5px;
margin-top: 2px;