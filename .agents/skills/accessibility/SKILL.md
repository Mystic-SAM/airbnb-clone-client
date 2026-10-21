---
name: accessibility
description: Apply practical web accessibility practices to the Airbnb clone, with emphasis on semantic HTML, keyboard navigation, focus management, accessible dialogs, and interactive controls.
---

# Accessibility Skill

Use this skill whenever implementing, reviewing, or modifying interactive UI.

The goal is to make the application accessible without compromising the visual fidelity required by the reference.

## Core Principles

Prefer native HTML semantics over unnecessary ARIA.

Accessibility behavior must work with:
- keyboard
- mouse
- visible focus
- assistive technologies where practical

Do not add ARIA merely because an element looks like a control.

## Semantic HTML

Prefer:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`
- `button`
- `a`
- `ul` / `ol`
- headings in logical order

Do not use:

```html
<div onClick={...}>